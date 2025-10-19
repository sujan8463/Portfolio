import React from 'react'
import { ResumeItems } from '../constant/data'

import { motion } from 'motion/react'
import { fadeIn, fadeInUP, staggerContainer } from '../motion/animation'

const Experience = () => {
  return (
    <section className='section' id='resume'>
        <motion.div variants={staggerContainer} 
                initial='hidden'
                whileInView='show' 
                viewport={{once:true}} className="container">
            <motion.h2>My Resume</motion.h2>
     
         {/* wrapper */}

         <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            {ResumeItems.map(item=>(
                <motion.div variants={fadeInUP} key={item.id} className='divide-y divide-neutral-800'>
                    {/* title */}
                    <h3 className='text-2xl font-semibold mt-8 pb-3'>{item.title}</h3>

                    {/* list */}
                    <div className='mt-10 space-y-8 '>
                        {item.list.map((listItem,index)=>(
                            <div key={index} className='flex items-center justify-between flex-wrap gap-6'>
                                <div>
                                    <h4 className='text-xl'>{listItem.role}</h4>
                                    <p>{listItem.label}</p>
                                </div>

                                <p  className='border border-neutral-700 p-2.5 text-white'>{listItem.time}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
         </div>


            </motion.div>
    </section>
  )
}

export default Experience