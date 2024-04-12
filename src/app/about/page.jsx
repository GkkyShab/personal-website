"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/gourav.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I am Gourav Kumar Gupta, a passionate Computer Science graduate
              from SRM Institute of Science and Technology, Chennai. With a keen
              eye for aesthetics and a mastery of code, I specialize in crafting
              innovative digital experiences that push the boundaries of
              creativity.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Embrace the challenge, ignite your passion, and let your
              determination fuel your journey to success.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="221"
                height="115"
                viewBox="0 0 221 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.08435 113.47C15.7268 98.8273 32.9764 88.0644 50.1228 76.648C60.2533 69.903 69.9954 62.916 79.8084 55.7539C92.2336 46.6853 105.34 38.6124 117.03 28.5801C123.845 22.7311 131.15 17.2272 136.868 10.2264C137.582 9.35158 141.184 5.30526 140.721 3.91816C139.821 1.21809 133.838 1.47367 131.873 1.46338C121.659 1.40991 110.684 4.66834 101.787 9.62694C92.2057 14.9675 84.6943 24.9676 79.1805 34.2032C76.1789 39.2309 75.0798 45.2287 72.016 50.1307C70.5019 52.5532 70.446 53.8595 70.446 56.7244C70.446 64.8326 79.6169 62.9888 85.5458 61.0916C86.3672 60.8287 88.3614 60.1222 88.914 59.2933C89.8429 57.9 88.9425 62.6425 88.9425 64.3171C88.9425 72.4386 88.6318 80.6034 89.4563 88.6936C89.9618 93.6537 89.1151 99.1336 89.9986 103.993C90.1904 105.048 90.9374 105.763 89.4563 105.763C88.663 105.763 87.0058 106.096 86.3736 105.534C84.2905 103.683 82.777 102.584 82.777 99.5403C82.777 92.2068 84.3757 86.8567 87.4011 80.3017C91.2516 71.959 98.2066 67.0867 105.384 61.5198C107.858 59.601 110.894 58.1398 113.205 56.0393C114.572 54.7967 112.169 55.5305 111.549 55.9252C108.293 57.9976 107.027 60.1915 106.012 63.7462C104.874 67.7277 111.205 68.7699 114.004 68.7699C118.645 68.7699 118.16 60.7842 117.686 57.4665C117.434 55.703 110.693 55.9186 109.494 56.5531C106.876 57.9391 112.106 60.0355 113.119 60.0355C115.237 60.0355 117.549 57.9347 118.229 55.8966C118.87 53.9713 120.958 52.995 121.711 51.301C122.169 50.271 122.305 50.1863 122.339 51.7007C122.394 54.1817 122.169 56.7044 122.367 59.1792C122.439 60.079 123.918 64.1017 125.022 64.1458C130.111 64.3494 130.046 57.6534 130.046 54.1269C130.046 50.8239 130.046 53.401 130.046 55.2972C130.046 57.1745 131.076 59.2374 132.872 60.0355C136.762 61.7647 138.548 52.3818 136.325 50.1593C135.493 49.3273 134.156 47.1369 134.156 49.5028C134.156 50.7196 137.365 50.7873 138.381 50.7873C140.828 50.7873 142.043 50.0363 143.633 48.4467C144.429 47.65 144.453 42.7245 145.174 45.5066C146.037 48.8337 143.604 57.9391 148.285 58.9794C155.129 60.5001 156.945 49.9989 156.763 45.2497C156.68 43.1013 152.83 46.1424 152.396 46.9624C151.373 48.8941 151.243 52.4409 152.767 54.2696C156.792 59.0999 158.818 54.3106 158.818 50.0166C158.818 47.1368 158.879 47.1181 159.731 50.2735C160.264 52.2438 160.459 54.2578 162.443 55.1259C169.019 58.0029 167.039 50.2295 167.039 46.2773C167.039 45.5718 166.948 44.7596 166.411 44.2222C165.755 43.5661 167.039 46.006 167.039 46.9338C167.039 48.5182 169.814 51.697 171.263 52.2145C173.113 52.8751 175.765 53.4551 177.2 51.7007C178.049 50.6631 177.45 45.625 177.286 44.3934C176.332 37.2414 169.316 45.6494 173.518 45.6494C180.157 45.6494 182.43 33.9279 183.994 29.2366C184.965 26.3231 185.581 19.7606 183.594 17.2767C180.08 12.8847 180.982 20.4263 181.196 23.6135C181.655 30.4234 182.616 37.1725 184.022 43.8511C184.866 47.8587 186.878 51.878 187.476 55.8681C188.642 63.6438 189.254 71.6256 191.358 79.217C192.487 83.2893 193.258 87.4879 193.87 91.6621C194.324 94.7564 196.36 97.9912 191.929 95.6868C180.996 90.0016 167.032 88.8077 154.822 88.8077C145.045 88.8077 135.376 91.3767 125.679 91.3767C125.331 91.3767 123.425 91.6255 123.195 91.3196C122.712 90.6759 160.076 68.459 163.014 67.0002C170.916 63.0773 179.312 60.3437 187.219 56.4104C192.997 53.5365 198.627 50.4666 204.631 48.0756C208.202 46.6533 212.969 44.4987 216.876 44.108C218.608 43.9348 219.445 43.761 219.445 41.7959C219.445 40.3712 219.959 39.1789 219.959 37.9425"
                  stroke="black"
                  stroke-width="1"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C/C++
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MonogoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Mongoose
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Data Structures and Algorithms
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Object-Oriented Programming(OOP)
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Database Management System
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                VS Code
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postman
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EDUCATION CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EDUCATION TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            {/* EDUCATION LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* EDUCATION TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    SRM Institute of Science and Technology, Chennai
                  </div>
                  {/* EDUCATION DESC */}
                  <div className="p-3 text-sm italic">
                    B.Tech in Computer Science{" "}
                  </div>
                  {/* EDUCATION DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020 - Present
                  </div>
                  {/* EDUCATION SCHOOL */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    CGPA- 9.35/10
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    MDVM Parle School, Neemrana
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Class 12th CBSE Board{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2018 - 2019{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Percentage- 78/100
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    D.V.M Public School, Behror{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Class 10th CBSE Board{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2016 - 2017{" "}
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    CGPA- 9.4/10
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
