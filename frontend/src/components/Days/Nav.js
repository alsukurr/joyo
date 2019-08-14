import React  from 'react';

const Nav = ({ showDays, setShowDays, setShowDetails }) => {

  return (
		<div className="days__mobile">
			<nav className="days__nav" onClick={() => {
				console.log(!showDays);
				// setShowDays(!showDays);
				// setShowDetails(true);
			}}>
				<span className="days__nav__toggle"></span>
				<span className="days__nav__toggle"></span>
				<span className="days__nav__toggle"></span>
			</nav>
		</div>

  )
};

export default Nav;
