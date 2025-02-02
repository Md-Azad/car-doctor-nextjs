import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import React from "react";

const ServiceDetailsPage = async ({ params }) => {
  const p = await params;

  const servicesColection = dbConnect("services");
  const data = await servicesColection.findOne({ _id: new ObjectId(p.id) });

  return (
    <div>
      <h1>service details page. </h1>
    </div>
  );
};

export default ServiceDetailsPage;
