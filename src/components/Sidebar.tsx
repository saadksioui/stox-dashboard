import { sidebarLinks } from "../constants";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
      if (typeof window !== "undefined") {
        setCurrentPath(window.location.pathname);
      }
    }, []);

  return (
    <aside className="w-full">
      <div className="w-[90%] mx-auto mt-12 ml-10">
        <div className="flex flex-col gap-10 items-start h-full flex-1">
          {/* Logo Section */}
            <img src="/assets/SKSTOCKLogo.svg" alt="logo" width={200} height={200} className="w-52" />

          {/* Menu Section */}
          <div className="flex flex-col gap-4 w-[90%]">
            <h1 className="uppercase text-lg font-semibold font-poppins text-white">
              Menu
            </h1>
            <ul className="flex flex-col gap-4 w-[90%]">
              {sidebarLinks.map((link, index) => (
                <li
                  key={index}
                  className={`cursor-pointer font-poppins flex items-center justify-between py-2 px-2 rounded-md ${currentPath === link.href
                    ? "bg-gray-400/50 text-white"
                    : "text-gray-400"
                    }`}
                >
                  <Link to={link.href} className="flex items-center gap-4">
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                  {currentPath === link.href && <ArrowRight size={20} color="#FFF" />}
                </li>
              ))}
            </ul>
          </div>


        </div>


      </div>
    </aside>
  );
};

export default Sidebar;
