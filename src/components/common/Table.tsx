import React from "react";
import styled from "styled-components";

interface TableProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

interface TableHeaderProps {
  children: React.ReactNode;
}

interface TableBodyProps {
  children: React.ReactNode;
}

interface TableRowProps {
  children: React.ReactNode;
  onClick?: () => void;
  isExpandable?: boolean;
  isExpanded?: boolean;
}

interface TableCellProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  width?: string;
}

const StyledTable = styled.table<{ fullWidth: boolean }>`
  border-collapse: collapse;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`;

const StyledTableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.accordionBg};
`;

const StyledTableBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.cardBg};
`;

const StyledTableRow = styled.tr<{ isExpandable: boolean; isExpanded: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: ${({ isExpandable }) => (isExpandable ? "pointer" : "default")};
  background-color: ${({ isExpanded, theme }) =>
    isExpanded ? "rgba(0, 86, 179, 0.05)" : "inherit"};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${({ theme }) => "rgba(0, 86, 179, 0.05)"};
  }
`;

const StyledTableCell = styled.td<{ align: string; width?: string }>`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: ${({ align }) => align};
  width: ${({ width }) => width || "auto"};
  vertical-align: middle;
`;

const StyledTableHeaderCell = styled.th<{ align: string; width?: string }>`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: ${({ align }) => align};
  width: ${({ width }) => width || "auto"};
  font-weight: 600;
`;

const Table: React.FC<TableProps> = ({ children, fullWidth = true }) => {
  return <StyledTable fullWidth={fullWidth}>{children}</StyledTable>;
};

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};

const TableRow: React.FC<TableRowProps> = ({
  children,
  onClick,
  isExpandable = false,
  isExpanded = false,
}) => {
  return (
    <StyledTableRow
      isExpandable={isExpandable}
      isExpanded={isExpanded}
      onClick={onClick}
    >
      {children}
    </StyledTableRow>
  );
};

const TableCell: React.FC<TableCellProps> = ({
  children,
  align = "left",
  width,
}) => {
  return (
    <StyledTableCell align={align} width={width}>
      {children}
    </StyledTableCell>
  );
};

const TableHeaderCell: React.FC<TableCellProps> = ({
  children,
  align = "left",
  width,
}) => {
  return (
    <StyledTableHeaderCell align={align} width={width}>
      {children}
    </StyledTableHeaderCell>
  );
};

export { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell };
