import BannerImage from "../../assets/website/hero.png";
import Banner from "../../assets/website/board.png";

const bannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-gray-800 text-white p-2 w-full"
        style={bannerImg}
      >
        <div className="container flex items-center justify-center">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="space-y-6 max-w-xl"
          >
            <div className="flex justify-between items-center gap-10">
              <h1 className="text-2xl">
                There is no friend as loyal as a book
              </h1>
              <img src={BannerImage} alt="" className="w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
