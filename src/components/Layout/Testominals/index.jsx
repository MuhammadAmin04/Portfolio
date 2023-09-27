import { useDarkMode } from "../../DarkmodeContext";
import user from "../../../assets/icons/user.svg";
import AwesomeSlider from "react-awesome-slider";
import "./index.scss" 

const index = () => {
	const { isDarkMode } = useDarkMode();
	return (
		<>
			<div
				style={{
					backgroundColor: isDarkMode ? "#111827" : "#F9FAFB",
					color: isDarkMode ? "#ffffff" : "#000000",
					minHeight: "100vh",
					padding: "20px",
				}}
			>
				<AwesomeSlider
					bullets={false}
					mobileTouch={true}
					infinite={true}
					className="slider"
				>
					<section id="testominals">
						<div className="container max-sm:p-0 ">
							<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px] mt-[48px] mb-[16px]">
								Work
							</h4>
							<h5 className="text-[20px] font-medium text-center mb-[48px]">
								Nice things people have said about me:
							</h5>
							<div className="wrapper flex gap-x-12 max-lg:gap-4">
								<div className="card w-[373px] h-[428px]  border p-12 rounded-xl max-lg:w-[280px] max-lg:p-2">
									<img
										src={user}
										alt="user"
										className="flex justify-center items-center mx-auto mb-6"
									/>
									<p className="mb-6">
										Job well done! I am really impressed. He is very very good
										at what he does:) I would recommend Sagar and will rehire in
										the future for Frontend development.
									</p>
									<h2 className="text-center">Someone</h2>
									<p className="text-center">Founder of somewhere</p>
								</div>
								<div className="card w-[373px] h-[428px] border  p-12 rounded-xl  max-lg:w-[280px] max-lg:p-2">
									<img
										src={user}
										alt="user"
										className="flex justify-center items-center mx-auto mb-6"
									/>
									<p className="mb-6">
										Job well done! I am really impressed. He is very very good
										at what he does:) I would recommend Sagar and will rehire in
										the future for Frontend development.
									</p>
									<h2 className="text-center">Someone</h2>
									<p className="text-center">Founder of somewhere</p>
								</div>
								<div className="card w-[373px] h-[428px] border p-12 rounded-xl  max-lg:w-[280px] max-lg:p-2">
									<img
										src={user}
										alt="user"
										className="flex justify-center items-center mx-auto mb-6"
									/>
									<p className="mb-6">
										Job well done! I am really impressed. He is very very good
										at what he does:) I would recommend Sagar and will rehire in
										the future for Frontend development.
									</p>
									<h2 className="text-center">Someone</h2>
									<p className="text-center">Founder of somewhere</p>
								</div>
							</div>
						</div>
					</section>
				</AwesomeSlider>
			</div>
		</>
	);
};

export default index;
