// /app/dashboard/sidebar/layout.js
import React from "react";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
