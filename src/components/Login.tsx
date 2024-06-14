import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="h-fit w-screen flex justify-center items-center py-36">
      <div className="sm:shadow-xl p-8 bg-white rounded-xl w-96">
        <h1 className="font-semibold text-2xl mb-5">Sign In</h1>

        <form action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full"
              placeholder="name@email.com"
              required={true}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Your password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full"
              placeholder="••••••••"
              required={true}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
                />
              </div>
              <div className="ml-1 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>

            <a
              href="#"
              className=" flex text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            href="/home"
            className="mt-5 w-full text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border hover:bg-white hover:text-gray-800 hover:border-gray-800"
          >
            Sign in
          </button>

          <p className="text-sm text-center font-light text-gray-600 mt-5 w-full">
            Don't have an account yet?{" "}
            <a
              href="#"
              className="font-medium text-gray-800 hover:underline dark:text-primary-500"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
