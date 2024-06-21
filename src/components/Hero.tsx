import { Button } from "../common";
import { Header } from "./Header";

export const Hero = () => {
  return (
    <section className="w-full">
      <Header />
      <div className="w-full container relative">
        <div className="w-full  border border-[#219326] rounded-md lg:rounded-[36px] relative overflow-hidden">
          <img
            src="/images/hero.png"
            alt="hero"
            className="!w-full object-cover h-auto lg:h-[756px]"
          />
          <div className="w-full hero_image h-full absolute left-0 top-0" />
        </div>
        <div className="flex w-full h-full static lg:absolute top-0 flex-col items-center justify-end">
          <h1
            data-aos="fade-up"
            className="text-[32px] mt-4 lg:mt-0 lg:text-7xl font_this_coffee text-white font-normal lg:leading-[72px] text-center"
          >
            Join the TateArmy
          </h1>
          <h3
            data-aos="fade-up"
            className="text-[28px] lg:text-5xl font-normal font_this_coffee text-white lg:leading-[72px] text-center"
          >
            Break Free from the Matrix!
          </h3>
          <p
            data-aos="fade-up"
            className=" text-[14px] lg:text-lg w-full lg:w-[50%] text-center text-[#EEEEEE] my-9 font-medium leading-6"
          >
            Welcome to TateArmy, the ultimate crypto revolution! Inspired by the
            legendary Andrew Tate, we're here to disrupt the system and create a
            community of warriors ready to escape the Matrix. It's time to level
            up, get rich, and show the world what true power looks like. Don't
            just dream it – own it with TARMY!
          </p>
          <div
            data-aos="fade-up"
            className="flex mb-[66px] w-full gap-y-9 mt-9 lg:mt-0 lg:w-auto flex-col lg:flex-row justify-center gap-x-6"
          >
            <Button className=" w-full lg:w-auto" variant="primary">
              Buy TARMY
            </Button>
            <Button className="w-full lg:w-auto" variant="outline">
              Join the Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
