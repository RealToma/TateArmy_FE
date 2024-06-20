import { useEffect, useState } from "react";
import { LINKS } from "../constants";

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
                className="text-white text-base font-normal transition-all duration-150 leading-[19.01px] hover:text-[#00FF06] font_this_coffee"
                href={link.path}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="w-[45px] h-[30px] z-[999] flex lg:hidden flex-col justify-between"
        >
          <div className="w-full h-[3px] rounded bg-[#00FF06]" />
          <div className="w-full h-[3px] rounded bg-[#00FF06]" />
          <div className="w-full h-[3px] rounded bg-[#00FF06]" />
        </div>
      </div>
    </header>
  );
};
