// src/MainPage.js
import "./index.scss"
import Rasm from "../../../assets/images/rasm.jpg"
import React from "react";
import { useDarkMode } from "../../DarkmodeContext";
import TypingTextAnimation from "../../UI/animation";
const MainPage = () => {
	const { isDarkMode } = useDarkMode();
// #1f2937
	return (
		<div
			className="nmadir"
			style={{
				backgroundColor: isDarkMode ? "#000" : "#ffffff",
				color: isDarkMode ? "#ffffff" : "#000000",
				minHeight: "100vh",
				padding: "20px",
			}}
		>
			<div className="container max-sm:p-0">
				<div className="wrapper flex max-lg: flex-col">
					<div className="left mt-[96px] relative max-lg:mt-[380px] max-sm:mt-[380px]">
						<TypingTextAnimation className="animation" />
						<p className="w-[768px] desc text-base font-normal pt-[90px] max-sm:pt-[120px]">
							I'm a FrontEnd developer (React.js) with a focus on creating
							exceptional digital experiences that are fast, accessible,
							visually appealing, and responsive. Even though I have been
							creating web applications for over a year, I love it as if it was
							something new.
						</p>

						<div className="mt-[48px]  max-sm:mt-[48px]">
							<div className="flex gap-x-2 items-center mb-2">
								<i class="bx bxs-location-plus"></i>
								<p>Tashkent, Chilonozor</p>
							</div>
							<div className="flex gap-x-2 items-center">
								<i class="bx bx-radio-circle-marked"></i>
								<p>Available for new projects</p>
							</div>
						</div>

						<div className="flex mt-[48px] gap-x-2  max-sm:mt-[48px]">
							<i class="bx bxl-github bx-sm"></i>
							<i class="bx bxl-twitter bx-sm"></i>
							<i class="bx bxl-figma bx-sm"></i>
						</div>
					</div>

					<div className="right ml-[896px] mt-[-300px] max-lg:ml-[200px] max-lg:mt-[-700px]   max-sm:mt-[-820px] max-sm:ml-[20px]">
						<div className="box">
							<img src={Rasm} alt="rasm" className="w-[280px] h-[320px]" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
