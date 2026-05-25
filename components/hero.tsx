import { Button } from "@/components/ui/button"
// components/hero.tsx

export default function Hero() {
  <section className=" flex flex-col justify-center items-center min-h-screen"></section>
  return (
    <section
      className=" 
    relative
        max-w-[1440px]
        h-[80vh]
        max-h-[800px]
        flex 
        flex-col 
        justify-center 
        items-center
        overflow-hidden
        px-8
        md:px-8
        lg:px-16
      "
    >
      {/* Background Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
        <div
          className="
      w-full
      h-full

      bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)]

      dark:bg-[linear-gradient(to_right,#4A4C51_1px,transparent_1px),linear-gradient(to_bottom,#4F5665_1px,transparent_1px)]

      bg-[size:120px_120px]
    "
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full gap-6">
        <h1
          className="
            text-center
            text-[#110C22]
            dark:text-[#FFFFFF]

            /* Mobile */
            max-w-[382px]
            h-[120px]
            font-bold
            text-[32px]
            leading-[40px]
            tracking-[-0.01em]

            /* Tablet */
            md:max-w-[688px]
            md:h-[192px]
            md:text-[52px]
            md:leading-[64px]
            md:font-semibold

            /* Small Desktop */
            lg:max-w-[912px]
            lg:h-[264px]
            lg:text-[76px]
            lg:leading-[88px]
            lg:font-bold

            /* Large Desktop */
            xl:max-w-[1312px]
            xl:h-[192px]
            xl:text-[88px]
            xl:leading-[96px]
            xl:font-bold
          "
          style={{
            fontFamily: "Manrope",
          }}
        >
          Empowering Businesses with Smart Software Solutions
        </h1>
        {/* Description Text */}
        <div>
          <p
          className=" 
      w-full
      max-w-[1000px]
      h-[90px]
      text-center
      text-[#4F4B5C]
      dark:text-[#B0B0B0]
      font-medium
      text-[20px]
      text-medium
      text-500
      leading-[30px]
      tracking-[-0.01em]
      opacity-100
      mx-auto
      p-6
    "
          style={{
            fontFamily: "Inter",
          }}
        >
          From restaurants to enterprise management, we build tools that <br/> grow with your goals.
        </p>
        </div>
        <div className=" flex justify-center p-6 items-center gap-4">
          {/* Light / Dark Button */}
          <Button
            className="
          w-[181px]
          h-[56px]
          rounded-[16px]
          border
      border-[#F3F3F4]
          dark:border-[#292929]
          bg-white
          dark:bg-[#0C0C0C]
          px-4
          py-4
          gap-3
          p-6
          text-[#110C22]
          dark:text-white

          text-[16px]
          font-medium
          shadow-[0px_1px_2px_-1px_#110C2214]

          hover:bg-[#F9F9F9]
          dark:hover:bg-[#1A1A1A]

          transition-all
        "
          >
            Schedule a Demo
          </Button>
          <Button
            className="
    w-[129px]
    h-[56px]
    rounded-[16px]
    bg-[#0A6CDB]
    px-4
    py-4
    gap-3
    shadow-[0px_1px_2px_-1px_#110C2214]
flex
    text-white
    text-[16px]
    font-medium
flex-col
    hover:bg-[#085bb8]
    transition-all
    
  "
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}