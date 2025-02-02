import Banner from "@/components/Banner";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import React from "react";

const ServiceDetailsPage = async ({ params }) => {
  const p = await params;

  const servicesColection = dbConnect("services");
  const data = await servicesColection.findOne({ _id: new ObjectId(p.id) });

  return (
    <div>
      <Banner />
    </div>
  );
};

export default ServiceDetailsPage;
