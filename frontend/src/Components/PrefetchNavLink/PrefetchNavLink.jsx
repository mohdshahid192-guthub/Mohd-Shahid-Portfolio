import React from "react";
import { NavLink } from "react-router-dom";

export default function PrefetchNavLink({to, images=[], children, ...props}){
const preloadAssets = () => {
  images.forEach((src) => {
    img = new Image()
    img.src = src;
  }) 
}

return(
  <NavLink to={to} 
          prefetch="intent"
          onMouseEnter={preloadAssets}
          onFocus={preloadAssets}
          {...props}
            className= {({isActive}) => ` duration-200 ${isActive ? 'text-orange-600 dark:text-indigo-500' : 'text-black dark:text-white'} bg-transparent hover:underline hover:text-orange-400 dark:hover:text-indigo-500 `}>
              {children}
            </NavLink>
)

}
