import { Jumbotron } from "@/src/components/Jumbotron";
import { Sponsors } from "@/src/components/Sponsors";
import { Formik, Field, Form, useFormik } from "formik";
import { login } from "@/services/user.services";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authActions, RootState } from "@/src/stores";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="pb-[50px]">
      <Jumbotron title="My Account" subTitle="My Account" />
      <div className="flex justify-center items-center py-[75px]">
        <div className="shadow-lg-custom p-10 flex flex-col w-[35vw]">
          <p className="font-bold text-[24px] text-center">Login</p>
          <p className="text-seventhGray text-center mb-[20px]">
            Please login using account detail below.
          </p>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values: any) => {
              try {
                const result: any = await login({
                  email: values.email,
                  password: values.password,
                });
                Cookies.set("token", result?.data.token);
                dispatch(authActions.setToken(result?.data.token));
                router.push("/");
                Toast.fire({
                  icon: "success",
                  title: "Signed in successfully!",
                });
              } catch (e: any) {
                console.log(e.response.data.msg, "<<< WALAO");
                Toast.fire({
                  icon: "error",
                  title: e.response.data.msg,
                });
              }
            }}
          >
            <Form className="flex flex-col">
              <Field
                placeholder="Email Address"
                className="border border-eigthGray w-full rounded-[2px] p-3 focus:outline-pink mb-[20px]"
                name="email"
              />
              <Field
                placeholder="Password"
                className="border border-eigthGray w-full rounded-[2px] p-3 focus:outline-pink mb-[10px]"
                name="password"
              />
              <a className="text-base text-eigthGray cursor-pointer mb-[20px]">
                Forgot your password?
              </a>
              <button
                type="submit"
                className="rounded-[2px] px-5 py-2 bg-pink text-white mb-[20px]"
              >
                Sign In
              </button>
              <a className="text-base text-eigthGray cursor-pointer text-center">
                Don&apos;t have an account? Create account
              </a>
            </Form>
          </Formik>
        </div>
      </div>
      <Sponsors />
      <ToastContainer />
    </div>
  );
}
