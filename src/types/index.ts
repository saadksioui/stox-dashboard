export interface NotificationDataType {
  icon: React.ReactNode;
  content: string;
  timestamp: string;
  read: boolean;
}

export type SidebarLinkType = {
  icon: React.ReactNode;
  name: string;
  href: string;
  id: string | number;
};

export type SidebarLinksType = SidebarLinkType[];

export type cardsType = {
  icon: React.ReactNode,
  title: string,
  value: string,
  percentage: string
}

export type cardPropsType = {
  icon: React.ReactNode,
  title: string,
  value: string,
  percentage: string
}

export type ordersType = {
  Image: string,
  Product: string,
  Price: number,
  Date: string,
  Status: string,
  createdAt: string,
}

export type Customer = {
  id: number;
  name: string;
  email: string;
  gender: string;
  sales: string;
  joinedDate: string;
};

export interface Product {
  ID: number;
  Name: string;
  Image: string;
  Category: string;
  Price: number;
  Ratings: number;
  Orders: number;
  Stock: number;
}

export type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled";

export type Order = {
  OrderID: string;
  Customer: string;
  OrderDate: string;
  Status: OrderStatus;
  Total: number;
};

export type Category = {
  CategoryID: string;
  Name: string;
  Description: string;
};

export type CustomerTypes = {
  ID: number;
  Name: string;
  Image: string;
  Email: string;
  Mobile: string;
  Sales: number;
  Earning: number;
  Verified: boolean;
  JoinedDate: string;
};
