import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className='socialLinks'>
      <RiInstagramFill className='socialLink'/>
      <FaDiscord className='socialLink'/>
      <FaYoutube className='socialLink'/>
    </div>
  )
}

export default SocialLinks
