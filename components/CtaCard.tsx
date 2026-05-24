import { Button } from "@/components/ui/button"

export default function CtaCard() {
  return (
    <section className="w-full px-16 py-20">
      <div className="max-w-[1024px] py-10  mx-auto bg-[#0A6CDB] rounded-[32px] md:rounded-[56px] px-10 py-1 flex flex-col items-center text-center gap-6">
        <h2 className="text-[40px] md:text-[32px] font-manrope font-semibold leading-[64px] tracking-[-0.01em] text-white">
          Ready to accelerate your development?
        </h2>
        <p className="max-w-[600px] text-[#F8F8F8] text-lg leading-7">
          Join hundreds of companies that trust Kosal to deliver high-<br />
          quality software engineering talent.
        </p>
        <Button className="w-fit px-6 h-14 rounded-xl bg-[#FFFFFF] text-[#4F4B5C] font-medium text-base hover:bg-[#F0F4FF] transition">
          Contact Us
        </Button>
      </div>
    </section>
  )
}
