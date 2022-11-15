import React from 'react'
import "./ChatHeader.css";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

function ChatHeader() {
    return (
        <div className='chatHeader'>
            <div className="chatHeader__left">
                <h3>
                    <span className='chatHeader__hash'>#</span>
                    Test Channel Name
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsActiveIcon />
                <LocationOnIcon />
                <PeopleAltIcon />

                <div className="chatHeader__search">
                    <input placeholder="Search" />
                    <SearchIcon />
                </div>

                <SendIcon />
                <HelpIcon />

            </div>
        </div>
    )
}

export default ChatHeader
