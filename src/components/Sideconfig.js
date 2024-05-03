import React from 'react';
import {
  MdOutlineDashboard,
  MdOutlineSettings,
  MdLogout,
} from 'react-icons/md';

import { AddBusinessOutlined,AttributionOutlined,DriveEtaRounded,FollowTheSignsOutlined, GroupAddOutlined, KeyOutlined, LocalShippingOutlined, ManageAccountsOutlined, NoCrashOutlined, PeopleAltOutlined } from '@mui/icons-material';


const Menus = [
    { title: 'Dashboard', path: 'dashboard'

    ,subMenus: [{
       title: 'Dashboard',
       path:'/dashboard/dashboard',
       icon: <MdOutlineDashboard/>
    }
    ],
  },
    {
      title: 'Users',
      path: 'Users',
      icon: <FollowTheSignsOutlined />
      , subMenus: [
        {
          title: 'User',
          path: '/users/user',
          icon: <PeopleAltOutlined/>,
          cName: 'sub-nav',
        },
        {
          title: 'Permission',
          path: '/users/permission',
          icon : <KeyOutlined/>,
          cName: 'sub-nav',
        },
      ],
      isOpen: false
    },
    {
      title: 'Company',
      path: 'company',
      icon: <AddBusinessOutlined />,
      subMenus: [
        {
          title: 'Clients',
          path: '/company/clients',
          icon:<GroupAddOutlined />,
          cName: 'sub-nav',
        },
        {
          title: 'Courier',
          path: '/company/courier',
          icon: <LocalShippingOutlined/>,
          cName: 'sub-nav',
        },
        {
          title: 'Depots',
          path: '/company/depots',
          icon: <DriveEtaRounded/>,
        },
        {
          title: 'Vehicle',
          path: '/company/vehicle',
          icon : <NoCrashOutlined/>,
        },
        {
          title: 'Freight Prayers',
          path: '/company/freight prayers',
          icon:<AttributionOutlined/>,
        },
        {
          title: 'Drivers',
          icon:<ManageAccountsOutlined/>,
          path: '/company/drivers',
        },
      ],
      isOpen: false
    },
    
    { title: 'Setting', path: 'Setting', icon: <MdOutlineSettings /> },
    { title: 'Logout', path: 'Logout', icon: <MdLogout /> },
  ];

  export default Menus;