"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Voting App Backend",
    desc: "Built a backend Voting Application facilitating user authentication via Aadhar Card Number and password, candidate management, and voting functionalities. Utilized Node.js, Express.js, MongoDB, and JWT for secure authentication.",
    img: "/votingApp.png",
    link: "https://github.com/GkkyShab/voting_app",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "ChatApp Using MERN",
    desc: "Engineered a real-time chat web application leveraging MERN stack, featuring seamless communication through Socket.io, showcasing proficiency in full-stack development and collaborative technologies.",
    img: "/chatApp.png",
    link: "https://chatapp-production-x523.onrender.com/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Matrix Personal AI",
    desc: "Contributed to Python AI Assistant: built scalable, quality-focused solutions. Integrated Voice Recognition, showcased troubleshooting skills, teamwork, and strategic enhancements for customer value.",
    img: "/personalAI.png",
    link: "https://github.com/GkkyShab/Jarvis.git",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Youtube Clone Player",
    desc: "Engineered scalable React.js video platform with user-centered design. Led RapidAPI integration for optimized streaming, ensuring quality-driven outcomes and customer-centric value.",
    img: "/ytClone.png",
    link: "https://preeminent-bonbon-f9040e.netlify.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Hire Me! For Work.</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end and Back-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/Resume_Gourav.pdf"
            download={true}
            target={"_blank"}
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            My Resume
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;