// /app/dashboard/content/layout.js
import React from "react";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
