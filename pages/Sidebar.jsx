import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "../components/icons";

const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/login" },
  { id: 2, label: "MyShare", icon: ArticleIcon, link: "/posts" },
  { id: 3, label: "Report", icon: UsersIcon, link: "/users" },
  { id: 4, label: "News", icon: VideosIcon, link: "/tutorials" },
  { id: 5, label: "Tasks", icon: VideosIcon, link: "/tutorials" },
  { id: 6, label: "Meeting", icon: VideosIcon, link: "/tutorials" },
  { id: 7, label: "Dividend", icon: VideosIcon, link: "/tutorials" },
  { id: 8, label: "Application", icon: VideosIcon, link: "/tutorials" },
  { id: 9, label: "Chat", icon: VideosIcon, link: "/tutorials" },
 
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    " flex flex-col justify-between w-full rounded-lg px-4 pt-8 pb-4 bg-slate-600 ",
    {
      ["w-50"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-3 rounded-full bg-gray-200 absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-gray-900 hover:text-darkGrayishBlue rounded-full w-full h-full overflow-hidden ",
      {
        ["bg-black-600"]: activeMenu === menu.id
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div 
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 50ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col ">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-3">
          <img src="images/sm.jpg" alt="" className={classNames("w-20 h-15 rounded-2xl", {
                hidden: toggleCollapse,
              })}/>
            
            {/* <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Logo
            </span> */}
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
           
        </div>

        <div className="flex flex-col items-start  mt-20">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link href={menu.link} legacyBehavior>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                    <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-slate-200"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${getNavItemClasses({})} items-center px-3 pt-4 mt-10 ` }>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-center font-medium text-gray-200")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
