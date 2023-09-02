"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { arrowAnimation, navVariants, textVariant } from "@/utils/motion";
import { useState } from "react";
import GifModal from "./GifModal";

const Navbar = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} sm:px-16 px-6 py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <motion.img
          src="./arrow-down.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
          variants={arrowAnimation}
        />

        <img src="./sike_1.png" alt="sike_1" className="h-[40px] w-[120px]" />

        <motion.div variants={navVariants} onClick={handleButtonClick}>
          <h5 className="text-white w-[24px] h-[24px]">&lt;/&gt;</h5>
        </motion.div>

        <GifModal isVisible={isModalVisible} onClose={handleCloseModal} />
      </div>
    </motion.nav>
  );
};

export default Navbar;
