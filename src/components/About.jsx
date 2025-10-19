import React from 'react'
import { aboutItems } from '../constant/data'


//motion
import { motion } from 'motion/react'
import { fadeIn, fadeInUP, staggerContainer } from '../motion/animation'


const About = () => {
  return (
    <section className='section bg-secondary-clr' id='about'>
        <motion.div variants={staggerContainer} 
                initial='hidden'
                whileInView='show' 
                viewport={{once:true}} className="">
            <motion.h2 variants={fadeInUP} >About me</motion.h2>
            <motion.p variants={fadeInUP} className="mt-3 mb-9">
                I'm Sujan Tamang, a Fll Stack developer who architects seamless digital experiences through innovative code and intuitive design. With expertise in cutting-edge technologies and a passion for performance optimization, I transform complex business requirements into scalable, user-centric applications that drive meaningful engagement.
            </motion.p>

            {/* skills */}
            <div>
                <motion.p variants={fadeInUP} className='text-white font-semibold mb-3'>Skills:</motion.p>
                <motion.ul>
                    
                    {aboutItems.map(Item=>(
                    <li key={Item.id}>

                        <p>✅ {Item.label}</p>
                    </li>
                    ))}
                     </motion.ul>
            </div>

        </motion.div>
    </section>
  )
}

export default About