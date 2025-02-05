import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5 relative" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 dark:opacity-30"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center text-gray-900 dark:text-gray-100">
        Ready to elevate <span className="text-purple">your</span> skills and unlock new opportunities?</h1>
        <p className="text-gray-700 dark:text-gray-300 md:mt-10 my-5 text-center">
        Join our Maxzen Tech Solutions today!
        </p>
        <p className="text-gray-700 dark:text-gray-300 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:etakarlapallipratap@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
      <p className="md:text-sm text-sm md:font-normal font-light text-gray-700 dark:text-gray-300">
          +91 8143444603
        </p>
        <p className="md:text-sm text-sm md:font-normal font-light text-gray-700 dark:text-gray-300">
          © 2024 Maxzen. All rights reserved.
        </p>

        <div className="flex items-center mt-5 sm:-mt-5 md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link href={info.link} target="_blank" key={info.id}>
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
