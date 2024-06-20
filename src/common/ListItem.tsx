interface Props {
  className?: string;
  leftElementClassName?: string;
  portent: string;
  title: string;
}

export const ListItem = ({
  className,
  leftElementClassName,
  portent,
  title,
}: Props) => {
  return (
    <div
      data-aos="fade-up"
      className={`py-3 bg-[#1F1F21] flex items-center relative  w-full rounded-[4px] ${className} `}
    >
      <div
        className={`h-full w-[21px] absolute left-0 rounded-[4px] ${leftElementClassName} `}
      />
      <div className="flex w-full pl-[38px] pr-4 justify-between items-center ">
        <h2 className="text-base font-medium leading-6 text-left text-[#EEEEEE]">
          {title}
        </h2>
        <p className="text-base font-medium leading-6 text-[#eee]">{portent}</p>
      </div>
    </div>
  );
};
