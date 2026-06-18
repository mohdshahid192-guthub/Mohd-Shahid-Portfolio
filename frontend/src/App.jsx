import { useState } from 'react'
import {  NavBar } from './Components'
import { Outlet, useNavigate, useLocation  } from'react-router-dom'
import { useSwipeable } from 'react-swipeable';
function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const ROUTE_ORDER = ['/', '/about', '/skill', '/project', '/contact']

  const currentIndex = ROUTE_ORDER.indexOf(location.pathname)

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // User swiped left -> Go to NEXT route
      if (currentIndex < ROUTE_ORDER.length - 1) {
       
        navigate(ROUTE_ORDER[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      // User swiped right -> Go to PREVIOUS route
      if (currentIndex > 0) {
        navigate(ROUTE_ORDER[currentIndex - 1]);
      }
    },
    trackMouse: false // Only trigger on mobile touch screens
  });

  const [theme, setTheme] = useState('dark')

  return (
    <>
          <div {...handlers} className='bg-[#ffffff] dark:bg-slate-800 '>
      <NavBar />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
    </div>
      
    </>
  )
}

export default Layout
