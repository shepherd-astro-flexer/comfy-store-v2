import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action = (store) => async ({request}) => {
  try {
    const formData = Object.fromEntries(await request.formData())
    const {data} = await customFetch.post("/auth/local", formData)
    console.log(data);
    store.dispatch(loginUser(data))
    toast.success("Logged in successfully")
    return redirect("/")
  } catch (error) {
    toast.warn(error.response.data.error.message)
    return error
  }
}

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginGuestUser = async () => {
    try {
      const {data} = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret"
      })
      dispatch(loginUser(data))
      toast.success("Welcome test user")
      navigate("/")
    } catch (error) {
      console.log(error);
      toast.error("Guest user problem. Please try again later")
    }
  }

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
        />
        <FormInput
          type="password"
          label="password"
          name="password"
        />
        <div className="mt4">
          <SubmitBtn text="login" />
        </div>
        <button onClick={loginGuestUser} type="button" className="btn btn-secondary btn-block">
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
