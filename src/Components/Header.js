import React from 'react';
import './Styles/Header.css';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';
import ShopRoundedIcon from '@material-ui/icons/ShopRounded';
import ShopTwoRoundedIcon from '@material-ui/icons/ShopTwoRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';


function Header() {
    return (
        <div className="header">

            <div className="header_icons">

                    <div className="header_icon --active" >
                    <HomeRoundedIcon/>
                    <p>home</p>
                    </div>

                    <div className="header_icon" >
                    <FlashOnRoundedIcon/>
                    <p>Trending</p>
                    </div>

                    <div className="header_icon" >
                        <ShopRoundedIcon/>
                        <p>Verified</p>
                    </div>

                    <div className="header_icon" >
                    <ShopTwoRoundedIcon/>
                    <p>Collection</p>
                    </div>
                    
                    <div className="header_icon" >
                    <SearchRoundedIcon/>
                    <p>Search</p>
                    </div>

                    <div className="header_icon" >
                    <PersonRoundedIcon/>
                    <p>Account</p>
                    </div>
                
            </div>

            <img src="/logo.png" alt="" />

        </div>
    )
}

export default Header
