import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

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

]
export default function LadderAcademy() {


  return (
    <section id="academy" className="w-full px-16 py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">

        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 h-10 px-4 py-2 rounded-full bg-[#E9F4FF]">
            <div className="w-2 h-2 rounded-full bg-[#0076E2]" />
            <span className="text-sm font-medium text-[#0076E2]">
              Ladder Academy
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-[48px] md:text-[64px] font-semibold leading-[72px] tracking-[-0.01em] text-[#110C22] dark:text-white">
          From <span className="text-[#0A6CDB] dark:text-[#0A6CDB]">classroom </span>{" "}
          <span className="text-[#110C22] dark:text-[#FFFFFF]">to</span>{" "}<br/>
          <span className="text-[#0BAA60] dark:text-[#0BAA60]">codebase </span>
          <span className="text-[#110C22] dark:text-[#FFFFFF]">for real.</span>{" "}

        </h2>
        {/* Cards Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => {
                  const Icon = service.image
      
                  return (
                    <div
                      key={index}
                      className="
                       
                        p-6
                        rounded-2xl
      
                        bg-[#F7F7F8]
                        dark:bg-[#141414]
      
                        hover:shadow-md
                        transition
                        flex flex-col gap-3
                      "
                    >
                      {/* Icon */}
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg"> 
                        <Image src={service.image} alt="icon" width={20} height={20} className="" />
              
                      </div>
      
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-[#0F0F1A] dark:text-white">
                        {service.title}
                      </h3>
      
                      {/* Desc */}
                      <p className="text-sm text-[#4F4B5C] dark:text-[#C2C2C2] leading-6">
                        {service.desc}
                      </p>
      
                    
              </div>
                  )
                })}
              </div>


               {/* Button */}
  <Button
            variant="default"
    className=" 
      flex items-center justify-center gap-[6px] w-fit mx-auto
    "
  >
    Vist ladder acadamy

    {/* Right Arrow Icon */}
     <ArrowUpRight className="w-3 h-3 " />
  </Button>
      </div>
    </section>
  )
}

