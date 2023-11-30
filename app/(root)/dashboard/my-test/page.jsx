"use client";
import AppCard from "@/components/AppCard";
import { useParams } from "next/navigation";
import React from "react";

const Test = () => {
  const { device } = useParams();

  return (
    <div className="test-index h-1200 w-50em align-center ml-50 ">
      <div className="mb-3 flex justify-start">
        <h1 className="font-bold text-xl">Tested Apps</h1>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 flex-col">
        <AppCard
          device="android"
          image="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          title="Amateur Facebook"
          description="Mistake of a social media app, please help me test"
          buttonText="See your reviews"
        />
        <AppCard
          image="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          title="Amateur Facebook"
          description="Mistake of a social media app, please help me test"
          buttonText="See your reviews"
        />
      </div>
    </div>
  );
};

<div className="app-link">
  {/* <button
          href="https://appetize.io/upload"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            borderRadius: "20px",
            width: "300px",
            marginTop: "650px",
            marginRight: "100px",
            textDecoration: "none",
          }}
        >
          Click here to upload app{" "}
        </button> */}
</div>;

export default Test;
