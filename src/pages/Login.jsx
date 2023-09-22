import { Form, Link, redirect, useActionData } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";

export const action = (store) => async ({request}) => {
  try {
    const formData = Object.fromEntries(await request.formData())
    const {data} = await customFetch.post("/auth/local", formData)
    store.dispatch(loginUser({username: data.user.username}))
    toast.success("Logged in successfully")
    return redirect("/")
  } catch (error) {
    toast.warn(error.response.data.error.message)
    return error
  }
}

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="astro@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
