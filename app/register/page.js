import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };
  return (
    <div className="my-12 w-11/12 md:w-10/12 flex  mx-auto">
      <figure className="md:w-1/2">
        <Image
          src={"/assets/images/login/login.svg"}
          width={400}
          height={300}
          className="hidden md:inline-block"
        />
      </figure>
      <form
        onSubmit={handleSubmit}
        className="card-body w-full md:w-1/2 border-2 rounded-lg"
      >
        <h1 className="text-center text-2xl font-bold text-purple-700">
          Register
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
