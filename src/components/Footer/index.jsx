import { useDarkMode } from "../DarkmodeContext";
import "./style.scss";

const index = () => {
    const { isDarkMode } = useDarkMode();
	return (
		<footer>
			<div
				style={{
					backgroundColor: isDarkMode ? "#111827" : "#F9FAFB",
					color: isDarkMode ? "#ffffff" : "#000000",
					height: "100px",
					padding: "20px",
				}}
			>
				<div className="container bottom-0 flex items-center justify-center gap-x-2 h-[80px]">
					<i class="bx bxs-copyright"></i>
					<p className=" max-sm:hidden">2023 | Designed and coded with ❤️️ by NAJOT TA’LIM</p>
					<p className=" max-sm:flex">
						by NAJOT TA’LIM
					</p>
				</div>
			</div>
		</footer>
	);
};

export default index;
