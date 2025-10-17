import React from 'react';
import './Topbar.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Topbar = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userRoles');
        navigate('/login');
    };

    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="topbar-content">
                    <div className="topbar-left">
                        <span className='topbar-left-span'>📞 +234 805 902 7156</span>
                        <span className='topbar-right-span'>📧 info@hintcore.com.ng</span>
                        {/* {
                            token ?
                                <div className='topbar-action-buttons'>
                                    <button onClick={handleLogout} className='topbar-logout'>Logout</button>
                                    <Link to={'/user-profile'} className='topbar-login'>My Profile</Link>
                                </div> :
                                <div className='topbar-action-buttons'>
                                    <Link to={'/login'} className='topbar-login'>Login</Link>
                                    <Link to={'/sign-up'} className='topbar-sign-up'>Sign Up</Link>
                                </div>
                        } */}
                    </div>
                    <div className="topbar-right">
                        <a
                            href="https://www.facebook.com/share/15ZVSBn3xa"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><FaFacebookF /></a>
                        <a href="/"><FaTwitter /></a>
                        <a href="/"><FaInstagram /></a>
                        <a
                            href="https://wa.me/2348059027156"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;