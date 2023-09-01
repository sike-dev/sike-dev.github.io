// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { TypingText, ExploreCard, TitleText } from "@/components";
// import styles from "@/styles";
// import { fadeIn, staggerContainer } from "@/utils/motion";
// import { exploreWorlds } from "@/constants";

// const Explore = () => (
//   <section className={`${styles.paddings}`} id="explore">
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.25 }}
//       className={`${styles.innerWidth} mx-auto flex flex-col}`}
//     >
//       <TypingText textStyles="text-center" title="|The Project Realms" />
//       <TitleText
//         textStyles="text-center"
//         title={
//           <>
//             Choose the realm you want <br className="md:block hidden" />
//           </>
//         }
//       />
//     </motion.div>
//   </section>
// );

// export default Explore;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds } from "../constants";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Projects Realm" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the realm you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
