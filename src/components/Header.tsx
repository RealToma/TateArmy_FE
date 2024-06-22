import { useEffect, useState } from "react";
import { LINKS, SOCIALMEDIAS } from "../constants";

export const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header className="w-full pt-6 lg:pt-[46px]  pb-[48px]">
      <div className="w-full container items-center flex justify-between">
        <a href="#" className="w-[52px] h-[52px] lg:w-[82px] lg:h-[82px]">
          <img src="/images/logo.png" alt="logo" />
        </a>
        <ul
          className={` transition-all duration-150 ${
            open ? "left-0" : "-left-full"
          } fixed lg:static  pt-20 lg:pt-0 pl-10 lg:pl-0 flex flex-col lg:flex-row lg:gap-y-0 gap-y-5  w-full h-full lg:h-auto lg:w-auto lg:bg-transparent bg-[#060609] top-0 z-[99] lg:flex gap-x-[50px]`}
        >
          {LINKS.map((link) => (
            <li key={link.path}>
              <a
                onClick={() => setOpen(false)}
                className="text-white icon_hover text-base font-normal transition-all duration-150 leading-[19.01px] hover:text-[#00FF06] font_this_coffee"
                href={link.path}
              >
                {link.label}
              </a>
            </li>
          ))}
          <div className="absolute bottom-0">
            <div
              data-aos="fade-up"
              className="flex z-30 bottom-0 pb-[48px] justify-center gap-x-6 mt-[28px]"
            >
              {SOCIALMEDIAS.map((media) => (
                <a
                  href={media.link}
                  className="w-[40.39px] footer_icon_hover hover:text-[#040F00] h-[40.39px] rounded-full border border-[#3CFF71] text-[#3CFF71] flex justify-center items-center"
                >
                  {media.icon}
                </a>
              ))}
            </div>
          </div>
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="w-[35px] h-[26px] z-[999] cursor-pointer flex lg:hidden flex-col justify-between"
        >
          <div
            className={`w-full h-[3px] rounded bg-[#00FF06] transition-transform duration-300 ${
              open ? "transform rotate-[46deg] translate-y-[13px]" : ""
            }`}
          />
          <div
            className={`w-full h-[3px] rounded bg-[#00FF06] transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-full h-[3px] rounded bg-[#00FF06] transition-transform duration-300 ${
              open ? "transform -rotate-[46deg] -translate-y-[10px]" : ""
            }`}
          />
        </div>
      </div>
    </header>
  );
};
