import { useEffect, useState } from 'react'
import { NavBar } from './Components'
import { Outlet, useNavigate, useLocation, useOutlet } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  enter: (dir) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeInOut" }
  },
  exit: (dir) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: "easeInOut" }
  }),
};

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentOutlet = useOutlet()

  const ROUTE_ORDER = ['/', '/about', '/skill', '/project', '/contact']

  const currentIndex = ROUTE_ORDER.indexOf(location.pathname)

  const [{ currentPath, direction, cachedOutlet }, setPathState] = useState({
    currentPath: location.pathname,
    direction: 0,
    cachedOutlet: currentOutlet,
  });

  let currentDirection = direction;
  let displayOutlet = currentOutlet;

  if (location.pathname !== currentPath) {
    const prevIndex = ROUTE_ORDER.indexOf(currentPath);
    const nextIndex = ROUTE_ORDER.indexOf(location.pathname);

    // Calculate direction instantly
    currentDirection = nextIndex > prevIndex ? 1 : -1;
    displayOutlet = currentOutlet;


    setPathState({
      currentPath: location.pathname,
      direction: currentDirection,
      cachedOutlet: currentOutlet,
    });
  } else {

    displayOutlet = cachedOutlet || currentOutlet;
  }


  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < ROUTE_ORDER.length - 1) {

        navigate(ROUTE_ORDER[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        navigate(ROUTE_ORDER[currentIndex - 1]);
      }
    },
    trackMouse: false
  });



  return (
    <>
      <div {...handlers} className='bg-[#ffffff] dark:bg-slate-800'>
       
          <NavBar />
   
        <main className="flex flex-1 flex-col dark:bg-slate-800">
          <AnimatePresence mode='popLayout' custom={direction} >
            <motion.div
              key={location.pathname}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className='w-full h-full'>
              {displayOutlet}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

    </>
  )
}

export default Layout
