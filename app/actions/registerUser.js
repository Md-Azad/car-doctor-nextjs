"use server";

import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";

export async function registerUser(payload) {
  const { email, password } = payload;
  if (!email || !password) {
    return { success: "false", message: "Email or password is empty" };
  }

  const userCollection = dbConnect("userCollection");
  const isExist = await userCollection.findOne({ email: email });
  if (isExist) {
    return { success: "false", message: "user allready exist" };
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  payload.password = hashedPassword;

  const result = await userCollection.insertOne(payload);
  const { acknowledged, insertedId } = result;
  return { acknowledged, insertedId: insertedId.toString() };
}
