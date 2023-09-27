// src/DarkModeToggle.js
import React from "react";
import { useDarkMode } from "../DarkmodeContext";

const DarkModeToggle = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<button onClick={toggleDarkMode}>
			{isDarkMode ? (
				<i class="bx bxs-sun ml-[30px]"></i>
			) : (
				<i class="bx bxs-moon ml-[30px]"></i>
			)}
		</button>
	);
};

export default DarkModeToggle;
