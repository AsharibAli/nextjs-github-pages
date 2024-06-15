"use client";
import React, { useEffect, useState } from "react";

const fetchData = async () => {
  // Simulating an API call that may fail
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Failed to fetch data"));
    }, 3000);
  });
};

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    throw error; // Trigger the error boundary
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <div>{data}</div>
    </div>
  );
}
