import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeCTA() {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: '-100px',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 1,
      },
    },
  };

  return (
    <div className="col-start-1 z-10 pt-20 pb-20">
      <Link href={'/reviews'} className="cursor-pointer">
        <div className="flex shadow-lg text-money-textLight dark:border-opacity-40 cursor-pointer bg-black">
          <motion.button className="flex items-center w-full bg-gradient-to-r from-money-lAccent2 to-black bg-opacity-70 shadow-md border-opacity-20 p-6 cursor-pointer relative">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 inline-block fill-current text-money-lAccent1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 inline-block mr-3 text-money-lAccent2 fill-current"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </motion.button>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="flex items-center flex-col w-full"
          >
            <div className=" tracking-wider text-lg sm:text-2xl font-extrabold uppercase ">
              <h3>see the blog</h3>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 border-2 border-money-textLight border-opacity-40 rounded-full col-start-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>
      </Link>
    </div>
  );
}
