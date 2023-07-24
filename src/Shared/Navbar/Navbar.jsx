import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rokomari_logo from '../../../public/rokomari_logo.png'
import cart from '../../../public/cart.png'
import './Navbar.css'
import {  } from 'react-icons/fa';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';

const Navbar = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [nestedTabIndex, setNestedTabIndex] = useState(0);
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center py-5 px-4 lg:px-20'>
                <img className='w-32' src={rokomari_logo} alt="Logo of rokomari.com" />
                <form className='md:flex rounded-md hidden max-w-xl'>
                    <select className='p-2 border-l border-t rounded-l border-gray-200 border-b-2 border-b-orange-400 focus:border-b-1 focus:border-gray-200 focus:text-sky-500 focus:bg-sky-50 outline-none' name="" id="">
                        <option value="all">All</option>
                        <option value="book">Book</option>
                        <option value="superStore">Superstore</option>
                    </select>
                    <input type="text" className='border md:w-[300px] lg:w-[545px] border-gray-200 border-b-2 border-b-orange-400  outline-0 focus:border focus:border-sky-500 p-2' />
                    <button className=' px-3 bg-sky-500 border-2 border-sky-500  rounded-r'><FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} /></button>
                </form>
                <div className='flex justify-between items-center gap-7'>
                    <button>
                        <img className='w-9' src={cart} alt="" />
                    </button>
                    <button className='px-4 py-2 border border-gray-400 rounded hover:bg-green-500 hover:text-white hover:border-green-500 transition-all'>Sign In</button>
                </div>
            </div>
            <div>
            <form className='md:hidden rounded-sm overflow-hidden flex max-w-lg mx-auto px-4'>
                    <select className='p-2 border-l border-t w-20 border-gray-200 border-b-2 border-b-orange-400 focus:border-b-1 focus:border-gray-200 focus:text-sky-500 focus:bg-sky-50 outline-none' name="" id="">
                        <option value="all">All</option>
                        <option value="book">Book</option>
                        <option value="superStore">Superstore</option>
                    </select>
                    <input type="text" className='  border border-gray-200 border-b-2 border-b-orange-400  outline-0 focus:border focus:border-sky-500 p-2' />
                    <button className=' px-3 bg-sky-500 border-2 border-sky-500'><FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} /></button>
                </form>
            </div>
            <div className='mt-3'>
             <Tabs selectedTabClassName="activeTab" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList className="flex justify-center gap-5 border-b border-sky-400" >
      <Tab>বই</Tab>
      <Tab>ইলেক্ট্রনিক্স</Tab>
      <Tab>মনিহারি পণ্য</Tab>
      <Tab>কিডস জোন</Tab>
      <Tab>গিফট ফাইন্ডার</Tab>
      <Tab>প্রাতিষ্ঠানিক অর্ডার</Tab>
      <Tab>অফার সমূহ</Tab>
      <Tab>কুইজ</Tab>
      <Tab>ব্লগ</Tab>
    </TabList>
    <TabPanel>
    <Tabs selectedTabClassName="selectedTabs" className="mt-2" selectedIndex={nestedTabIndex} onSelect={(index) => setNestedTabIndex(index)}>
      <TabList className="flex gap-8 justify-center border-0 nestedTabs">
        <Tab>লেখক</Tab>
        <Tab>বিষয়</Tab>
        <Tab>প্রকাশনী</Tab>
        <Tab>ই-বুক</Tab>
        <Tab>Buy 1 Get 1 Offer</Tab>
        <Tab>স্টকের প্রোডাক্ট সমূহ</Tab>
        <Tab>লিডারবোর্ডের ২০০ বই</Tab>
        <Tab>বইমেলা ২০২৩</Tab>
      </TabList>
      <TabPanel>Lekhok</TabPanel>
      <TabPanel>Bisoy</TabPanel>
    </Tabs>
    </TabPanel>
    <TabPanel>
    <Tabs selectedTabClassName="selectedTabs" selectedIndex={nestedTabIndex} onSelect={(index) => setNestedTabIndex(index)} >
      <TabList className="flex justify-center border-0 nestedTabs">
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
             </Tabs>
            </div>
        </div>
    );
};

export default Navbar;