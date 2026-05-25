"use client";

import Image from "next/image";

const WhyChoseKosal = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-white dark:bg-[#0C0C0C]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 h-10 px-4 py-2 rounded-full bg-[#E9F4FF]">
            <div className="w-2 h-2 rounded-full bg-[#0076E2]" />
            <span className="text-sm font-medium text-[#0076E2]">
              Why Choose Kosal
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-left text-[36px] sm:text-[48px] lg:text-[64px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#110C22] dark:text-white">
          <span className="text-[#0BAA60] dark:text-[#6FDAA6]">
            We listen
          </span>{" "}
          first,
          <br />
          Then{" "}
          <span className="text-[#0A6CDB] dark:text-[#5FA6F3]">
            we build.
          </span>
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_58%] gap-6 lg:gap-10">
          {/* Left Card */}
          <div className="w-full rounded-[32px] bg-[#F8F8F8] dark:bg-[#141414] px-6 lg:px-8 py-6 flex flex-col justify-between gap-6">
            <div className="flex justify-center">
              <img
                src="/image 2.png"
                alt="Vetted Engineers"
                className="w-full max-w-[420px] h-auto object-contain"
              />
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[#110C22] dark:text-white">
                Vetted Engineers
              </h3>

              <p className="mt-2 text-[16px] lg:text-[18px] text-[#4F4B5C] dark:text-gray-300">
                Only the top 3% of engineers
                <br />
                make it into our network.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6 lg:gap-10">
            {/* Top Card */}
            <div className="relative min-h-[280px] sm:min-h-[320px] rounded-[32px] bg-[#F8F8F8] dark:bg-[#141414] overflow-hidden px-6 lg:px-8 py-6">
              <div className="absolute -top-4 -right-4 sm:-top-10 sm:right-0 w-[180px] sm:w-[280px] lg:w-[350px] aspect-square">
                <Image
                  src="/rocket-dynamic-color (1).png"
                  alt="Rocket"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="absolute bottom-6 left-6 lg:left-8 max-w-[70%]">
                <h3 className="text-[18px] sm:text-[18px] lg:text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-[#110C22] dark:text-white">
                  Fast Onboarding
                </h3>

                <p className="mt-2 text-[18px] sm:text-[16px] lg:text-[18px] md:text-[18px] lg:text-[18px] text-[#4F4B5C] dark:text-gray-300">
                  Get matched with the right engineers in days, not weeks.
                </p>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              {/* Card 1 */}
              <div className="rounded-[32px] bg-[#F8F8F8] dark:bg-[#141414] px-6 lg:px-8 py-6 min-h-[280px] flex flex-col justify-between">
                <div className="flex justify-end">
                  <img
                    src="/thumb-up-dynamic-color.png"
                    alt="Thumb"
                    className="w-[140px] h-auto object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-[18px] font-semibold text-[#110C22] dark:text-white">
                    Quality Guaranteed
                  </h3>

                  <p className="mt-2 text-[16px] lg:text-[18px] text-[#4F4B5C] dark:text-gray-300">
                    Quality you can trust, support
                    <br />
                    you can count on.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-[32px] bg-[#F8F8F8] dark:bg-[#141414] px-6 lg:px-8 py-6 min-h-[280px] flex flex-col justify-between">
                <div className="flex justify-end">
                  <img
                    src="/chat-bubble-dynamic-color.png"
                    alt="Chat"
                    className="w-[140px] h-auto object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-[18px] font-semibold text-[#110C22] dark:text-white">
                    Flexible Engagement
                  </h3>

                  <p className="mt-2 text-[16px] lg:text-[18px] text-[#4F4B5C] dark:text-gray-300">
                    From short-term to long-term —
                    <br />
                    we scale with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoseKosal;