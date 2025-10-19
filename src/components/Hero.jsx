import React from 'react'
import { heroIcons } from '../constant/data'
import Button from './Button'
import { BackgroundGradient } from './ui/BackgroundGradient'

//motion
import { motion } from 'motion/react'
import { fadeIn, fadeInUP, staggerContainer } from '../motion/animation'

const Hero = () => {
  return (
    <section className='py-28 lg:pt-40' id='home'>
        <motion.div variants={staggerContainer} 
        initial='hidden'
        whileInView='show' 
        viewport={{once:true}}
        className="container flex flex-col items-center">
          
{/* IMAGE SECTION */}
<motion.div variants={fadeIn}>
<BackgroundGradient className="relative flex items-center justify-center w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-zinc-900 p-[3px]">
  <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-[#0b0c10]">
    <img
      src="images/hero.png"
      alt="Sujan Tamang"
      className="w-full h-full object-cover object-center scale-105"
    />
  </div>

  {/* Optional soft glow */}
  <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl -z-10"></div>
</BackgroundGradient>
</motion.div>



            {/* content */}
            
           <div className='text-center mt-8 '>
            <motion.h1 variants={fadeInUP} className='text-3xl lg:text-5xl mb-1.5 font-bold'>Hi,I'm Sujan Tamang.</motion.h1>
            <motion.h2 variants={fadeInUP}  className='text-2xl  lg:text-4xl font-semibold;'> FullStack Developer</motion.h2>
            <motion.p variants={fadeInUP} className='max-w-[820px] mx-auto mt-4 mb-6'>I'm Sujan Tamang, a Fll Stack developer who architects seamless digital experiences through innovative code and intuitive design. With expertise in cutting-edge technologies and a passion for performance optimization, I transform complex business requirements into scalable, user-centric applications that drive meaningful engagement.
</motion.p>

<motion.div variants={fadeIn} className='flex items-center justify-center gap-5'>
  {heroIcons.map(icon=>(
     <a href="#" target='_blank' className='hover:text-indigo-400 transition-colors'>
      <icon.icon size={30} />
     </a>
  ))}


</motion.div>


{/* btn wrapper */}


<motion.div variants={fadeInUP} className="mt-10 flex items-center justify-center flex-wrap gap-5">
  <Button label="Download Cv" classes="primary-btn" icon />
  <Button label="Let's Collaborate" classes="secondary-btn" />

</motion.div>



           </div>

        </ motion.div>
    </section>
  )
}

export default Hero