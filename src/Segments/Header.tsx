import React from 'react';
import '../App.css';
import { FaInstagram, FaViber, FaWhatsapp } from "react-icons/fa";
const Header = () => {
    return(
            <div className="flex w-screen min-h-screen ">
                <section className={'head showcase'}>
                    <video src={'/bosnia.mp4'} muted={true} autoPlay={true} loop={true} />
                    <img src={'/vip.png'} className={'overlay'}/>
                    <div className={'text'}>
                        <h4 className={'typed-out'}>Join us on your next adventure❗️</h4>
                    </div>
                    <ul className={'social'}>
                        <li> <a href={'https://www.instagram.com/travel_agency_vip1/'}><FaInstagram size={44} color={'dodgerblue'} /></a> </li>
                        <li> <a href={'https://www.instagram.com/travel_agency_vip1/'}><FaWhatsapp size={44} color={'dodgerblue'}/></a> </li>
                        <li> <a href={'https://www.instagram.com/travel_agency_vip1/'}><FaViber size={44} color={'dodgerblue'}/></a> </li>
                    </ul>
                </section>
            </div>
    );
}
export default Header

