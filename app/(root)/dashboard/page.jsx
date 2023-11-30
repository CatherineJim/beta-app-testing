"use client";
import AppCard from "@/components/AppCard";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-3 flex justify-start">
        <h1 className="font-bold text-xl">Latest Apps</h1>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 flex-col">
        <AppCard
          device="android"
          image="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          title="Amateur Facebook"
          description="Mistake of a social media app, please help me test"
        />
        <AppCard
          image="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          title="Amateur Facebook"
          description="Mistake of a social media app, please help me test"
          device="tablet"
        />
        <AppCard
          image="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          title="Amateur Facebook"
          description="Mistake of a social media app, please help me test"
          device="tablet"
        />
      </div>
    </div>
  );
};

export default Dashboard;
