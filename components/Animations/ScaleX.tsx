import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  duration: number;
  delay: number;
};

export const ScaleX = ({ children, duration, delay }: Props) => {
  return (
    <motion.div
      initial={{
        scaleX: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ type: "tween", duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleX;
