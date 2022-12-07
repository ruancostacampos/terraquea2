import {motion} from "framer-motion"

type Props = {
  children: JSX.Element,
  invert?: boolean,
  duration: number,
  delay: number
}

const AnimatedJoin = ({children, invert, duration, delay} : Props) => {
    
   var initial = -30;
   
   if(invert === true){
     initial = initial * (-1)
   }

  return ( 
    <motion.div
    initial={{x: initial, opacity: 0}}
    whileInView={{x: 0, opacity: 1}}
    viewport={{once: true}}
    transition={{type: "tween", duration: duration, delay: delay}}
    >
    {children}
   </motion.div>
  )
}

export default AnimatedJoin

