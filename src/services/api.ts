import { ApiResponse, DataItem } from "../types";

// This would be replaced with actual API calls in a real application
export const fetchData = async (): Promise<ApiResponse> => {
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

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    data: mockData,
    totalCount: mockData.length,
    page: 1,
    pageSize: 10
  };
};
