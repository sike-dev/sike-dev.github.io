"use client";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "@/components";
import styles from "@/styles";
import {
  fadeIn,
  inputVariants,
  planetVariants,
  staggerContainer,
} from "@/utils/motion";
import { SubmitHandler, useForm } from "react-hook-form";

const Feedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    window.location.href = `mailto:sikedev@gmail.com?subject=${formData.subject}&body==Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| Contact Us" textStyles="text-center" />
        <TitleText
          title={
            <>
              Want to connect with us? <br className="md:block hidden" /> We'll
              get right back to you.
            </>
          }
          textStyles="text-center"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 md:w-2/3 w-full max-w-xl mx-auto mt-10"
        >
          <div className="flex flex-col md:flex-row  md:space-x-2">
            <motion.input
              {...register("name")}
              placeholder="Name"
              className="contactInput rounded bg-transparent border border-white text-white p-2 md:p-3 w-full"
              type="text"
              variants={inputVariants}
            />
            <motion.input
              {...register("email")}
              placeholder="Email"
              className="contactInput rounded bg-transparent border border-white text-white p-2 md:p-3 w-full"
              type="email"
              variants={inputVariants}
            />
          </div>

          <motion.input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput rounded bg-transparent border border-white text-white p-2 md:p-3 w-full"
            type="text"
            variants={inputVariants}
          />

          <motion.textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput rounded bg-transparent border border-white text-white p-2 md:p-3 w-full"
            variants={inputVariants}
          />
          <motion.button
            type="submit"
            className="bg-black py-5 px-10 rounded-full text-white font-bold text-lg"
            variants={inputVariants}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Feedback;
