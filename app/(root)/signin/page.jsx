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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Input,
  Tabs,
  Tab,
  Button,
} from "@nextui-org/react";
import { createUser } from "@/services/auth";

export const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [selected, setSelected] = useState("developer");

  const { setUser, user } = useContext(Context);

  const [profile, setProfile] = useState({
    domain: "",
    companyName: "",
    password: "",
    confirmPassword: "",
    role: selected,
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        setUser(response.data.data.user);
        window.location.href = "/dashboard";
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

        setUser(response.user.providerData[0]);

        localStorage.setItem(
          "user",
          JSON.stringify(response.user.providerData[0])
        );

        onOpen();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (!user) return;
    console.log(user, "user");

    const profileData = {
      ...profile,
      uid: user?.uid,
      email: user?.email,
      fullName: user?.displayName,
    };
    console.log("====================================");
    const { data, error } = await createUser(profileData);

    if (data) {
      console.log("====================================");
      console.log(data);
      console.log("====================================");

      if (data.status === 200) {
        localStorage.setItem("role", data.data);
      }
    }
    if (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  useEffect(() => {
    if (!userDetails) return;
    console.log("====================================");
    console.log(userDetails);
    console.log("====================================");
    setProfile({
      ...profile,
      fullName: userDetails?.displayName,
      email: userDetails?.email,
      uid: userDetails?.uid,
    });
  }, [userDetails]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-center">
                Set up a Beta profile
              </ModalHeader>
              <ModalBody className="text-center">
                <p className="text-lg">
                  Would you upload app for testing or test and provide reviews?
                </p>

                <div className="flex w-full flex-col">
                  <Tabs
                    fullWidth
                    size="md"
                    aria-label="Tabs form"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                  >
                    <Tab key="developer" title="Developer">
                      <form className="flex flex-col gap-4">
                        <div className="w-full flex flex-col gap-4 mt-6">
                          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input
                              name="domain"
                              type="text"
                              variant={"faded"}
                              label="Domain"
                              placeholder="Android or IOS"
                              value={profile.domain}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input
                              name="companyName"
                              type="text"
                              variant={"faded"}
                              label="Company Name"
                              placeholder="Company or Business Name"
                              value={profile.companyName}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input
                              name="password"
                              type="password"
                              variant={"faded"}
                              label="Password"
                              placeholder="Enter your password"
                              value={profile.password}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input
                              name="confirmPassword"
                              type="password"
                              variant={"faded"}
                              label="Confirm Password"
                              placeholder="Confirm your password"
                              value={profile.confirmPassword}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="flex gap-2 justify-end">
                          <Button
                            className="w-fit !bg-pink-900"
                            onClick={handleCreateUser}
                            color="primary"
                          >
                            Submit
                          </Button>
                        </div>
                      </form>
                    </Tab>
                    <Tab key="tester" title="Tester">
                      <form className="flex flex-col gap-4">
                        <div className="w-full flex flex-col gap-4 mt-6">
                          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input
                              name="password"
                              type="password"
                              variant={"faded"}
                              label="Password"
                              placeholder="Enter your password"
                              value={profile.password}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input
                              name="confirmPassword"
                              type="password"
                              variant={"faded"}
                              label="Confirm Password"
                              placeholder="Confirm your password"
                              value={profile.confirmPassword}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 justify-end">
                          <Button
                            className="w-fit !bg-pink-900"
                            onClick={handleCreateUser}
                            color="primary"
                          >
                            Submit
                          </Button>
                        </div>
                      </form>
                    </Tab>
                  </Tabs>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="relative h-screen w-full flex justify-center items-center p-3 overflow-hidden">
        <div
          className={`${
            openModal === true ? "absolute" : "hidden "
          } bottom-0 left-0 right-0 bg-white h-1/3 w-1/2`}
        >
          sdfgsfg
        </div>

        <div
          className="bg-white p-4 rounded-lg shadow-2xl w-fit"
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
                <p></p>
              </div>
              <div className="col flex flex-col items-center">
                <p className="text-center mb-2">Or sign up with</p>
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
    </>
  );
};

export default LoginForm;
