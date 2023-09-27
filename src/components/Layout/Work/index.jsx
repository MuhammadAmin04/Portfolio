
import { Link } from "react-router-dom";
import { useDarkMode } from "../../DarkmodeContext";
import rasm1 from "../../../assets/images/flower.png";
import rasm2 from "../../../assets/images/yurist.png";
import rasm3 from "../../../assets/images/Ebook.png";

const index = () => {
   const { isDarkMode } = useDarkMode();
  return (
		<>
			<div
				style={{
					backgroundColor: isDarkMode ? "#030712" : "#F9FAFB",
					color: isDarkMode ? "#ffffff" : "#000000",
					minHeight: "100vh",
					padding: "20px",
				}}
			>
				<section id="work">
					<div className="container max-sm:p-0">
						<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px] mt-[48px] mb-[16px]">
							Work
						</h4>
						<h5 className="text-[20px] font-medium text-center mb-[48px]">
							Some of the noteworthy projects I have built:
						</h5>
						<div className="wrapper">
							<div className="card flex gap-x-12 mb-12 max-lg:gap-x-6 max-sm:flex-col">
								<img
									src={rasm1}
									alt="rasm1"
									className="w-[480px] h-[384px] max-lg:w-[320px] max-lg:h-[244px]"
								/>
								<div className="right w-[576px]">
									<h2 className="text-[20px] font-bold mb-6 max-lg:mb-2">
										Flowers.uz
									</h2>
									<p className=" mb-6  max-lg:mb-2 max-w-[480px] max-lg:w-[320px]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Maecenas nec urna ac tellus volutpat viverra. Vestibulum
										ante ipsum primis in faucibus orci luctus et ultrices
										posuere cubilia curae.
									</p>
									<div className="flex gap-x-5 mb-6  max-lg:mb-2  max-lg:flex-wrap max-sm:flex-wrap max-sm:max-w-[300px] max-sm:gap-x-1">
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:w-[45px] max-sm:text-[12px]">
											React.js
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Javascript
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Tailwind
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Sass/css
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Figma
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Git
										</h4>
									</div>
									<Link
										to="https://admirable-starlight-802198.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button>
											<i class="bx bx-link-external"></i>
										</button>
									</Link>
								</div>
							</div>
							<div className="card flex gap-x-12 mb-12 max-lg:gap-x-6 max-sm:flex-col">
								<img
									src={rasm2}
									alt="rasm1"
									className="w-[480px] h-[384px] max-lg:w-[320px] max-lg:h-[244px]"
								/>
								<div className="right w-[576px]">
									<h2 className="text-[20px] font-bold mb-6 max-lg:mb-2">
										Yurist.uz
									</h2>
									<p className=" mb-6  max-lg:mb-2 max-w-[480px] max-lg:w-[320px]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Maecenas nec urna ac tellus volutpat viverra. Vestibulum
										ante ipsum primis in faucibus orci luctus et ultrices
										posuere cubilia curae.
									</p>
									<div className="flex gap-x-5 mb-6  max-lg:mb-2  max-lg:flex-wrap max-sm:flex-wrap max-sm:max-w-[300px] max-sm:gap-x-1">
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:w-[45px] max-sm:text-[12px]">
											React.js
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Javascript
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Tailwind
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Sass/css
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Figma
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Git
										</h4>
									</div>
									<Link
										to="https://glittering-seahorse-cdee57.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button>
											<i class="bx bx-link-external"></i>
										</button>
									</Link>
								</div>
							</div>
							<div className="card flex gap-x-12 mb-12 max-lg:gap-x-6 max-sm:flex-col">
								<img
									src={rasm3}
									alt="rasm1"
									className="w-[480px] h-[384px] max-lg:w-[320px] max-lg:h-[244px]"
								/>
								<div className="right w-[576px]">
									<h2 className="text-[20px] font-bold mb-6 max-lg:mb-2">
										E-books.uz
									</h2>
									<p className=" mb-6  max-lg:mb-2 max-w-[480px] max-lg:w-[320px]">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Maecenas nec urna ac tellus volutpat viverra. Vestibulum
										ante ipsum primis in faucibus orci luctus et ultrices
										posuere cubilia curae.
									</p>
									<div className="flex gap-x-5 mb-6  max-lg:mb-2  max-lg:flex-wrap max-sm:flex-wrap max-sm:max-w-[300px] max-sm:gap-x-1">
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:w-[45px] max-sm:text-[12px]">
											React.js
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Javascript
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Tailwind
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Sass/css
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Figma
										</h4>
										<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px]  max-lg:w-[65px] max-sm:text-[12px]">
											Git
										</h4>
									</div>
									<Link
										to="https://6509fa6f34ff5b3aa28cb841--hilarious-puppy-7f3f2f.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button>
											<i class="bx bx-link-external"></i>
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default index;