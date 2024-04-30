import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";
import footerLogo from "/favicon.svg";

const Link1 = [
  {
    title: "Blog",
    link: "/#blog",
  },
  {
    title: "Best Sellers",
    link: "/#services",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const Link2 = [
  {
    title: "Help",
    link: "/#",
  },
  {
    title: "Terms",
    link: "/#terms",
  },
  {
    title: "FAQ",
    link: "/#faq",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="container">
        <div className="flex justify-between py-5">
          {/* company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              V-lib
            </h1>
            <p className="text-lg">
              To build up a library is to create a life. It’s never just a
              random collection of books.
            </p>
            <p className="text-sm text-right">- Carlos Mario Dominguez</p>

            <br />

            <div className="flex items-center gap-3">
              <a href="#">support@vlib.com</a>
            </div>

            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="#">
                <FaTwitter className="text-3xl" />
              </a>
              <a href="#">
                <FaMedium className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-20 p-10 ">
            {/* link 1 */}
            <div className="">
              <div className="py-8 px-4 ">
                <ul className={`flex flex-col gap-3`}>
                  {Link1.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer duration-300 hover:text-primary space-x-1 text-gray-500"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* link 2 */}
            <div className="">
              <div className="py-8 px-4 ">
                <ul className="flex flex-col gap-3">
                  {Link2.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer duration-300 hover:text-primary space-x-1 text-gray-500"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* copyright */}
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            &copy; copyright 2024. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
