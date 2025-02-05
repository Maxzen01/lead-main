"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function Approach() {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Our <span className="text-purple">Services</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-y-10 md:gap-x-16 mx-auto md:px-8 select-none">
        <Card
          title="Online Training"
          icon={<AceternityIcon order="Online Training" />}
          des="we are providing online training with course compilation certificate.The course for online training AWS,Generative Ai,Artifical Intelligence, Automation Testing,Python Full Stack, Digital Marketing,Cyber Security,Mean Stack."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-700 dark:bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Offline Training"
          icon={<AceternityIcon order="Offline Training" />}
          des="we are providing offline Training with real time project and certification. And List of course are AWS/Devops,Azure/Devops,Generative Ai,Aritifical Intelligence,Automation Testing,Cybder Security,Digital Marketing,Mean Stack. "
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-700 dark:bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Corporate Training"
          icon={<AceternityIcon order="Corporate Training" />}
          des="Corporate training is a structured learning program designed to enhance employees' skills, knowledge, and performance within an organization. It helps businesses improve efficiency, align workforce capabilities with company goals, and foster professional growth." 
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-500 dark:bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border cursor-pointer border-gray-300 dark:border-gray-700 group/canvas-card flex items-center justify-center
      max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl bg-gray-100 dark:bg-[#04071D]"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="text-center text-xl sm:text-3xl opacity-0 group-hover/canvas-card:opacity-100
        relative z-10 text-gray-900 dark:text-gray-100 mt-4 font-bold group-hover/canvas-card:text-white 
        group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
        relative z-10 mt-4 text-gray-200 dark:text-gray-300 text-center
        group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="text-2xl md:text-4xl font-bold tracking-wide bg-gradient-to-r from-[hsl(286,58%,43%)] to-purple bg-clip-text text-transparent">
      {order}
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
