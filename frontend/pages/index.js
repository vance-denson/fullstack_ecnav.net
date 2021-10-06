import { NextSeo } from 'next-seo';
import HomeCTA from '../components/HomeCTA';
import ContactForm from '../components/homePage/ContactForm';
import DevelopmentSkills from '../components/homePage/DevelopmentSkills';
import WorkExperience from '../components/homePage/WorkExperience';
import SiteFeatures from '../components/homePage/SiteFeatures';
import SocialFloat from '../components/UI/SocialFloat';
import StarsBackground from '../components/UI/StarsBackground';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import School from '../components/homePage/School';
import MainLayout from '../layouts/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* //SEO*/}
      <NextSeo
        title="Vance Denson | FullStAck"
        description="review comparison 2021 best reviews money technology tools sports workout baby family health restaurant food movies gardening dance"
        titleTemplate={''}
      />
      <MainLayout>
        <HomeCTA />
        <motion.div
          initial={{ rotate: 0 }}
          animate={{
            rotate: 25,
            transition: {
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 4,
            },
          }}
          className="absolute"
        >
          <Image
            width={666}
            height={650}
            alt={'home page astronaut picture'}
            src={'/FunnyMan-png_23022_md.png'}
            layout="responsive"
          />
        </motion.div>
        <div className="w-screen col-start-1 text-4xl font-bold text-money-lAccent2 ">
          <div className="bg-black p-8 rounded-r-xl bg-opacity-50 shadow-xl">
            A <span className="italic text-white ">BOSS</span> ENG Project
          </div>
        </div>
        <div className="bg-money-textLight2 dark:bg-money-dAccent1 dark:bg-opacity-70 bg-opacity-70">
          <SocialFloat double={true} />
          {/* <ContactForm /> */}
          <DevelopmentSkills />
          <SiteFeatures />
          <WorkExperience />
          <School />
        </div>
       
      </MainLayout>
    </motion.div>
  );
}
