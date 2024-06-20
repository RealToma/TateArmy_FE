import { useMemo } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant: "primary" | "outline";
}

export const Button = ({ children, className, variant }: Props) => {
  const buttonClassNames = useMemo(() => {
    switch (variant) {
      case "primary":
        return "button_bg border-[#596C4A42] text-[#060609] hover:border-[#596C4A42] hover:!text-[#00FF06]";
      case "outline":
        return "bg-transparent text-white hover:text-[#060609] hover:bg-[#00FF06]";
    }
  }, [variant]);

  return (
    <button
      className={`font_this_coffee !transition-all !duration-150  px-6 py-3 rounded-[4px] border border-solid text-base font-normal leading-6 text-center ${buttonClassNames} ${className} `}
    >
      {children}
    </button>
  );
};
