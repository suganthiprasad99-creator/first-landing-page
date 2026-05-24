"use client"

import React from "react"

const WhyChoseKosal = () => {
  return (
    <section className="w-full px-16 py-20 bg-white dark:bg-[#0C0C0C]">

      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">

        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 h-10 px-4 py-2 rounded-full bg-[#E9F4FF]">
            {/* Blue Dot */}
            <div className="w-2 h-2 rounded-full bg-[#0076E2]" />
            <span className="text-sm font-medium text-[#0076E2]">
              Why Chose Kosal
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-left text-[48px] md:text-[64px] font-semibold leading-[72px] tracking-[-0.01em] text-[#110C22] dark:text-white">
          <span className="text-[#0BAA60] dark:text-[#6FDAA6]">We listen </span>
          <span className="text-[#110C22] dark:text-white">first, </span><br />
          Then <span className="text-[#0A6CDB] dark:text-[#5FA6F3]">we build.</span>
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 justify-between lg:grid-cols-[40%_58%]">

          {/* LEFT BIG CARD */}
          <div
            className="
    lg:row-span-2
    w-full
    px-8
    py-6
    rounded-[32px]
    bg-[#F8F8F8]
    dark:bg-[#141414]
    flex
    flex-col
    justify-between
    gap-4
  "
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/image 2.png"
                alt="Vetted Engineers"
                className="w-full max-w-[420px] h-auto object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg text-[26px] font-semibold text-[#110C22] dark:text-white">
                Vetted Engineers
              </h3>
              <p className="mt-3 text-sm text-[18px]text-[#4F4B5C] dark:text-gray-300">
                Only the top 3% of engineers <br />make it into our network.
              </p>
            </div>
          </div>
          <div className="grid grid-rows-[310px_auto] gap-10">
            {/* TOP RIGHT CARD */}
            <div
              className="
    col-span-1 lg:col-span-2
    row-span-1
    w-full
  
    h-[310.5px]
    px-8
    py-6
    rounded-[32px]
    bg-[#F8F8F8]
    dark:bg-[#141414]
    flex
    flex-col
    justify-between
    relative
  "
            >
              <div className="flex justify-end absolute -top-10 right-1">
                <img
                  src="/rocket-dynamic-color (1).png"
                  alt="Rocket"
                  className="w-350px] h-auto"
                />
              </div>
              <div className="flex flex-col gap-2 absolute bottom-5 left-5">
                <h3 className="text-[26px] font-semibold text-[#110C22] dark:text-white">
                  Fast Onboarding
                </h3>
                <p className="mt-2 text-sm text-[18px]text-[#4F4B5C] dark:text-gray-300">
                  Get matched with the right <br />engineers in days, not weeks.
                </p>
              </div>
            </div>

            {/* BOTTOM LEFT CARD */}
            <div
              className="
    w-full
    max-w-[357px]
    h-[311px]
    px-8
    py-6
    rounded-[32px]
    bg-[#F8F8F8]
    dark:bg-[#141414]
    flex
    flex-col
    gap-4
    justify-between
  "
            >
              <div className="w-full flex justify-end">
                <img
                  src="/thumb-up-dynamic-color.png"
                  alt="Thumb"
                  className="w-350px] h-auto"
                />
              </div>

              <div>
                <h3 className="text-[26px] font-semibold text-[#110C22] dark:text-white">
                  Quality Guaranteed
                </h3>

                <p className="mt-2 text-sm text-[18px]text-[#4F4B5C] dark:text-gray-300">
                  Quality you can trust, support
                  <br />
                  you can count on.
                </p>
              </div>
            </div>

            {/* BOTTOM RIGHT CARD */}
            <div
              className="
    w-full
    max-w-[357px]
    h-[311px]
    px-8
    py-6
    rounded-[32px]
    bg-[#F8F8F8]
    dark:bg-[#141414]
    flex
    flex-col
    justify-between
    gap-4
  "
            >
              <div className="flex justify-end">
                <img
                  src="/chat-bubble-dynamic-color.png"
                  alt="Chat"
                  className="w-350px] h-auto"
                />
              </div>

              <div>
                <h3 className="text-[26px] font-semibold text-[#110C22] dark:text-white">
                  Flexible Engagement
                </h3>

                <p className="mt-2 text-sm text-[18px]text-[#4F4B5C] dark:text-gray-300">
                  From short-term to long-term —
                  <br />
                  we scale with you.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChoseKosal