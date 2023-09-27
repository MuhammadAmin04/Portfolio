
import React, { useState, useEffect } from "react";
import { useDarkMode } from "../../DarkmodeContext";

function TypingTextAnimation() {
	
	const { isDarkMode } = useDarkMode();
	const [text, setText] = useState("");
	const fullText = "Hi, I'm MuhammadAmin";
	const typingSpeed = 120; // Adjust the speed of typing

	useEffect(() => {
		let currentIndex = 0;
		let typingInterval;

		const startTyping = () => {


			typingInterval = setInterval(() => {
				if (currentIndex <= fullText.length) {
					setText(fullText.slice(0, currentIndex));
					currentIndex++;
				} else {
					clearInterval(typingInterval);
					currentIndex = 0;
					setText("");
					startTyping();
				}
			}, typingSpeed);
		};

		startTyping();

		return () => {
			clearInterval(typingInterval);
		};
	}, [fullText, typingSpeed]);

	return (
		<div
			style={{
				color: isDarkMode ? "#ffffff" : "#000000",
			}}
		>
			<h1 className="text-[60px] font-bold absolute max-lg:text-[54px] max-sm:text-[36px] max-sm:w-[130px] max-sm: pb-10">{text}</h1>
			
		</div>
	);
}

export default TypingTextAnimation;
