"use client";

import { registerUser } from "@/app/actions/registerUser";

const RegisterForm = () => {
  const handleSubmit = async (e) => {
    console.log("on Submit button clicked.");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await registerUser({ name, email, password });
  };
  return (
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
        <button type="submit" className="btn bg-orange-500">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
