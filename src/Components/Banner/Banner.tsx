import BannerStyle from "./BannerStyle/BannerStyle.module.css";

const Banner: React.FC = () => {
  return (
    <div className="md:pr-0 pr-2">
      <div className="relative md:w-full md:h-[89vh] h-[400px] text-white  bg-cover bg-no-repeat bg-center bg-[url('/banner.jpg')]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
          <div className="flex justify-center items-center flex-col translate-y-[100px] md:translate-y-[270px]">
            <h2 className="text-[19px]">Start using hydroponics</h2>
            <h2 className="md:text-[80px] text-[40px] md:w-[800px] text-center leading-[45px] md:leading-[75px] md:mt-4 mt-2 px-4 md:px-0">
              Alternative Growing Systems for Diverse Crops
            </h2>
            <div className="flex items-center gap-2 md:mt-8 mt-4">
              <button
                className={`text-[18px] border-2 ${BannerStyle.bannerStyle} px-8 py-2 md:px-10 md:py-3`}
              >
                View Details
              </button>
              <button
                className={`bg-[#f2c200] text-[18px] ${BannerStyle.bannerStyleBtn} border-none px-[45px] md:px-[53px] py-[10px] md:py-[14px]`}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center md:flex-row flex-col gap-4 md:gap-8 my-4 md:my-8">
        <div className={BannerStyle.imageParent}>
          <div
            className={` ${BannerStyle.cardAnimation} relative md:w-[865px] md:h-[485px] w-[380px] h-[300px] text-white  bg-cover bg-no-repeat bg-center bg-[url('/FolkTwo.jpg')]`}
          >
            <div className="inset-0 bg-gray-800 absolute opacity-50">
              <div className="flex justify-center items-center  md:translate-y-[230px] translate-y-[140px]">
                <h2 className="text-[35px]">Automation</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={BannerStyle.imageParent}>
          <div
            className={` ${BannerStyle.cardAnimation} relative md:w-[890px] md:h-[485px] w-[380px] h-[300px] text-white  bg-cover bg-no-repeat bg-center bg-[url('/Folk.png')]`}
          >
            <div className="inset-0 bg-gray-800 absolute opacity-50">
              <div className="flex justify-center items-center  md:translate-y-[230px] translate-y-[140px]">
                <h2 className="text-[35px]">Hydroponics</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
