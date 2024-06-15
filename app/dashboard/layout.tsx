// /app/dashboard/layout.js
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>Dashboard Navigation</nav>
      <section>{children}</section>
    </div>
  );
}
