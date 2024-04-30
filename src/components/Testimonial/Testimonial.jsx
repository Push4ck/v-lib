import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Parul Yadav",
    text: "Amazing bookstore! Every visit is an adventure, with new stories to discover. The staff's recommendations are spot-on.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Shivam Singh",
    text: "A book lover's haven! The variety of genres and cozy ambiance make it my favorite spot to unwind. Can't recommend it enough!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Rehman Ali",
    text: "This bookstore is a hidden gem! The staff is friendly, and the selection is top-notch. I always find something intriguing to read!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Ishita Sharma",
    text: "What a gem of a bookstore! The cozy atmosphere and carefully curated selection make it a book lover's dream. I never leave empty-handed!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 5,
    name: "Keyur Kumar",
    text: "This bookstore is a reader's paradise! The collection is diverse, and the staff is passionate about books. I've found my new literary sanctuary.",
    img: "https://picsum.photos/102/102",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <h1 className="text-5xl font-bold">Testimonial</h1>
            <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[900px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data, item) => {
                return (
                  <div className="my-6" key={item.id}>
                    <div
                      key={data.id}
                      className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-light">
                            {data.name}
                          </h1>
                        </div>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
