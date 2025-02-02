import dbConnect from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Services = async () => {
  const serviceCollection = dbConnect("services");
  const data = await serviceCollection.find({}).toArray();

  return (
    <div className=" grid grid-cols-12 gap-4">
      {data.map((item) => {
        return (
          <div
            key={item._id}
            className="col-soan-12 md:col-span-6 lg:col-span-4 h-full border"
          >
            <figure className="w-full h-3/4 flex justify-center items-center ">
              <Image
                className="w-full h-full object-fit rounded-lg"
                src={item.img}
                width={314}
                height={108}
                alt={item.title}
              />
            </figure>
            <div className=" p-4 flex flex-row items-center justify-between ">
              <div className="">
                <h2 className="card-title">{item.title}</h2>
                <h2 className="card-title text-red-700 font-semibold">
                  Price: {item?.price}
                </h2>
              </div>
              <Link href={`/services/${item._id}`}>
                <FaArrowRight className="text-orange-600 text-2xl" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
