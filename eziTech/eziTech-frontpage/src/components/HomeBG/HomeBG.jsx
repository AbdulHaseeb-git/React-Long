import React, { useEffect, useState } from 'react'
import './HomeBG.css'
import HomeHeadingData from '../../data/HomeHeadingData'
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

const HomeBG = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex(prevIndex => (prevIndex + 1)% HomeHeadingData.length )
        }, 1000)

        return () => clearInterval(interval);
    }, [HomeHeadingData.length])
  return (
    <div className='homeBG'>
        <div className="top">
            <h1>Learn the fundamentals with our </h1>
            <h1 className='dynamic-heading'>Experts in <span>{HomeHeadingData[currentIndex]}</span></h1>
        </div>

        <div className="bottom">
        <p>Utilize Effective Learning to Reach Your Potential!</p>

        <form>
            <input type="text" placeholder='Search courses...' list='suggestions' />
            <datalist id="suggestions">
            <option value="Nature" />
            <option value="Teachers" />
            <option value="Engineering" />
            <option value="Travel" />
            <option value="Destination" />
            </datalist>
            <button type='submit' ><IoSearchOutline/></button>

            </form>
            <p className='explore'>Explore our more useful products <FaHeart color='white'/></p>
            <div className="homeBottomImges">
                <img src={`../images/EZIBLOGS.png`} alt="" />
                <img src={`../images/white-ezipos.png`} alt="" />
                <img src={`../images/EziCoding.png`} alt="" />

            </div>
        </div>

    </div>
  )
}

export default HomeBG
