import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FaWhatsappSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { LogIn, errorMessage, GoogleTokenProviderLogIn, setErrorMessage } =
    UserAuth();
  const [submited, setSubmited] = useState(false);

  const signInWithGoogle = (e) => {
    e.preventDefault();
    setSubmited(true);
    GoogleTokenProviderLogIn(() => {});
  };

  async function handle(e) {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) setSubmited(true);

    await LogIn(
      email,
      password,
      document.getElementById("remmberMe").checked,
      () => {
        setSubmited(false);
      }
    );
  }

  useEffect(() => {
    setErrorMessage("");
  }, []);
  return (
    <div className="flex items-center justify-between h-screen w-[100%] ">
      {submited && (
        <div className="absolute top-0 left-0 w-full h-full z-50 bg-slate-500/70  flex items-center justify-center flex-col">
          <h1 className="font-extrabold text-[50px] text-white ">
            أهلا بك في منصة بيان التعليمية
          </h1>

          <div className="flex px-3 py-2   texgt-white justify-center items-center gap-2 mt-5 bg-white rounded-lg ">
            <div role="status">
              <svg
                aria-hidden="true"
                className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
            <h1 className="  "> الرجاء الانتظار </h1>
          </div>
        </div>
      )}

      <div className="px-6 hidden lg:w-[40%] h-full bg-[#26ABBB]  lg:flex  flex-col justify-center items-center relative">
        <img
          src="/assets/Group 600.png"
          alt="bgimg"
          className="absolute w-full bottom-0 right-0  object-cover"
        />
        <p className="text-right text-white text-5xl w-fit mx-auto ">
          {" "}
          إنطلق مع بيان نحو القمة{" "}
        </p>
        <p className="text-right text-white text-4xl w-fit mx-auto">
          تسجيل دخول{" "}
        </p>
        <img
          src="/assets/logo.png"
          alt="logo"
          className="w-[245.69px] bg-white rounded-lg px-6 py-4"
        />
      </div>
      <div className=" w-full lg:w-[60%] h-full  flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-[100%]">
          <img src="/assets/logo.png" alt="logo" className="w-[65.69px]" />
        </div>
        <div className="w-full md:w-[552px] mx-auto mt-[28px] shadow-xl rounded-md">
          <h2 className="w-fit mx-auto text-[#26ABBB] ">تسجيل دخول </h2>
          <form className="py-[14px] px-[72px]" onSubmit={handle}>
            <p className="text-[#363535] text-right p-0 my-[10px] ">
              اسم المستخدم أو البريد الالكتروني
            </p>
            <label
              htmlFor="name"
              className="relative text-gray-400 focus-within:text-gray-600 block"
            >
              <BsPerson className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="name"
                className="w-full rounded-lg py-2 border-[#E9E9E9] border-2  focus:outline-none text-right pr-14  "
              />
            </label>
            <p className="text-[#363535] text-right p-0 my-[10px]">
              كلمة المرور{" "}
            </p>
            <label
              htmlFor="password"
              className="relative text-gray-400 focus-within:text-gray-600 block"
            >
              <AiOutlineLock className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="w-full rounded-lg py-2 border-[#E9E9E9] border-2  focus:outline-none text-right pr-14  "
              />
            </label>
            <div className="flex justify-between items-center py-3">
              <Link
                to="/passwordRemmber"
                className="text-[#363535] no-underline"
              >
                نسيت كلمة المرور ؟
              </Link>
              <label htmlFor="remmberMe">
                تذكرني
                <input
                  type="checkbox"
                  id="remmberMe"
                  name="remmberMe"
                  value="true"
                  className="ml-2"
                />
              </label>
            </div>
            <div
              className={`m-2 text-sm text-[red] w-full text-center font-extrabold block`}
            >
              {errorMessage}{" "}
            </div>
            <button className="bg-[#26ABBB] w-full rounded-md p-2 text-white mt-[16px]">
              دخول
            </button>
            <button
              className="bg-[#EBEBEB] w-full rounded-md p-1 flex justify-center no-underline items-center gap-[7px] mt-[10px] text-black"
              onClick={signInWithGoogle}
            >
              <FcGoogle /> Google{" "}
            </button>
            <div className="flex justify-center items-center gap-[10px] pt-[34px]">
              <Link to="/signup" className="text-[#26ABBB]  no-underline">
                {" "}
                ليس لديك حساب ؟{" "}
              </Link>
              <p className="p-0 m-0"> إنشاء حساب </p>
            </div>
          </form>
        </div>
      </div>

      <a
        href="https://wa.me/+970567682999"
        target="_blank"
        className="fixed bottom-0 right-0  md:right-10 hover:text-[#25d366] text-[#25d366] "
      >
        <FaWhatsappSquare size={80} />
      </a>
    </div>
  );
};

export default Signin;
