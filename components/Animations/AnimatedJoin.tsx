import {AnimatePresence, motion} from "framer-motion"

type Props = {
  children: JSX.Element
}

const AnimatedJoin = ({children} : Props) => {
  return (
    <AnimatePresence>
      <motion.div
      initial={{x: -500}}
      animate={{x: -90}}
      viewport={{once: true}}
      transition={{type: "spring", duration: 2}}
      >
      {children}  
    </motion.div>
  </AnimatePresence>
  )
}

export default AnimatedJoin

