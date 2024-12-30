import { useEffect, useRef, useState } from "react";
import { notificationsData, sidebarLinks } from "../constants";
import { AlignLeft, ArrowRight, BadgeAlert, ChevronDown, LogOut, MessageCircleWarning, OctagonAlert, Settings, Trash, User } from "lucide-react";
import moment from "moment";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [notificationIsOpen, setNotificationIsOpen] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLInputElement>(null);
  const notificationbarRef = useRef<HTMLInputElement>(null);
  const profilebarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClickNotif = (event: Event) => {
      if (notificationbarRef.current && !notificationbarRef.current.contains(event.target as Node)) {
        setNotificationIsOpen(false);
      }
    };

    if (notificationIsOpen) {
      document.addEventListener("mousedown", handleOutsideClickNotif);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClickNotif);
    };
  }, [notificationIsOpen]);

  useEffect(() => {
    const handleOutsideClickProfile = (event: Event) => {
      if (profilebarRef.current && !profilebarRef.current.contains(event.target as Node)) {
        setProfileIsOpen(false);
      }
    };

    if (profileIsOpen) {
      document.addEventListener("mousedown", handleOutsideClickProfile);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClickProfile);
    };
  }, [profileIsOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);


  return (
    <header className="relative px-7 py-4 border-b flex items-center justify-between lg:justify-end">
      <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <AlignLeft />
      </button>
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 w-[265px] md:w-[280px] h-screen shadow transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          } bg-[#1C2434] lg:hidden`}
      >
        <div className="w-[90%] mx-auto mt-12 ml-10">
          <div className="flex flex-col gap-10 items-start h-full flex-1">
            {/* Logo Section */}
            <img src="/assets/SKSTOCKLogo.svg" alt="logo" width={200} height={200} className="w-46" />

            {/* Menu Section */}
            <div className="flex flex-col gap-4 w-[90%]">
              <h1 className="uppercase text-lg font-semibold font-poppins text-white">
                Menu
              </h1>
              <ul className="flex flex-col gap-4 w-[90%]">
                {sidebarLinks.map((link, index) => (
                  <li
                    key={link.id || index}
                    className={`cursor-pointer font-poppins flex items-center justify-between py-2 px-2 rounded-md ${currentPath === link.href
                      ? "bg-gray-400/50 text-white"
                      : "text-gray-400"
                      }`}
                  >
                    <a href={link.href} className="flex items-center gap-4">
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                    {currentPath === link.href && <ArrowRight size={20} color="#FFF" />}
                  </li>
                ))}
              </ul>
            </div>


          </div>


        </div>
      </aside>
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <div className="relative flex items-center justify-center" onClick={() => setNotificationIsOpen(!notificationIsOpen)}>
          <div className="absolute left-0 top-0 bg-red-500 rounded-full size-5 flex items-center justify-center">
            <span className="text-sm text-white">
              {notificationsData.filter((notification) => !notification.read).length}
            </span>
          </div>
          <div className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
          </div>

        </div>

        {/* Notifications Panel */}
        <div ref={notificationbarRef} className={`fixed top-0 right-0 z-50 w-[270px] md:w-[350px] lg:w-[400px] h-screen bg-white shadow transition-transform duration-300 ${notificationIsOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex items-center justify-between mt-12 mx-5">
            <h1 className="font-bold text-lg md:text-2xl">Notifications</h1>
            <Trash size={20} />
          </div>
          <div className="h-[90%] overflow-y-auto scrollbar-hidden">
            {
              notificationsData.map((notification, index) => (
                <div key={index}>
                  <div
                    className={`flex items-center gap-2 mt-5 mx-5 p-2 rounded-md cursor-pointer hover:bg-gray-100 ${notification.read ? "bg-gray-100" : ""}`}
                  >
                    <div
                      className={`${notification.icon === "important" ? "text-blue-500" : notification.icon === "info" ? "text-green-500" : notification.icon === "error" ? "text-red-500" : "text-gray-500"}`}>
                      {
                        notification.icon === "important" ? <BadgeAlert className="size-8" />
                          : notification.icon === "info" ? <OctagonAlert className="size-8" />
                            : notification.icon === "error" ? <MessageCircleWarning className="size-8" /> : ""
                      }
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-xs">{notification.content}</h1>
                      <span className="text-xs">{moment(notification.timestamp).fromNow()}</span>
                    </div>

                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Profil Icon */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setProfileIsOpen(!profileIsOpen)}>
          <div className="hidden lg:block">
            <h1 className="text-sm font-semibold font-epilogue">John Doe</h1>
            <p className="text-xs font-epilogue text-gray-500">Admin</p>
          </div>
          <img src="/assets/default-avatar.png" alt="avatar" width={40} height={40} className="size-9 md:size-10 xl:size-12 rounded-full object-cover" />
          <ChevronDown />
        </div>

        {/* Profil Panel */}
        <div
          ref={profilebarRef}
          className={`absolute top-[72px] xl:top-[80px] right-[28px] z-50 bg-white border text-gray-600 transform transition-transform duration-300 ease-in-out ${profileIsOpen ? "" : "hidden"
            }`}
        >
          <div className="flex flex-col gap-5 border-b px-7 py-5">
            <div className="flex items-center gap-3 w-full">
              <User size={22} />
              <span className="text-sm font-semibold font-poppins">My Profile</span>
            </div>
            <a href={"/setting"} className="flex items-center gap-3 w-full">
              <Settings size={22} />
              <span className="text-sm font-semibold font-poppins">Account Settings</span>
            </a>
          </div>
          <div>
            <div className="flex items-center gap-3 px-7 py-5">
              <LogOut size={22} />
              <span className="text-sm font-semibold font-poppins">Log out</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Navbar
