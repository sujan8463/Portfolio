import React from 'react'
import { contactItems } from '../constant/data'
import { RiLinkedinBoxFill,RiGithubFill } from '@remixicon/react'

//motion
import { motion } from 'motion/react'
import { fadeIn, fadeInUP, staggerContainer } from '../motion/animation'

const Contact = () => {
  return (
    <section variants={staggerContainer} 
            initial='hidden'
            whileInView='show' 
            viewport={{once:true}} className='py-20' id='contact'>
        <motion.div className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800">
            {/* content */}
            <div className=""> 
                <motion.h2 variants={fadeInUP}> Get In Touch  </motion.h2> 
                <motion.p variants={fadeInUP}  className='mt-3.5 mb-7'>Ready to work on your next project. Let's discuss how I can help bring your ideas to life.</motion.p> 
                {/* list               */}
                <motion.ul variants={fadeInUP} >
                    {contactItems.map(item=>(

                        <li key={item.id} className='flex items-center gap-1.5 '>
                            <p className='text-white font-semibold'>{item.label}</p>
                            <a href="#">{item.link}</a>
                        </li>
                    )) }
                </motion.ul>
                        {/* social profiles  */}

                        <motion.div variants={fadeIn} className="flex items-center gap-2 mt-6 ">
                            <button className='hover:text-neutral-300 transition-colors'>
                                <RiLinkedinBoxFill size={30}/>
                            </button>
                              <button className='hover:text-neutral-300 transition-colors'>
                                <RiGithubFill size={30}/>
                            </button>
                        </motion.div>


                   </div>
                {/* form */}
                <motion.form variants={fadeIn} action="" className='grid gap-5'>
                    {/* input field  */}
                    <div className='grid gap-2'>
                        <label htmlFor="name">Name*</label>
                        <input type="text" placeholder='Your Name' className='input' required />
                    </div>{/* input field  */}
                    <div className='grid gap-2'>
                        <label htmlFor="email">Email*</label>
                        <input type="email" placeholder='Your Email' className='input' required />
                    </div>

                    {/* textarea  */}

                    <div className='grid gap-2'>
                            <label htmlFor="message">Message*</label>
                            <textarea name="" id="message" placeholder='Message' className='h-40 border-neutral-800 indent-4 py-2 resize-none' required />

                    </div>

                 <a href="https://forms.gle/UD429gGaTEGBGkF46" target='_blank'><button className="primary-btn max-w-max">Send Message</button></a>

                </motion.form>        
        </motion.div>
    </section>
  )
}

export default Contact