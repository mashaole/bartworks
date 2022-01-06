import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navTitles = [
	{id: 1, title: 'Home', route: '/'},
	{id: 2, title: 'Artworks', route: '/artworks'},
	{id: 2, title: 'Clothing', route: '/clothing'},
	{id: 2, title: 'Artist', route: '/artist'},
	{id: 2, title: 'Exhibitions', route: '/exhibitions'},
	{id: 2, title: 'Contact Us', route: '/contact'}
  ];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
				B Artworks.
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
			{navTitles.map((item,key)=>
               { return(                
				   <li className="nav-item" key={key}>
					<Link to={item.route} className="nav-link" key={item.id}
					onClick={closeMenu}>
						{item.title}
					</Link>
				</li>)})}
			</ul>
		</nav>
	);
};

export default Navbar;
