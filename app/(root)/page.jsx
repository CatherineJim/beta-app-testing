"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import styled from "styled-components";

export const StartButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: white;
`;
const Home = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <>
      <Navbar />
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "50%",
          backgroundImage:
            "url('https://th.bing.com/th/id/R.da835f78875f68bd782ed3b1bf4f0524?rik=pamecHCGZnyHRA&riu=http%3a%2f%2fwww.validata-software.com%2fimages%2fValidata_Quality_Suite%2fMobile_Testing%2fMobile_Testing.jpg&ehk=MVxZizIyiVbromebwwBAtUV6MejmX22prPw8zsy3SP4%3d&risl=&pid=ImgRaw&r=0');",
          height: "500px;",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-2 mb-6 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Explore, Play, <span style={{ color: "green" }}>Review</span>{" "}
              </h1>
              <p className="mb-16">
                Forget the old app testing routines, embrace the wild
                andthrilling world of app reviews and discussions.
                <br />
                Useful reviews help developers create apps that will leave users
                enthralled.
              </p>

              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-12 mx-auto md:px-6">
        <section className="mb-32">
          <div className="flex justify-center">
            <div className="max-w-[700px] text-center">
              <p className="mb-6 font-bold uppercase text-primary dark:text-primary-400">
                Features
              </p>
              <h2 className="mb-6 text-3xl font-bold">Why is it so great?</h2>
              <p className="mb-16 text-neutral-500 dark:text-neutral-300">
                Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                neque iaculis malesuada. Aenean gravida magna orci, non
                efficitur est porta id. Donec magna diam.
              </p>
            </div>
          </div>

          <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            <div className="mb-12">
              <div className="flex">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-2 grow">
                  <p className="mb-1 font-bold">Support 24/7</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Pellentesque mollis, metus nec fringilla aliquam
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-2 grow">
                  <p className="mb-1 font-bold">Tracking</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Magna lacus iaculis elit, quis pharetra varius.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-2 grow">
                  <p className="mb-1 font-bold">Reporting</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Pellentesque varius ex vel consequat quis.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-2 grow">
                  <p className="mb-1 font-bold">Analytics</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Vestibulum gravida iaculis nisl, vel lobortis eros.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-2 grow">
                  <p className="mb-1 font-bold">Huge community</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Praesent vulputate lacus bibendum augue .
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-2 grow">
                  <p className="mb-1 font-bold">Easy to use</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Sed mauris ex, imperdiet sit amet nisl ac, ultrices.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-2 grow">
                  <p className="mb-1 font-bold">Frequent updates</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Aenean lectus ex, placerat id tellus in eros.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-2 grow">
                  <p className="mb-1 font-bold">Responsive</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Donec consequat orci quis volutpat imperdiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
