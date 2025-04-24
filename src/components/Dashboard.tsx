import React, { useState } from "react";
import styled from "styled-components";
import { Card, Badge } from "./common";
import DataTable from "./DataTable";
import { DataItem } from "../types";

// Mock data for demonstration
const mockData: DataItem[] = [
  {
    id: "1",
    name: "Warehouse Inspection",
    status: "Completed",
    date: "2023-04-15",
    location: "Atlanta, GA",
    type: "Inspection",
    details: {
      description: "Regular inspection of warehouse facilities",
      assignedTo: "John Smith",
      priority: "Medium",
      additionalInfo: "All requirements met"
    }
  },
  {
    id: "2",
    name: "Temperature Control Audit",
    status: "In Progress",
    date: "2023-04-18",
    location: "Dallas, TX",
    type: "Audit",
    details: {
      description: "Audit of temperature control systems",
      assignedTo: "Sarah Johnson",
      priority: "High",
      additionalInfo: "Focus on freezer section"
    }
  },
  {
    id: "3",
    name: "Safety Training",
    status: "Scheduled",
    date: "2023-04-25",
    location: "Chicago, IL",
    type: "Training",
    details: {
      description: "Quarterly safety training for staff",
      assignedTo: "Michael Brown",
      priority: "Medium",
      additionalInfo: "All staff required to attend"
    }
  },
  {
    id: "4",
    name: "Inventory Reconciliation",
    status: "Pending",
    date: "2023-04-20",
    location: "Phoenix, AZ",
    type: "Inventory",
    details: {
      description: "Monthly inventory count and reconciliation",
      assignedTo: "Emily Davis",
      priority: "High",
      additionalInfo: "Focus on discrepancies from last month"
    }
  },
  {
    id: "5",
    name: "Equipment Maintenance",
    status: "Completed",
    date: "2023-04-10",
    location: "Seattle, WA",
    type: "Maintenance",
    details: {
      description: "Scheduled maintenance of refrigeration units",
      assignedTo: "Robert Wilson",
      priority: "Medium",
      additionalInfo: "All units serviced and operational"
    }
  }
];

const DashboardContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const DashboardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.dark};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const StatCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const StatTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatValue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const TableSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const TableTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.dark};
`;

const Dashboard: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const toggleRowExpansion = (id: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Calculate stats from data
  const completedCount = mockData.filter((item) => item.status === "Completed").length;
  const inProgressCount = mockData.filter((item) => item.status === "In Progress").length;
  const pendingCount = mockData.filter((item) => item.status === "Pending" || item.status === "Scheduled").length;

  return (
    <DashboardContainer>
      <DashboardHeader>
        <Title>Americold UseCases Dashboard</Title>
        <Subtitle>Monitor and manage all use cases across locations</Subtitle>
      </DashboardHeader>

      <StatsContainer>
        <StatCard>
          <StatTitle>Total Use Cases</StatTitle>
          <StatValue>{mockData.length}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Completed</StatTitle>
          <StatValue>{completedCount}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>In Progress</StatTitle>
          <StatValue>{inProgressCount}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Pending</StatTitle>
          <StatValue>{pendingCount}</StatValue>
        </StatCard>
      </StatsContainer>

      <TableSection>
        <TableTitle>Use Cases</TableTitle>
        <DataTable 
          data={mockData} 
          expandedRows={expandedRows} 
          onToggleRow={toggleRowExpansion} 
        />
      </TableSection>
    </DashboardContainer>
  );
};

export default Dashboard;
