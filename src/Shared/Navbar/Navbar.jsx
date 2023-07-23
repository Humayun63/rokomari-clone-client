import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rokomari_logo from '../../../public/rokomari_logo.png'
import cart from '../../../public/cart.png'
import {  } from 'react-icons/fa';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center py-5 container mx-auto md:px-20'>
                <img className='w-32' src={rokomari_logo} alt="Logo of rokomari.com" />
                <form className='md:flex rounded-md hidden max-w-2xl'>
                    <select className='p-2 border-l border-t rounded-l border-gray-200 border-b-2 border-b-orange-400 focus:border-b-1 focus:border-gray-200 focus:text-sky-500 focus:bg-sky-50 outline-none' name="" id="">
                        <option value="all">All</option>
                        <option value="book">Book</option>
                        <option value="superStore">Superstore</option>
                    </select>
                    <input type="text" className='  border border-gray-200 border-b-2 border-b-orange-400  outline-0 focus:border focus:border-sky-500 p-2 w-[545px]' />
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
            <form className='md:hidden rounded-sm overflow-hidden flex max-w-lg mx-auto'>
                    <select className='p-2 border-l border-t border-gray-200 border-b-2 border-b-orange-400 focus:border-b-1 focus:border-gray-200 focus:text-sky-500 focus:bg-sky-50 outline-none' name="" id="">
                        <option value="all">All</option>
                        <option value="book">Book</option>
                        <option value="superStore">Superstore</option>
                    </select>
                    <input type="text" className='  border border-gray-200 border-b-2 border-b-orange-400  outline-0 focus:border focus:border-sky-500 p-2 w-[545px]' />
                    <button className=' px-3 bg-sky-500 border-2 border-sky-500'><FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} /></button>
                </form>
            </div>
        </div>
    );
};

export default Navbar;