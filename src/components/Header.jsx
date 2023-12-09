import React from 'react';
import { CgDarkMode } from "react-icons/cg";

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				<CgDarkMode size={25}/>
			</button>
		</div>
	);
};

export default Header;
