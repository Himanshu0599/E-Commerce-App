/* eslint-disable react/no-unescaped-entities */
import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <main className="w-full flex flex-col items-center justify-between gap-5 px-5 xl:px-10 py-10">
        <section className="w-full flex flex-wrap items-start justify-between lg:justify-center gap-10 lg:gap-28">
          <ul className="flex flex-col items-start justify-start gap-3 font-satoshi text-sm">
            <h2 className="text-base font-semibold font-serif">Need Help</h2>
            <li><a href="#contact-us" className="hover:underline font-serif">Contact Us</a></li>
            <li><a href="#track-order" className="hover:underline font-serif">Track Order</a></li>
            <li><a href="#returns-refunds" className="hover:underline font-serif">Returns & Refunds</a></li>
            <li><a href="#faq" className="hover:underline font-serif">FAQ's</a></li>
            <li><a href="#career" className="hover:underline font-serif">Career</a></li>
          </ul>
          <ul className="flex flex-col items-start justify-start gap-3 font-satoshi text-sm">
            <h2 className="text-base font-semibold font-serif">Company</h2>
            <li><a href="#about-us" className="hover:underline font-serif">About Us</a></li>
            <li><a href="#blog" className="hover:underline font-serif">FashionFactory Blog</a></li>
            <li><a href="#collaboration" className="hover:underline font-serif">Collaboration</a></li>
            <li><a href="#FacshionableFactor" className="hover:underline font-serif">FacshionableFactor</a></li>
            <li><a href="#media" className="hover:underline font-serif">Media</a></li>
          </ul>
          <ul className="flex flex-col items-start justify-start gap-3 font-satoshi text-sm">
            <h2 className="text-base font-semibold font-serif">More Info</h2>
            <li><a href="#terms" className="hover:underline font-serif">Terms and Conditions</a></li>
            <li><a href="#privacy-policy" className="hover:underline font-serif">Privacy Policy</a></li>
            <li><a href="#shipping-policy" className="hover:underline font-serif">Shipping Policy</a></li>
            <li><a href="#sitemap" className="hover:underline font-serif">Sitemap</a></li>
          </ul>
          <ul className="flex flex-col items-start justify-start gap-3 font-satoshi text-sm">
            <h2 className="text-base font-semibold font-serif">Location</h2>
            <li>
              <a href="mailto:support@fashionfactory.in" className="hover:underline">
                support@fashionfactory.in
              </a>
            </li>
            <li>LIG Square, AB Road</li>
            <li>(AB Road- Near LIG Square) Indore, India- 452001</li>
          </ul>
        </section>

        <section className="w-full flex items-center justify-center sm:justify-between flex-wrap border-t border-t-white gap-5 pt-5 font-serif">
          <h1 className="text-sm font-serif">
            Copyright&copy;2024 FashionFactory Pvt Ltd. All rights reserved.
          </h1>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/himanshu-gupta05/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <AiFillLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/himansh58311143"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <AiOutlineTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Himanshu0599"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <AiFillGithub className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
