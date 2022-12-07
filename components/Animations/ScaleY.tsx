import { AnimatePresence, motion } from "framer-motion"

type Props = {
  children: JSX.Element,
  minHeight: number,
  height: number
}

export const ScaleY = ({children, height, minHeight} : Props) => {
  return (
  <AnimatePresence>
    <motion.div
        initial={{scaleY: 0}}
        animate={{scaleY: 1}}
        transition={{duration: 0.3, type: 'spring'}}
        style={{display: "flex", 
                minHeight: minHeight || "calc(100% - 162px)", 
                height: height || "auto",
                alignItems: "center", 
                justifyContent: "space-around"}}
      >
    {children}
   </motion.div>
  </AnimatePresence>
  )
}

export default ScaleY
