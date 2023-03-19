import { Jumbotron } from "@/components/Jumbotron";
import { Sponsors } from "@/components/Sponsors";

export default function Login() {
  return (
    <div className="pb-[50px]">
      <Jumbotron title="My Account" subTitle="My Account" />
      <div className="flex justify-center items-center py-[75px]">
        <div className="shadow-lg-custom p-10 flex flex-col w-[35vw]">
          <p className="font-bold text-[24px] text-center">Login</p>
          <p className="text-seventhGray text-center mb-[20px]">
            Please login using account detail below.
          </p>
          <input
            placeholder="Email Address"
            className="border border-eigthGray w-full rounded-[2px] p-3 focus:outline-pink mb-[20px]"
          />
          <input
            placeholder="Password"
            className="border border-eigthGray w-full rounded-[2px] p-3 focus:outline-pink mb-[10px]"
          />
          <a className="text-base text-eigthGray cursor-pointer mb-[20px]">
            Forgot your password?
          </a>
          <button className="rounded-[2px] px-5 py-2 bg-pink text-white mb-[20px]">
            Sign In
          </button>
          <a className="text-base text-eigthGray cursor-pointer text-center">
            Don't have an account? Create account
          </a>
        </div>
      </div>
      <Sponsors />
    </div>
  );
}
