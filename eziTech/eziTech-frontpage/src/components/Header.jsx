import React from 'react'
import { useId } from 'react'
import './Header.css'
import socialData from '../data/socialData'
import { FaUser } from 'react-icons/fa'

const Header = () => {
  const contactLeftId = useId();
  const contactRightId = useId();
  return (
    <header className='home'>
      <div className="home-top">
        <div className="home-top-left">
          {socialData.letfContacts.map((contact , index) => (
            <div key={`${contactLeftId}${index}`} className='left-contacts'>
              <div className="left-contact">
              {contact.icon}
              <span>{contact.detail}</span>
              </div>
            </div>
          )

          )}
        </div>
        <div className="home-top-right">
          <div className='top-right-contact'>

              {socialData.rightContacts.map((contact, index)=>(
                    <div key={`${contactRightId} - ${index}`}              >
                        {contact.icon}
                    </div>

              ))}
          </div>

            <div className='account'><FaUser size={15} className='userPic'/> <span>Login</span> | <span>Register</span></div>
        </div>

      </div>
      {/* <nav className='home-nav'></nav> */}
    </header>
  )
}

export default Header
