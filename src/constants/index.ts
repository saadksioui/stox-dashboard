import { cardsType, Customer, NotificationDataType, ordersType } from '../types';
import { ChartLine, DollarSign, Layers, LayoutDashboard, PackageOpen, ShoppingCart, User } from 'lucide-react';
import React from 'react';
import { SidebarLinksType } from '../types';



export const sidebarLinks: SidebarLinksType = [
  {
    id: 1,
    icon: React.createElement(LayoutDashboard),
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    icon: React.createElement(PackageOpen),
    name: "Products",
    href: "/products",
  },
  {
    id: 3,
    icon: React.createElement(ShoppingCart),
    name: "Orders",
    href: "/orders",
  },
  {
    id: 4,
    icon: React.createElement(Layers),
    name: "Categories",
    href: "/categories",
  },
  {
    id: 5,
    icon: React.createElement(User),
    name: "Customers",
    href: "/customers",
  },
];


export const notificationsData: NotificationDataType[] = [
  {
    icon: "important",
    content: "Your password will expire in 3 days.",
    timestamp: "2024-02-10T14:30:00",
    read: false,
  },
  {
    icon: "info",
    content: "A new update is available",
    timestamp: "2024-02-09T09:15:00",
    read: true,
  },
  {
    icon: "error",
    content: "Failed to sync data with the server.",
    timestamp: "2024-02-08T22:45:00",
    read: false,
  },
  {
    icon: "important",
    content: "Your session will expire soon.",
    timestamp: "2024-02-08T15:20:00",
    read: true,
  },
  {
    icon: "info",
    content: "Maintenance is scheduled for tomorrow at 2:00 AM.",
    timestamp: "2024-02-07T12:00:00",
    read: false,
  },
  {
    icon: "error",
    content: "Unauthorized login attempt detected.",
    timestamp: "2024-02-06T04:10:00",
    read: true,
  },
];


export const cardsData: cardsType[] = [
  {
    icon: React.createElement(ChartLine),
    title: "Total Revenue",
    value: "$45,000",
    percentage: "+12.5%"
  },
  {
    icon: React.createElement(User),
    title: "New Customers",
    value: "1,200",
    percentage: "+8.3%"
  },
  {
    icon: React.createElement(ShoppingCart),
    title: "Orders",
    value: "3,457",
    percentage: "+15.2%"
  },
  {
    icon: React.createElement(DollarSign),
    title: "Net Profit",
    value: "$12,850",
    percentage: "-2.4%"
  }
];


export const ordersData: ordersType[] = [
  {
    "Image": "https://m.media-amazon.com/images/I/5181UFuvoBL._AC_SL1500_.jpg",
    "Product": "Wireless Mouse",
    "Price": 19.99,
    "Date": "2024-06-01T10:30:00Z",
    "Status": "Shipped",
    "createdAt": "2024-01-01T10:00:00Z"
  },
  {
    "Image": "https://m.media-amazon.com/images/I/61++ok6AqtL._AC_SL1500_.jpg",
    "Product": "Bluetooth Keyboard",
    "Price": 49.99,
    "Date": "2024-06-02T14:15:00Z",
    "Status": "Pending",
    "createdAt": "2024-01-03T11:30:00Z"
  },
  {
    "Image": "https://m.media-amazon.com/images/I/61b+rxAhtTL._AC_SL1500_.jpg",
    "Product": "USB-C Hub",
    "Price": 29.99,
    "Date": "2024-06-03T09:45:00Z",
    "Status": "Shipped",
    "createdAt": "2024-01-05T15:00:00Z"
  },
  {
    "Image": "https://m.media-amazon.com/images/I/611LbnyTYNL._AC_SL1412_.jpg",
    "Product": "External Hard Drive 1TB",
    "Price": 34.99,
    "Date": "2024-06-04T16:20:00Z",
    "Status": "Cancelled",
    "createdAt": "2024-01-07T08:45:00Z"
  },
  {
    "Image": "https://m.media-amazon.com/images/I/61O7S27O+jL._AC_SL1468_.jpg",
    "Product": "Noise Cancelling Headphones",
    "Price": 150.00,
    "Date": "2024-01-09",
    "Status": "Shipped",
    "createdAt": "2024-01-09T10:00:00Z"
  },
  {
    "Image": "https://m.media-amazon.com/images/I/61srjyM7TFL._AC_SL1500_.jpg",
    "Product": "Smartphone Stand",
    "Price": 12.99,
    "Date": "2024-01-10",
    "Status": "Cancelled",
    "createdAt": "2024-01-10T13:45:00Z"
  },
  {
    "Image": "https://m.media-amazon.com/images/I/81WjalMN8mL._AC_SL1500_.jpg",
    "Product": "Laptop Backpack",
    "Price": 39.99,
    "Date": "2024-01-11",
    "Status": "Cancelled",
    "createdAt": "2024-01-11T09:00:00Z"
  },
  {
    "Image": "https://m.media-amazon.com/images/I/71A0Pp767BL._AC_SL1500_.jpg",
    "Product": "Webcam HD 1080p",
    "Price": 59.50,
    "Date": "2024-01-12",
    "Status": "Shipped",
    "createdAt": "2024-01-12T11:00:00Z"
  }
]


export const topCustomers: Customer[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "Male",
    sales: "$12,500",
    joinedDate: "2023-02-15",
  },
  {
    id: 5,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    gender: "Female",
    sales: "$10,850",
    joinedDate: "2022-11-10",
  },
  {
    id: 8,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    gender: "Male",
    sales: "$9,420",
    joinedDate: "2023-01-28",
  },
  {
    id: 12,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    gender: "Female",
    sales: "$8,350",
    joinedDate: "2022-09-05",
  }
]