"use client";
import AppCard from "@/components/AppCard";
import { Context } from "@/context";
import { getAllApps } from "@/services/app";
import React, { useContext, useEffect, useState } from "react";

const Dashboard = () => {
  const [apps, setApps] = useState(null);

  const { user } = useContext(Context);

  useEffect(() => {
    (async () => {
      const { data, error } = await getAllApps();

      if (data) {
        console.log("====================================");
        console.log(data.data.apps);
        console.log("====================================");

        setApps(data.data.apps);
      }

      if (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
      }
    })();
  }, []);

  return (
    <div>
      <div className="mb-3 flex justify-start">
        <h1 className="font-bold text-xl">
          {user?.role
            ? user?.role === "developer"
              ? "My Apps"
              : "Latest Apps"
            : "Beta Apps"}
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 flex-col">
        {apps ? (
          apps.map((app, index) => (
            <AppCard
              key={index}
              device="android"
              image={app.imageUrl}
              title={app.title}
              description={app.description}
              id={app._id}
            />
          ))
        ) : (
          <p>No Apps found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
