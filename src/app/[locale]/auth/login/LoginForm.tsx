"use client";

import { signIn, useSession } from "next-auth/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useRouter } from "next-intl/client";

export default function LoginForm() {
  const session = useSession();
  const router = useRouter();
  const [error, setError] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember_me: 0,
    },
    onSubmit: async (values) => {
      setError(false);
      const result = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
        callbackUrl: "/",
      });

      if (result?.error === "CredentialsSignin") {
        setError(true);
      }
    },
  });

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/");
    }
  }, [router, session.status]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <section className="grid gap-3 min-w-[300px]">
        <div className="text-center text-xl font-bold mb-3">MOVIE CATCHER</div>
        <div className="grid w-full gap-1">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            placeholder="Username"
            className="p-3 w-full text-black"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>
        <div className="grid w-full gap-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            placeholder="Password"
            className="p-3 w-full text-black"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        {error && (
          <div className="text-red-500">username or password is invalid.</div>
        )}
        <div>
          <input
            id="remember_me"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.remember_me}
          />
          <label htmlFor="remember_me" className="ml-1">
            Remember me
          </label>
        </div>
        <div className="border border-white"></div>
        <button type="submit" className="text-white bg-blue-500 p-3">
          Login
        </button>
      </section>
    </form>
  );
}
