import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full px-8 py-8 md:px-16 md:py-20 flex flex-col gap-20 select-none ">
      
      {/* Top Section: Information Links */}
      <div className="max-w-[1440px]  w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4 ">
          <h2 className="text-[26px] font-black han sans font-regular font-400  tracking-tight">Kosal.io</h2>
          <p className="text-[16px] font-manrope font-medium dark:text-[#C2C2C2]  text-[#4F4B5C] max-w-xs leading-relaxed">
            Empowering Businesses with <br/>Smart Software Solutions.
          </p>
          {/* Social Icons Placeholder */}
        <div className="flex items-center gap-4 mt-2 dark:text-[#C2C2C2]  text-[#4F4B5C]">
            <a href="#" className="hover:text-blue-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" className="hover:text-black transition-colors">
              <span className="sr-only">X (Twitter)</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4 md:items-center">
          <div className="flex flex-col gap-[24px]">
            <h3 className="text-[20px] font-Inter font-semibold tracking-tight  ">Quick Links</h3>
            <ul className="flex flex-col  font-manrope  font-semibold gap-[16px] text-sm dark:text-[#C2C2C2]  text-[#4F4B5C]">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Why Choose Kosal</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Ladder Academy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Us Column */}
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-col gap-[24px] w-full max-w-xs">
            <h3 className="text-[20px] font-Inter font-semibold tracking-tight">Contact Us</h3>
            <ul className="flex flex-col font-manrope font-semibold gap-[16px] text-sm dark:text-[#C2C2C2]  text-[#4F4B5C]">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>219/B, Tiruchendur Road, <br/> Samathanapuram, Palayamkottai, <br/>Tirunelveli - 627 002.</span>
              </li>
              <li className="flex items-center gap-[6px]">
                <span>📞</span>
                <a href="tel:+916383437327" className="hover:text-blue-600 transition-colors">+91 63834 37327</a>
              </li>
              <li className="flex items-center gap-[6px]">
                <span>✉️</span>
                <a href="mailto:info@kosal.io" className="hover:text-blue-600 transition-colors">info@kosal.io</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Massive Background Brand Image */} 
      <div className="w-full flex justify-center items-center px-4">
        <img 
          src="/Heading.png" 
          alt="KOSAL" 
          className="w-full w-[150px] max-w-[600px] opacity-70 pointer-events-none"
        />
      </div>

      {/* Bottom Section: Copyright & Legal Links */}
      {/* Updated line below: Added border-t border-[#3D3D3D]/20 dark:border-[#3D3D3D] */}
      <div className="max-w-[1440px] font-manrope font-medium mx-auto w-full pt-6 border-t border-[#3D3D3D]/20 dark:border-[#3D3D3D] opacity-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs  dark:text-[#C2C2C2] text-[#4F4B5C]">
        <div>
          © 2026 Kosal. All rights reserved.
        </div>
        <div className="flex gap-6 dark:text-[#C2C2C2]  text-[#4F4B5C]">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</a>
        </div>
      </div>

    </footer>
  );
}