import React, { useCallback } from 'react';
import {FaUserCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navigate = useNavigate()

    const LoginOrMypage = useCallback(()=> {
        navigate("/login")
    },[])

    const goMainPage = useCallback(() => {
        navigate("/")
    })

    return(
        <div>
            <div className="header">
                <div className='logo'>

                </div>
                <div className='title' onClick={goMainPage}>
                    페스타존 
                </div>
                <div className='userIcon' onClick={LoginOrMypage}>
                    <FaUserCircle />
                </div>
                
            </div>
            
        </div>
    );
}

export default Header;
