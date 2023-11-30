"use client";
// import { Navbar } from "../../navbar/navbar";
import "./login.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  auth,
  facebookProvider,
  googleProvider,
  twitterProvider,
} from "@/firebase-config";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Context } from "@/context";

export const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { setUser, user } = useContext(Context);

  const [userDetails, setUserDetails] = useState();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [openModal, setOPenModal] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/user/signin",
        form,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (response) {
        setLoading(false);
        console.log("====================================");
        console.log(response.data.data, "response");
        alert(response.data.data.user.email);
        setUserDetails(response.data.data.user);
        router.push("/role");
        console.log("====================================");
      }
    } catch (error) {
      setLoading(false);
      console.log("====================================");
      console.log(error, "error");
      console.log("====================================");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);

      if (response) {
        console.log(response);

        setUser(response.user.providerData);

        localStorage.setItem(
          "user",
          JSON.stringify(response.user.providerData)
        );

        setOPenModal(true);

        // window.location.href = "/dashboard";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      {/* <Navbar /> */}

      <div
        class={`${
          openModal === true ? "absolute" : "hidden "
        } bottom-0 left-0 right-0 bg-white h-full w-full`}
      >
        sdfgsfg
      </div>

      <div
        className="bg-white p-4 rounded-lg shadow-2xl"
        style={{ marginLeft: "10px" }}
      >
        <div className="heading">
          <h2 className="text-2xl font-bold">Welcome!</h2>
          <p className="font-semibold">Log in to your account</p>
        </div>

        <div className="input-group">
          <input
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            type="email"
            required={true}
            id="email"
            className="input-field"
            placeholder="Enter your email"
            style={{ borderRadius: "0px" }}
          />
        </div>

        <div className="input-group">
          <input
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            type="password"
            id="password"
            className="input-field"
            placeholder="Password"
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <div className="col">
              <a href="#" target="_blank">
                Forgot password?
              </a>
              <p>
                Don't have an account?
                <Link href="/signup" target="_blank">
                  Sign in
                </Link>
              </p>
            </div>
            <div className="col flex flex-col items-center">
              <p className="text-center mb-2">Or sign in with</p>
              <div className="flex justify-content-center space-x-6">
                <FaFacebook
                  role="button"
                  onClick={() => {
                    alert("clicked");
                  }}
                  className="text-2xl text-primary hover:scale-110"
                />
                <FaTwitter
                  role="button"
                  className="text-2xl text-primary opacity-50 hover:scale-110"
                />
                <FcGoogle
                  role="button"
                  onClick={handleSignUpWithGoogle}
                  className="text-2xl hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <button
            className="bg-purple-950 hover:bg-purple-500"
            style={{ width: "630px" }}
            onClick={handleLogin}
          >
            {loading ? "loading..." : "Login"}{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
