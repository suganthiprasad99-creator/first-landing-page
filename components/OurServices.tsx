import { Globe, Smartphone, Server, Code2, BarChart3, Palette, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const services = [
  {
    image: "/ourservice/globe.svg",
    title: "Web Development",
    desc: "Modern, responsive web applications built with React, Next.js, and other cutting-edge technologies.",
  },
  {
    image: "/ourservice/Mobile.png",
    title: "Mobile Development",
    desc: "Cross-platform mobile apps for iOS and Android using React Native and Flutter.",
  },
  {
    image: "/ourservice/Server.svg",
    title: "Backend Development",
    desc: "Robust, well-documented APIs for seamless integration between systems.",
  },
  {
    image: "/ourservice/api.png",
    title: "API Development",
    desc: "Scalable and secure APIs designed for high performance and reliability.",
  },
  {
    image: "/ourservice/data.png",
    title: "Data Analytics",
    desc: "Insightful data analysis and visualization to drive business decisions.",
  },
  {
    image: "/ourservice/design.png",
    title: "UI/UX Design",
    desc: "Creating intuitive and engaging user experiences with modern design principles.",
  },
]
export default function OurServices() {
  return (
    <section
      className="
        w-full
        bg-white
        dark:bg-[var(--Surface-surface_0,#0C0C0C)]
        transition-colors
      "
    >
      {/* Container */}
      <div
        className="
          w-[1440px]
          mx-auto
          px-[64px]
          py-[100px]
          flex flex-col gap-[40px]
        "
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">

          {/* Badge */}
          <div
            className="
    px-4 py-1
    rounded-full
    bg-[#E9F4FF]
    dark:bg-[background: var(--Surface-info_accent_1, #71BBFF33);
]
    flex items-center gap-2
    text-sm font-medium
    text-blue-600
    dark:text-[#4FA3FF]
  "
          >
            {/* 8x8 Blue Dot */}
            <span
              className="
      w-[8px]
      h-[8px]
      rounded-full
      bg-[#0076E2]
      opacity-100
    "
            />

            Our Services
          </div>
          {/* Heading */}
          <h2
            className="
              text-[64px]
              leading-[72px]
              font-semibold
              tracking-[-0.01em]

              text-[#0F0F1A]
              dark:text-white
            "
          >
            Whatever you need,{" "}
            <div className="text-white"> <span className="text-[#0F0F1A] dark:text-white">we’ll </span>
              <span className="text-[#0A6CDB]"> build it.</span> </div>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {services.map((service, index) => {
            const Icon = service.image

            return (
              <div
                key={index}
                className="
                  p-6
                  rounded-4xl
                  bg-[#F7F7F8]
                  dark:bg-[#141414]
                  transition
                  flex flex-col 
                  gap-3
                  
                "
              >
                {/* Icon */}
                <div className="w-15 h-15 flex items-center justify-center rounded-lg">
                  <Image src={service.image} alt="icon" width={30} height={30} className="" />

                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#0F0F1A] dark:text-white">
                  {service.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-[#4F4B5C] dark:text-[#C2C2C2] leading-6">
                  {service.desc}
                </p>

                {/* Link */}
                <button
                  className="
    flex items-center gap-[6px]

    w-[112px]
    h-[26px]

    pb-[2px]

   

    text-sm
    text-[#0A6CDB]
    font-medium

    dark:text-[#4FA3FF]
    dark:border-[#C2C2C2]
  "
                >
                  Learn more

                  {/* Right Arrow Icon */}
                  <ArrowUpRight className="w-3 h-3 text-[#0084FF] dark:text-[#4FA3FF]" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}