// components/about-us-page.tsx

export default function AboutUsPage() {
  return (
    <section
      className="
        w-full
      

        mx-auto
        max-w-[1440PX]

        px-8 sm:px-6 lg:px-8
        my-20
      "
    >
      {/* Badge */}
      <div
        className="
          w-fit
          flex items-center justify-center
          px-4 py-2 gap-2
          rounded-[32px]
          bg-[#E9F4FF]
          mb-8
        "
      >
        <div className="w-[8px] h-[8px] rounded-full bg-[#0076E2]" />
        <span className="text-[#0A6CDB] text-sm font-medium">
          About Us
        </span>
      </div>

      {/* Main Container */}
      <div
        className="
          w-full
          max-w-[1312px]

          flex flex-col lg:flex-row
          gap-10 lg:gap-6
          items-start
        "
      >
        {/* Left Content */}
        <div className="flex-1 space-y-2">
          <h1
            className="
              font-bold leading-tight
              text-[40px] sm:text-[56px] lg:text-[72px] 
            "
          >
            Streamline.
          </h1>

          <h1
            className="
              font-bold leading-tight
              text-[40px] sm:text-[56px] lg:text-[72px]
              text-[#0A6CDB] dark:text-[#5FA6F3] 
            "
          >
            Scale.
          </h1>

          <h1
            className="
              font-bold leading-tight
              text-[40px] sm:text-[56px] lg:text-[72px]
              text-[#0BAA60] dark:text-[#6FDAA6]
            "
          >
            Succeed.
          </h1>
        </div>

        {/* Right Content */}
        <div
          className="
            w-full
            max-w-[628px]
            flex flex-col gap-6
          "
        >
          <p className="text-[12px] md:text-[14px]  lg:text-[18px] text-[#4F4B5C] dark:text-[#C2C2C2]">
            Kosal.io is a technology-driven company that builds tailored
            software solutions to help businesses streamline their operations
            and scale with confidence.
          </p>

          <p className="text-[16px] lg:text-[18px] text-[#4F4B5C] dark:text-[#C2C2C2]">
            We specialize in industry-specific platforms — like Bites, our
            restaurant management system — and custom enterprise tools for
            sectors such as retail and services.
          </p>

          <p className="text-[16px] lg:text-[18px] text-[#4F4B5C] dark:text-[#C2C2C2]">
            Our products are designed for performance, integration, and growth,
            powered by a team that understands both local needs and global
            standards.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="
          w-full
          max-w-[1312px]
          mt-16
          grid
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-6
        "
      >
        {[
          { value: "2.5", label: "Years of Experience" },
          { value: "23", label: "Projects Completed" },
          { value: "4", label: "Own Products" },
          { value: "50+", label: "Happy Customers" },
        ].map((item, i) => (
          <div
            key={i}
            className="
              bg-[#F3F3F4]
              dark:bg-[#141414]

              rounded-[24px]
              px-6 py-5
            "
          >
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#110C22] dark:text-white">
              {item.value}
            </h2>
            <p className="mt-2 text-[#4F4B5C] dark:text-[#C2C2C2]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}