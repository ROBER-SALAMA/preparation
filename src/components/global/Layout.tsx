import { ReactNode, useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const alwaysOpenOnXl = "xl:w-96";

  return (
    <>
      <main className="w-screen z-0 h-screen flex flex-col xl:flex-row overflow-hidden bg-gray-800">
        <div className="rounded-r fixed z-[100] xl:hidden flex justify-between w-full px-6 h-16 items-center  ">
          <div className="space-x-3">
            <p className="text-xl  text-white text-center">CRUD</p>
          </div>
          <div
            aria-label="toggler"
            className="flex items-center justify-center"
          >
            {isOpen ? (
              <button
                onClick={() => setIsOpen(false)}
                aria-label="open"
                id="open"
                className="transition ease-in-out focus:outline-none focus:ring-2"
              >
                <FaX size={20} color="#fff" />
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                aria-label="close"
                id="close"
                className="transition ease-in-out focus:outline-none focus:ring-2"
              >
                <FaBars size={20} color="#fff" />
              </button>
            )}
          </div>
        </div>
        <div
          id="Main"
          className={`transform ease-in-out pb-10 top-0 lg:transition-width duration-250 mt-0  fixed xl:static xl:mt-0 lg:duration-500 flex h-screen z-50 overflow-y-auto bg-gray-800 flex-col ${isOpen ? `w-80 ${alwaysOpenOnXl}` : `w-0 ${alwaysOpenOnXl}`
            }`}
        >
          <div className="items-center hidden w-full justify-center pt-3 xl:flex">
            <p className="ml-2 text-xl font-bold leading-6 text-white">
              CRUD
            </p>
          </div>
          <hr className="w-full text-white bg-white " />

        </div>

        <div className="mt-16 overflow-y-auto xl:w-full xl:mt-0">
          <div className="w-full">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;