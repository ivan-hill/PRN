import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

//Components
import ScrollForMore from "../components/scrollForMore";
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.25, ...transition },
              }}
              className='details'>
              <div className='location'>
                <span>Certified Pharmacy Technician </span>
               </div>
              <div className='mua'>email: @ihill.tech</div>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>S</motion.span>
                
                
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>N</motion.span>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>D</motion.span>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>D</motion.span>    
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.25, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("../images/registered_pharmacy_technician.png")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -1200 : -600,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
            General Job Description & <br /> what it means.
            </h2>
            <p>
            The pharmacy technician will begin their day by getting the pharmacy ready for business.<br /><br /> This includes turning on equipment such as computers, scales, printers and fax machines. They must also sterilize the counter tops, scales, pill counting trays, and other medication measuring devices.
            </p>
            <p>
            The main role of the pharmacy technician is processing prescriptions. They greet the patient and accept their prescription. Next, they input the prescription date into the computer and process the patient‘s insurance. The pharmacy technician will then fill the prescription and prepare it to be sold to the patient.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
