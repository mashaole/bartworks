import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navTitles = [
	{ id: 2, title: 'Artworks', route: '/artworks' },
	{ id: 3, title: 'Clothing', route: '/clothing' },
	{ id: 4, title: 'Artist', route: '/artist' },
	{ id: 5, title: 'Exhibitions', route: '/exhibitions' },
	{ id: 7, title: 'About Us', route: '/about' },
	{ id: 6, title: 'Contact Us', route: '/contact' },
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
			<Link to="/" className="nav-logo" onClick={closeMenu}>
				B Artworks
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				{navTitles.map((item, key) => {
					return (
						<li className="nav-item" key={key}>
							<a className="nav-link" href={item.route}>
								{item.title}
							</a>
						</li>)
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
