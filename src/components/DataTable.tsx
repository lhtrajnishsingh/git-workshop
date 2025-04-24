import React from "react";
import styled from "styled-components";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableCell, 
  TableHeaderCell,
  Badge
} from "./common";
import { DataItem } from "../types";

interface DataTableProps {
  data: DataItem[];
  expandedRows: Record<string, boolean>;
  onToggleRow: (id: string) => void;
}

const ExpandedContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.accordionBg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const DetailItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const DetailLabel = styled.div`
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.secondary};
`;

const DetailValue = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const PlusIcon = styled.span<{ isExpanded: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.md};
  transform: ${({ isExpanded }) => (isExpanded ? "rotate(45deg)" : "rotate(0)")};
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  
  &::before {
    content: "+";
  }
`;

const getStatusVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "success";
    case "in progress":
      return "primary";
    case "scheduled":
      return "info";
    case "pending":
      return "warning";
    default:
      return "secondary";
  }
};

const DataTable: React.FC<DataTableProps> = ({ data, expandedRows, onToggleRow }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell width="40px"></TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Date</TableHeaderCell>
          <TableHeaderCell>Location</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <TableRow 
              isExpandable={true} 
              isExpanded={!!expandedRows[item.id]} 
              onClick={() => onToggleRow(item.id)}
            >
              <TableCell>
                <PlusIcon isExpanded={!!expandedRows[item.id]} />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(item.status)}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.type}</TableCell>
            </TableRow>
            {expandedRows[item.id] && (
              <TableRow>
                <TableCell colSpan={6}>
                  <ExpandedContent>
                    <DetailGrid>
                      <DetailItem>
                        <DetailLabel>Description</DetailLabel>
                        <DetailValue>{item.details.description}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Assigned To</DetailLabel>
                        <DetailValue>{item.details.assignedTo}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Priority</DetailLabel>
                        <DetailValue>{item.details.priority}</DetailValue>
                      </DetailItem>
                      {item.details.additionalInfo && (
                        <DetailItem>
                          <DetailLabel>Additional Information</DetailLabel>
                          <DetailValue>{item.details.additionalInfo}</DetailValue>
                        </DetailItem>
                      )}
                    </DetailGrid>
                  </ExpandedContent>
                </TableCell>
              </TableRow>
            )}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
