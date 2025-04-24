export interface DataItem {
  id: string;
  name: string;
  status: string;
  date: string;
  location: string;
  type: string;
  details: {
    description: string;
    assignedTo: string;
    priority: string;
    additionalInfo?: string;
  };
}

export interface ApiResponse {
  data: DataItem[];
  totalCount: number;
  page: number;
  pageSize: number;
}
