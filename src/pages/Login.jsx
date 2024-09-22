import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="hero">
        <div className="hero-content md:my-14 flex-col lg:flex-row-reverse">
          <div className="text-center hidden md:block lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Start your journey with Bright Future IT by logging in today and
              unlocking access to our expert-led Flutter courses. Whether you’re
              ready to dive into a new lesson, continue your learning path, or
              take on a challenging project, it all begins here. Let’s build the
              future together!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <h2 className="text-center text-[28px] md:text-[32px] font-semibold">
                Please{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#884AFF] to-[#C54AFF]">
                  Login
                </span>
              </h2>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-sm md:input-md input-bordered focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-sm md:input-md input-bordered focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm md:btn-md  text-white bg-gradient-to-r from-[#884AFF] to-[#C54AFF] hover:from-teal-400 hover:to-blue-500"
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center items-center space-x-2 mt-4">
                <span>Don't have an account?</span>
                <a
                  href="/signup"
                  className="text-[#884AFF] hover:text-[#C54AFF] font-semibold underline"
                >
                  Register here
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
