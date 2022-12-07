import { motion } from "framer-motion"

type Props = {
  children: JSX.Element,
  duration: number,
  delay: number
}


export const ScaleX = ({children, duration, delay} : Props) => {
  return (
    <motion.div
    initial={{scaleX: 0, width: "100%", display: "flex", justifyContent: "space-around"}}
    whileInView={{scaleX: 1}}
    viewport={{once: true}}
    transition={{type: "tween", duration: duration, delay: delay}}
    >
    {children}
   </motion.div>
  )
}

export default ScaleX
