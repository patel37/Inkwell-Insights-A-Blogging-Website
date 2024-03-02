import React from 'react';
import {useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {Sidebar} from 'flowbite-react';
import { Link } from 'react-router-dom';
import {HiArrowSmRight, HiUser} from 'react-icons/hi';
//import { HiUser,HiArrowSmRight } from 'react-icons/hi';

const DashSidebar = () => {
    const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
    console.log(tabFromUrl);

  }, [location.search]);
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Link to='/dashboard?tab-profile'>
          <Sidebar.Item active={tab==='profile'} icon={HiUser} label={'User'} labelColor="dark">
            Profile
          </Sidebar.Item>
          </Link>
          <Sidebar.Item
            icon={HiArrowSmRight}
            label={'User'}
            labelColor="dark"
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
