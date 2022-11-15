import React from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';




function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3> Devashish Programmer</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__ChannelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Test channels</h4>
          </div>

          <AddIcon className="sidebar__addChannel" />

        </div>

        <div className="sidebar__addchannelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon 
          className="sidebar__voiceIcon"
          fontSize= "large" 
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoIcon/>
          <CallIcon/>
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src="https://i.scdn.co/image/ab6761610000e5eb81d95d00e31d425ae9f82a78" />
        <div className="sidebar__profileInfo">
          <h3>@dev1102</h3>
          <p>#thisIsMyID</p>
        </div>
        <div className="sidebar__profileIcons">
        <MicIcon />
        <HeadphonesIcon />
        <SettingsIcon />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
