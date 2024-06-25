import React, { useState } from "react";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const initialLoginValue = {
  email: "",
  password: "",
};

const Login = ({ onLogin }: LoginProps) => {
  const [login, setLogin] = useState(initialLoginValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(login);
    onLogin(login.email, login.password);
  };

  return (
    <div className="h-fit w-screen flex justify-center items-center py-36">
      <div className="sm:shadow-xl p-8 bg-white rounded-xl w-96">
        <h1 className="font-semibold text-2xl mb-5">Login</h1>

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
              onChange={handleChange}
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
              onChange={handleChange}
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
            onClick={handleSubmit}
            className="mt-5 w-full text-white bg-blue-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border hover:bg-white hover:text-gray-800 hover:border-gray-800"
          >
            Login
          </button>

          <p className="text-sm text-center font-light text-gray-600 mt-5 w-full">
            Don't have an account yet?{" "}
            <a
              href="/register"
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
