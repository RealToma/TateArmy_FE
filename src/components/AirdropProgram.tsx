import { Button } from "../common";

export const AirdropProgram = () => {
  return (
    <section className="relative">
      <div className="container relative pt-[34px] lg:pt-[158px] w-full ">
        <h1
          data-aos="fade-up"
          className=" text-[28px] lg:text-5xl  text-[#eee] font-normal lg:leading-[72px] text-center font_this_coffee"
        >
          Airdrop Program
        </h1>
        <div data-aos="fade-up" className="flex justify-center">
          <p className=" text-[14px] lg:text-lg w-full lg:w-[70%] mt-9 text-[#eeeeee] font-medium lg:leading-6 text-center">
            Earn TARMY tokens by participating in our Social Media Airdrops!
            Engage with us on Twitter, Instagram, and TikTok to receive rewards.
            Share, like, and create content to grow your TARMY stash. The more
            you interact, the more you earn. Get ready to spread the word and
            build the TateArmy community!
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex z-[99] mt-[110px] gap-y-9 flex-col lg:flex-row lg:mt-[331px] gap-x-6 justify-center w-full"
        >
          <Button variant="primary">Buy TARMY</Button>
          <Button variant="outline">Join the Community</Button>
        </div>
        <img
          src="./images/airdrop-bg.png"
          alt=""
          className="w-full z-[-1] absolute bottom-32 left-0"
        />
      </div>
      <img
        src="./images/road-map-bg.png"
        alt=""
        className="w-full absolute z-[-1] bottom-[-1100px]"
      />
    </section>
  );
};
