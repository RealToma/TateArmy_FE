import { Button } from "../common";

export const About = () => (
  <section id="about" className="w-full">
    <div className="w-full flex flex-col lg:flex-row pt-[34px] lg:pt-[134px] gap-x-[206px] container">
      <div className="w-full lg:w-[65%]">
        <h1
          data-aos="fade-up"
          className="text-[28px] lg:text-5xl mt-[53px] font_this_coffee text-[#EEEEEE] font-normal lg:leading-[72px] text-left"
        >
          About TateArmy
        </h1>
        <p
          data-aos="fade-up"
          className="text-[14px] lg:text-lg font-medium my-9 leading-6 text-left text-[#eee]"
        >
          TateArmy is more than just a token – it's a movement. Powered by the
          unmatched energy of Andrew Tate, TARMY symbolizes strength,
          resilience, and the relentless pursuit of freedom. We're building a
          community that’s ready to defy the norms, break the chains, and
          embrace true financial independence. Join us, and let's conquer the
          crypto world together.
        </p>
        <Button
          data-aos="fade-up"
          variant="primary"
          className=" w-full lg:w-auto"
        >
          Join Now!
        </Button>
      </div>
      <div data-aos="fade-up" className=" mt-4 lg:mt-0 w-full lg:w-[35%]">
        <div className="rounded-[10px] overflow-hidden">
          <video
            muted
            autoPlay
            src="/videos/tatearmy.mp4"
            controls
            loop
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  </section>
);
