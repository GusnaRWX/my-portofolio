/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react'
import { motion, useCycle } from 'framer-motion'
import MenuToggle from './MenuToggle'

const navbar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: `circle(30px at 40px 40px)`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

const variantsParent = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 1 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variantsChildren = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const useDimension = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
}


function Nav() {
  const [isOpen, setIsopen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimension(containerRef)
  return (
    <div className='nav-wrapper'>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        ref={containerRef}
        custom={height}
        className='nav'
      >

        <motion.div className='background' variants={navbar}>
          <motion.div
            variants={variantsParent}
            className='wrapper'
          >
            <motion.div
              variants={variantsChildren}
              whileHover={{ scale: 1.2 }}
              className='menu-nav'
            >
              <p>Home</p>
            </motion.div>
            <motion.div
              variants={variantsChildren}
              whileHover={{ scale: 1.2 }}
              className='menu-nav'
            >
              <p>About Me</p>
            </motion.div>
            <motion.div
              variants={variantsChildren}
              whileHover={{ scale: 1.2 }}
              className='menu-nav'
            >
              <p>Skills</p>
            </motion.div>
            <motion.div
              variants={variantsChildren}
              whileHover={{ scale: 1.2 }}
              className='menu-nav'
            >
              <p>CV</p>
            </motion.div>
          </motion.div>
        </motion.div>
        <MenuToggle toggle={() => setIsopen()} />
      </motion.nav>
    </div>
  )
}

export default Nav
