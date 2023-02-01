import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  minHeight?: string;
  height?: number;
};

export const ScaleY = ({ children, height, minHeight }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.3, type: "spring" }}
        style={{
          display: "flex",
          minHeight: minHeight || "calc(100% - 162px)",
          alignItems: "center",
          justifyContent: "space-around",
          flex: 1,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScaleY;
