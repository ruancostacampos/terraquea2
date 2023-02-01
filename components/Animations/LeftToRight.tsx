import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  invert?: boolean;
  duration: number;
  delay: number;
};

const AnimatedJoin = ({ children, invert, duration, delay }: Props) => {
  let initial = -30;

  if (invert === true) {
    initial = initial * -1;
  }

  return (
    <motion.div
      initial={{ x: initial, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "tween", duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedJoin;
