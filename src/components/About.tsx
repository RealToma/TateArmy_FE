import { useState } from "react";
import { Button } from "../common";
import { Play } from "../icons";

export const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section id="about" className="w-full">
      <div className="w-full flex flex-col gap-y-9 lg:flex-row pt-[34px] lg:pt-[134px] gap-x-[206px] container">
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
          <Button variant="primary" className=" w-full lg:w-auto">
            Join Now!
          </Button>
        </div>
        <div data-aos="fade-up" className=" w-full lg:w-[35%]">
          {isPlaying ? (
            <div className="rounded-[10px] overflow-hidden">
              <video
                autoPlay
                src="/videos/tatearmy.mp4"
                controls
                className="w-full h-full"
              />
            </div>
          ) : (
            <div className="relative">
              <img src="./images/about.png" alt="About TateArmy" />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
              >
                <Play />
              </button>
              <div className="absolute w-full h-full bottom-0 about_video_gradient"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
