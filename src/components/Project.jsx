import React from 'react'
import { Carousel } from './ui/carousel'
import { ProjectsItems } from '../constant/data'

//motion
import { motion } from 'motion/react'
import { fadeIn, fadeInUP, staggerContainer } from '../motion/animation'

const Project = () => {
  return (
    <section className='section' id='projects'>
        <motion.div variants={staggerContainer} 
                initial='hidden'
                whileInView='show' 
                viewport={{once:true}} className="container">
            {/* title */}
            <motion.h2 className='text-center'>Recent Project</motion.h2>
            {/* card wrapper */}
            <motion.div variants={fadeIn} className='relative overflow-hidden w-full h-full py-20'>
              
                <Carousel  slides={ProjectsItems} />
               
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Project