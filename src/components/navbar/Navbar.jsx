import React, { useState } from 'react'
import './navbar.css'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { links } from '../../utils/data'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <ul className='gpt3__navbar-links_container'>
          {links.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.id}>{item.text}</a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='#'>
              <ul className='gpt3__navbar-menu_container-links'>
                {links.map((item) => {
                  return (
                    <li key={item.id}>
                      <a href={item.id}>{item.text}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

//   const [toggleMenu, setToggleMenu] = useState(false)
//   return (
//     <nav>
//       <div className='nav-center'>
//         <div className='nav-header'>
//           <img src={logo} alt='logo' />
//         </div>
//         <div className='nav-containers'>
//           <ul className='nav-containers'>
//             {links.map((item) => {
//               return (
//                 <li key={item.id}>
//                   <a href={item.url}>{item.text}</a>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>

//         <div className='nav-sign'>
//           <p>sign in</p>
//           <button className='nav-sign-button'>sign up</button>
//         </div>
//         <div className='navbar-menu'>
//           {toggleMenu ? (
//             <RiCloseLine
//               color='#fff'
//               size={27}
//               onClick={() => setToggleMenu(false)}
//             />
//           ) : (
//             <RiMenu3Line
//               color='#fff'
//               size={27}
//               onClick={() => setToggleMenu(true)}
//             />
//           )}
//           {toggleMenu && (
//             <div className='navbar-menu_container'>
//               <ul className='navbar-menu_container_links'>
//                 {links.map((item) => {
//                   return (
//                     <li key={item.id}>
//                       <a href={item.url}>{item.text}</a>
//                     </li>
//                   )
//                 })}
//               </ul>

//               <div className='navbar-menu_container--sign'>
//                 <p>Sign in</p>
//                 <button type='button'>Sign up</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   )
// }

export default Navbar
