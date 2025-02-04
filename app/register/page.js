import Image from "next/image";
import React from "react";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <div className="my-12 w-11/12 md:w-10/12 flex  mx-auto">
      <figure className="md:w-1/2">
        <Image
          src={"/assets/images/login/login.svg"}
          width={400}
          height={300}
          className="hidden md:inline-block"
          alt="Login image"
        />
      </figure>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default Register;
