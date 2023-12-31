import React from "react";

const AppCard = ({ image, title, description, device, buttonText, id }) => {
  return (
    <div className="col-span-1 h-fit block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center">
      <a href="#!" className="h-[50%]">
        <img className="rounded-t-lg h-full" src={image} alt="" />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>

        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
          {description}
        </p>
        <p className="mb-2 text-base text-neutral-500 capitalize dark:text-neutral-300">
          <span className="font-semibold">Device: </span>
          {device}
        </p>
        <a
          href={
            device === "android"
              ? `/dashboard/my-test/android/${id}`
              : `/dashboard/my-test/tablet/${id}`
          }
          className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          {buttonText ? buttonText : "View and Test"}
        </a>
      </div>
    </div>
  );
};

export default AppCard;
