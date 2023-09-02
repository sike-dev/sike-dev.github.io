"use client";

import { motion } from "framer-motion";
import { TypingText } from "@/components";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About SIKE" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[20px] text-center text-white"
      >
        We are not your average group of developers; we are a dynamic collective
        of tech enthusiasts who believe in pushing boundaries and redefining
        possibilities. What sets us apart is not just our coding prowess, but
        our ability to have a heck load of fun while not losing track. So,
        whether you're a line-of-code poet, a user experience virtuoso, or a
        problem-solving maestro,
        <span className="font-extrabold text-white">SIKE </span>
        welcomes you to join our community of passionate developers. Together,
        <span className="font-extrabold text-white">
          let's turn dreams into reality, disrupt the status quo,
        </span>
        and showcase the{" "}
        <span className="font-extrabold text-white">
          true artistry of coding
        </span>
        . Welcome to the future, powered by SIKE!
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="./arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[18px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
