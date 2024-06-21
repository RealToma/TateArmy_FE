export const Community = () => {
  return (
    <section id="community">
      <div className="w-full pt-[34px] lg:pt-[100px] container">
        <div className="w-full relative overflow-hidden border border-solid rounded-md lg:rounded-[38px] border-[#3F9321]">
          <img
            data-aos="fade-up"
            src="./images/community.png"
            alt=""
            className="w-full min-h-[250px] lg:h-auto object-cover"
          />
          <div className="community_blur absolute w-full h-full bottom-0 left-0" />
          <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center left-0">
            <h1
              data-aos="fade-up"
              className=" text-[28px] lg:text-5xl font-normal lg:leading-[72px] text-center font_this_coffee text-[#eeeeee]"
            >
              Join the Community
            </h1>
            <p
              data-aos="fade-up"
              className=" text-[14px] lg:text-lg font-medium w-full lg:w-[60%] mt-9 lg:leading-6 text-center text-[#eeeeee]"
            >
              The TateArmy community is where the magic happens. Engage with
              like-minded warriors, participate in epic contests, and earn
              rewards. Follow us on social media, join our Telegram group, and
              be part of the revolution.
            </p>
          </div>
        </div>
        <h1
          data-aos="fade-up"
          className=" text-[28px] lg:text-5xl font-normal lg:leading-[72px] text-center font_this_coffee text-[#eeeeee] mt-[46px]"
        >
          Be a member
        </h1>
        <div
          data-aos="fade-up"
          className="flex justify-center w-full mt-4 lg:pt-9"
        >
          <p className=" text-[14px] lg:text-lg font-medium lg:leading-6 text-center text-[#eeeeee] w-full lg:w-[60%]">
            For a secure airdrop, We'll verify your The Real World membership
            through email or platform integration (if available) to protect your
            logins and wallet addresses. We prioritize security and ensuring
            everyone who qualifies gets the airdrop!
          </p>
        </div>
      </div>
    </section>
  );
};
