"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Test = () => {
  const { device } = useParams();

  useEffect(() => {
    const init = async () => {
      const { Input, initTE } = await import("tw-elements");
      initTE({ Input });
    };
    init();
  }, []);

  return (
    <div className="grid lg:grid-cols-8 w-full">
      <div className={`${device === "android" ? "col-span-3" : "col-span-4"}`}>
        {device === "android" ? (
          <iframe
            className="align-center ml-[73px] mt-5"
            title="x"
            src="https://appetize.io/embed/etnss4jgzym5ohpdo2c5q5jmye?device=pixel4&osVersion=11.0&scale=75"
            width="500px"
            height="700px"
            frameBorder="0"
            scrolling="no"
          />
        ) : (
          <iframe
            className="align-center ml-8 mt-5"
            title="x"
            src="https://appetize.io/embed/cqw4cxwkpozbtfz37q7hgudoi4?device=galaxytabs7&osVersion=13.0"
            width="600px"
            height="900px"
            frameBorder="0"
            scrolling="no"
          />
        )}
        <p className="my-2">Emulator not working?</p>
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="inline-block rounded !bg-pink-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Open link
        </button>
      </div>
      <div className={`${device === "android" ? "col-span-5" : "col-span-4"}`}>
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/198.jpg"
              className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
              alt="image"
            />

            <div className="mb-6 flex items-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (23).jpg"
                className="mr-2 h-8 rounded-full"
                alt="avatar"
                loading="lazy"
              />
              <div>
                <span>
                  {" "}
                  Developed <u>15.07.2020</u> by{" "}
                </span>
                <a href="#!" className="font-medium">
                  JoeyDevs
                </a>
              </div>
            </div>

            <h1 className="mb-6 text-3xl text-left font-bold">
              An intriguing title for an interesting article
            </h1>

            <p className="text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              harum tempore cupiditate asperiores provident, itaque, quo ex
              iusto rerum voluptatum delectus corporis quisquam maxime a ipsam
              nisi sapiente qui optio! Dignissimos harum quod culpa officiis
              suscipit soluta labore! Expedita quas, nesciunt similique autem,
              incidunt quam.
            </p>

            <div className="text-left my-3">
              <p className="font-bold text-lg">Playable Devices</p>
              <p className="font-light text-lg capitalize">{device}</p>
            </div>
            <div className="my-4">
              <div className="relative mb-3" data-te-input-wrapper-init>
                <textarea
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
                <label
                  for="exampleFormControlTextarea1"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Leave a review
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded !bg-pink-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Send
                </button>
              </div>
            </div>
          </section>
        </div>
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
