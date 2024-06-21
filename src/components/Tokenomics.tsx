import { ListItem } from "../common";
import { TOKENOMICS } from "../constants/Tokenomics";

export const Tokenomics = () => {
  return (
    <section id="tokenomics" className="w-full">
      <div className="container flex-col gap-y-9 lg:flex-row pt-[34px] lg:pt-[90px] flex w-full">
        <div className="w-full lg:w-1/2">
          <h1
            data-aos="fade-up"
            className=" text-[28px] lg:text-5xl font_this_coffee text-[#EEEEEE] font-normal lg:leading-[72px] text-left"
          >
            Tokenomics
          </h1>
          <p
            data-aos="fade-up"
            className="text-[14px] lg:text-lg text-[#eeeeee] font-medium my-9 lg:leading-6 text-left"
          >
            We believe in empowering our community and ensuring everyone has a
            stake in our success. Here's how TARMY is distributed:
          </p>
          <div className="flex mt-9 flex-col gap-4">
            {TOKENOMICS.map((item, index) => (
              <ListItem
                {...item}
                leftElementClassName={item.bg}
                key={index}
                portent={`${item.portent}`}
              />
            ))}
          </div>
        </div>
        <div data-aos="fade-up" className=" w-full lg:w-1/2 flex items-center">
          <img className="w-full" src="./images/chart.png" alt="" />
        </div>
      </div>
    </section>
  );
};
