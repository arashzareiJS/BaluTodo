import React, { useState } from "react";
import { useRouter } from "next/router";

import { signIn, getSession } from "next-auth/react";

import Form from "@/templates/Form";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { email, password } = user;

  const router = useRouter()

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signInHandler = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!res.ok) setError(res.error);
    if (res.ok) {
      setError("")
      router.replace("/")
    }
  };

  return (
    <Form
      user={user}
      changeHandler={changeHandler}
      functionHandler={signInHandler}
      title="Sign In"
      path="/signup"
      textLink="You are not account?"
      error={error}
    />
  );
};

export default SignIn;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/", permanet: false },
    };
  }

  return {
    props: { session },
  };
}
