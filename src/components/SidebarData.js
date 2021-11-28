import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData=[

    {
        title:"Home",
        path:"/",
        icon:<AiIcons.AiFillHome/>,
        cname:"nav-text",
    },
    
   
    {
        title: 'Account Opening',
        path: 'accounts',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
          {
            title: 'Add Head',
            path: '/accounts/head',
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: 'Add Sub Head',
            path: '/accounts/subhead',
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: 'Add Route',
            path: '/accounts/route',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
            
          },
          {
            title: 'Add Sub Route',
            path: '/accounts/subroute',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
            
          },
          {
            title: 'Add Account',
            path: '/accounts/accounts',
            icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav',
          }
        
         
        ]
      },



      {
        title: 'Inventory',
        path: '/inventory',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
      },
      {
        title: 'Transaction',
        path: 'transaction',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
          {
            title: 'Cash Transaction',
            path: '/transaction/cashtransaction',
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: 'Dual Transaction',
            path: '/transaction/dualtransaction',
            icon: <IoIcons.IoIosPaper />,
          }
          
        ]
      },
      {
        title: 'Reports',
        path: 'reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
          {
            title: 'Sell Purchase',
            path: '/reports/sellpurchase',
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: 'Transaction',
            path: '/reports/transaction',
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: 'Stock',
            path: '/reports/stock',
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: 'Credit Report',
            path: '/reports/credit',
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: 'Category Wise Sells',
            path: '/reports/cat_sells',
            icon: <IoIcons.IoIosPaper />,
          },

          
        ]
      },
      {
        title: 'Ledger',
        path: 'ledger',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
          {
            title: 'Account Ledger',
            path: '/ledger/account',
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: 'Transaction',
            path: '/ledger/transaction',
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: 'Stock',
            path: '/ledger/stock',
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: 'Credit Report',
            path: '/ledger/credit',
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: 'Category Wise Sells',
            path: '/ledger/cat_sells',
            icon: <IoIcons.IoIosPaper />,
          },

          
        ]
      },

]