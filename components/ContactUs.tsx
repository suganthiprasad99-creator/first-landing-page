import { Button } from "@/components/ui/button"

export default function ContactUs() {
  return (
    <section id="contact" className="w-full  px-4 md:px-16 md:py-20 ">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">

        {/* Badge */}
        <div className="flex ">
          <div className="inline-flex items-center gap-2 h-10 px-4 py-2 rounded-full bg-[#E9F4FF]">
            <div className="w-2 h-2 rounded-full bg-[#0076E2]" />
            <span className="text-sm font-medium text-[#0076E2]">
              Contact Us
            </span>
          </div>
        </div>


        
{/* Main Component Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
          
          {/* Left Column: Heading */}
          <div className="flex flex-col text-[104px] justify-center space-y-2">
            <h2 className=" max-w-[572px] text-[104px] md:text-[104px] font-bold tracking-tight text-[#1D1929] dark:text-[#FFFFFF] leading-[1.1]">
              Let’s 
            </h2>
            <h2 className="text-[104px]  max-w-[572px] md:text-[104px] font-bold tracking-tight bg-gradient-to-r from-[#0084FF] to-[#0084FF] bg-clip-text text-transparent leading-[1.1]">
            Get in 
            </h2>
            <h2 className="text-[104px] max-w-[572px] md:text-[104px] font-bold tracking-tight bg-gradient-to-r from-[#0BAA60] to-[#0BAA60] bg-clip-text text-transparent leading-[1.1]">
             Touch 
            </h2>
          </div>

          {/* Right Column: Form (Figma: Frame 37) */}
          <form className="flex flex-col gap-[20px] w-full max-w-[700px]  bg-[#F8F8F8]  dark:bg-[#161616] rounded-[48px] p-6 md:p-20 md:p-12 lg:p-8  mx-auto lg:ml-auto">
            
            {/* Your Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-[#1D1929] dark:text-[#FFFFFF]">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-xl font-medium border border-[#B1B0B0] dark:border-[#0C0C0C] bg-white dark:bg-[#1C1C1C] bg-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <span className="text-[10px] text-[#4F4B5C] dark:text-[#C2C2C2] flex items-center gap-1 mt-0.5">
                <span
                  className="
                    w-4 h-4 rounded-full bg-gray-400
                    flex items-center justify-center
                    text-[10px] font-semibold text-white
                  "
                >
                  i
                </span> Hint Text
              </span>
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-bold text-gray-700 dark:text-[#FFFFFF]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="yourname@example.com"
                className="w-full px-4 py-2 rounded-xl font-medium border border-[#B1B0B0] dark:border-[#0C0C0C] bg-white dark:bg-[#1C1C1C] bg-black border-gray-200 bg-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <span className="text-[10px] text-[#4F4B5C] dark:text-[#C2C2C2] flex items-center gap-1 mt-0.5">
                <span
                  className="
                    w-4 h-4 rounded-full bg-gray-400
                    flex items-center justify-center
                    text-[10px] font-semibold text-white
                  "
                >
                  i
                </span> Hint Text
              </span>
            </div>

            {/* Your Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-bold text-gray-700 dark:text-[#FFFFFF]">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Excited about your work.."
                className="w-full px-4 py-2 rounded-xl font-medium border border-[#B1B0B0] dark:border-[#0C0C0C] bg-white dark:bg-[#1C1C1C] bg-blackborder-gray-200 bg-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
              <span className="text-[10px] text-[#4F4B5C] dark:text-[#C2C2C2] flex items-center gap-1 mt-0.5">
                <span
                  className="
                    w-4 h-4 rounded-full bg-gray-400
                    flex items-center justify-center
                    text-[10px] font-semibold text-white
                  "
                >
                  i
                </span> Hint Text
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="bg-[#1D63ED] hover:bg-blue-700 text-white font-medium text-sm px-4 py-2.5 rounded-xl shadow-sm transition-colors duration-200"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}