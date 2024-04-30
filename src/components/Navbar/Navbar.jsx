import PropTypes from "prop-types";
import Logo from "/favicon.svg";
import DarkMode from "./DarkMode";
import { FaHeadphones } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="shadow-md shadow-zinc-900 bg-white dark:bg-gray-900 dark:text-white duration-200 h-24 items-center flex">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <a
                href="#"
                className="font-bold items-center text-2xl sm:text-3xl flex gap-2"
              >
                <img src={Logo} alt="Logo" className="w-10" />
                V-lib
              </a>
            </div>

            <div className="flex justify-between items-center gap-4">
              {/* dark mode */}
              <div>
                <DarkMode />
              </div>

              {/* menu links */}
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* help button */}
              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
              >
                Help
                <FaHeadphones className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// prop validation
Navbar.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Navbar;
