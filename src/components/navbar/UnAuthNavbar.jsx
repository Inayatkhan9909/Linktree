import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../svgs/logo.svg';

const UnAuthNavbar = () => {
    const [isDiscoverDropdownOpen, setIsDiscoverDropdownOpen] = useState(false);
    const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);

    return (
        <nav className='w-11/12 bg-white rounded-full text-black p-4 flex items-center justify-between'>
            <div className='flex items-center gap-12 px-2 ml-2'>
                <div>
                    <img src={logo} width={150} alt='Linktree' />
                </div>
                <ul className='flex gap-6 text-gray-600 text-lg'>
                    <li className='hover:bg-gray-200 px-4 py-2 rounded'>
                        <Link to='/'>Templates</Link>
                    </li>
                    <li className='hover:bg-gray-200 px-4 py-2 rounded'>
                        <Link to='/'>Marketplace</Link>
                    </li>
                    <li className='relative hover:bg-gray-200 px-4 py-2 rounded'
                        onMouseEnter={() => setIsDiscoverDropdownOpen(true)}
                        onMouseLeave={() => setIsDiscoverDropdownOpen(false)}

                    >
                        <Link to='/' >Discover</Link>
                        {isDiscoverDropdownOpen && (
                            <div className='absolute top-full left-0 bg-transparent'>
                            <div className='w-64 p-4 flex flex-col text-left gap-2 mt-10 bg-white shadow-md rounded-2xl'>

                                <Link className='hover:bg-gray-200 p-2 rounded'>Linktree for Instagram</Link>
                                <Link className='hover:bg-gray-200 p-2 rounded'>Linktree for Tiktok</Link>
                                <Link className='hover:bg-gray-200 p-2 rounded'>Linktree for Twitter</Link>
                                <Link className='hover:bg-gray-200 p-2 rounded'>Linktree for Linkedin</Link>
                            </div>
                            </div>
                        )}
                    </li>
                    <li className='hover:bg-gray-200 px-4 py-2 rounded'>
                        <Link to='/'>Pricing</Link>
                    </li>
                    <li className='relative hover:bg-gray-200 px-4 py-2 rounded'
                        onMouseEnter={() => setIsLearnDropdownOpen(true)}
                        onMouseLeave={() => setIsLearnDropdownOpen(false)}
                    >
                        <Link to='/' >Learn</Link>
                        {isLearnDropdownOpen && (
                            <div className='absolute top-full left-0 bg-transparent'>
                                <div className='w-64 p-4 flex flex-col text-left gap-2 mt-10  bg-white shadow-md rounded-2xl'>

                                    <Link className='hover:bg-gray-200 p-2 rounded'>The 2023 Creator Report</Link>
                                    <Link className='hover:bg-gray-200 p-2 rounded'>The Articles</Link>
                                    <Link className='hover:bg-gray-200 p-2 rounded'>Creators</Link>
                                    <Link className='hover:bg-gray-200 p-2 rounded'>Trends</Link>
                                    <Link className='hover:bg-gray-200 p-2 rounded'>Best Practices</Link>
                                    <Link className='hover:bg-gray-200 p-2 rounded'>Company</Link>
                                    <Link className='hover:bg-gray-200 p-2 rounded'>Product News</Link>
                                    <Link className='hover:bg-gray-200 p-2 rounded'>Help</Link>

                                </div>
                            </div>
                        )}
                    </li>

                </ul>
            </div>
            <div className='flex items-center gap-4 text-lg'>
                <button className='bg-gray-200 text-black px-6 py-4 rounded hover:shadow-md'>Log in</button>
                <button className='bg-black text-white px-6 py-4 rounded-3xl hover:opacity-80'>Sign up free</button>
            </div>
        </nav>
    );
};

export default UnAuthNavbar;
