import "./style.scss";
import { useDarkMode } from "../DarkmodeContext";
import DarkModeToggle from "../DarkmodeToggle";
import React, { useState } from "react";

const index = () => {
	const { isDarkMode } = useDarkMode();
	 const [isMenuOpen, setIsMenuOpen] = useState(false);
	 const toggleMenu = () => {
			setIsMenuOpen(!isMenuOpen);
		};
	return (
		<header
			className="nmadir"
			style={{
				backgroundColor: isDarkMode ? "#000" : "#ffffff",
				color: isDarkMode ? "#ffffff" : "#000000",
				height: "68px",
				padding: "16px",
			}}
		>
			<div className="container max-sm:p-0">
				<div className="header__wrapper flex items-center justify-between">
					<div className="logo">
						<h1 className="text-[35px]">TMF</h1>
					</div>
					<div className="header__list flex gap-x-6 ">
						<div className="toggle-menu">
							<button onClick={toggleMenu}>
								<i className="bx bx-menu hidden"></i>
							</button>
						</div>
						<ul className="flex gap-x-[24px] ul1">
							<a href="#about" className=" hover:underline">
								About
							</a>
							<a href="#work" className=" hover:underline">
								Work
							</a>
							<a href="#testominals" className=" hover:underline">
								Testominals
							</a>
							<a href="#contact" className=" hover:underline">
								Contact
							</a>
						</ul>
						<ul className="flex gap-x-4 ul2">
							<li className=" border-l  hover:underline">
								<DarkModeToggle />
							</li>
							<li>
								<button className=" hover:underline bg-[#111827] text-white px-2 rounded">
									Download CV
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default index;
