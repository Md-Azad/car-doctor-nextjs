import Image from "next/image";

const Banner = () => {
  return (
    <div className="main-layout flex justify-center  ">
      <figure className=" w-11/12  relative overlay-bg">
        <Image
          src={"/assets/images/checkout/checkout.png"}
          width={1000}
          height={300}
          alt="banner img"
          className="w-full "
        />
        <div className="overlay-bg w-full h-full  absolute top-0">
          <div className="w-full h-full flex  items-center">
            <div className="ps-16">
              <h1 className="text-white font-bold text-2xl">Service Details</h1>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default Banner;
