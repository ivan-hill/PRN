import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/pharmacy`}>
                  <ProgressiveImage
                    src={require("../images/registered_pharmacy_technician.png")}
                    placeholder={require("../images/compressed-image.png")}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='pharmacy tech'
                        whileHover={{ scale: 1.4 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
              
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
