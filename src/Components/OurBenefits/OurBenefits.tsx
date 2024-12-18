"use client";
import Image from "next/image";

const OurBenefits: React.FC = () => {
  return (
    <div className="my-4 md:my-[90px]">
      <div className="flex md:flex-row flex-col gap-10 md:gap-[130px] justify-center ">
        <div>
          <Image src="/house.jpg" alt="image" width={520} height={600} />
        </div>
        <div>
          <h2 className="text-[15px] md:text-[20px] text-gray-800">
            Our benefits
          </h2>
          <h2 className="text-[30px] md:text-[58px] md:leading-[70px] md:my-4 md:w-[700px]">
            Modern agriculture technology that makes farming smarter
          </h2>
          <p className="text-[15px] md:text-[17px] text-gray-500 md:w-[480px]">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia.
          </p>
          <div className="mt-[50px]">
            <Image src="/house2.jpg" alt="image" width={630} height={480} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
