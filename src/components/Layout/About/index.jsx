import Rasm from "../../../assets/icons/najot.svg";
import Rasm1 from "../../../assets/images/rasm.jpg";
import { useDarkMode } from "../../DarkmodeContext";
import JS from "../../../assets/icons/iconjavascript.svg";

function index() {
   const { isDarkMode } = useDarkMode();

	return (
		<>
			<section id="about">
				<div
					style={{
						backgroundColor: isDarkMode ? "#111827" : "#F9FAFB",
						color: isDarkMode ? "#ffffff" : "#000000",
						minHeight: "100vh",
						padding: "20px",
					}}
				>
					<div className="container max-sm:p-0">
						<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px] mt-[48px] mb-[48px]">
							About
						</h4>
						<div className="wrapper flex max-lg:flex-col ">
							<div className="left max-lg:mx-auto ">
								<img
									src={Rasm1}
									alt="rasm"
									className="w-[400px] h-[480px] max-sm:w-[280px] max-sm:h-[360px]"
								/>
							</div>
							<div className="right ml-[192px] max-lg:mx-auto max-lg:pt-[40px]">
								<h2 className="text-[30px] font-semibold max-sm:text-[24px]">
									Curious about me? Here you have it:
								</h2>
								<p className="max-w-[584px] mt-6 mb-4">
									I'm a passionate, software engineer who specializes in full
									stack development (Vue.js & Node.js). I am very enthusiastic
									about bringing the technical and visual aspects of digital
									products to life. User experience, pixel perfect design, and
									writing clear, readable, highly performant code matters to me.
								</p>
								<p className="max-w-[584px] mb-4">
									I began my journey as a web developer in 2015, and since then,
									I've continued to grow and evolve as a developer, taking on
									new challenges and learning the latest technologies along the
									way. Now, in my early thirties, 7 years after starting my web
									development journey, I'm building cutting-edge web
									applications using modern technologies such as Next.js,
									TypeScript, Nestjs, Tailwindcss, Supabase and much more.
								</p>
								<p className="max-w-[584px] mb-4">
									I am very much a progressive thinker and enjoy working on
									products end to end, from ideation all the way to development.
								</p>
								<p className="max-w-[584px] mb-4">
									When I'm not in full-on developer mode, you can find me
									hovering around on twitter or on indie hacker, witnessing the
									journey of early startups or enjoying some free time. You can
									follow me on Linked where I share tech-related bites and build
									in public, or you can follow me on GitHub.
								</p>
								<p className="mb-4">Finally, some quick bits about me.</p>
								<ul className="flex gap-x-[10px] mb-4">
									<div>
										<li>
											<i class="bx bx-radio-circle-marked"></i>B.E. in Computer
											Engineering
										</li>
										<li>
											<i class="bx bx-radio-circle-marked"></i>Full time coding
										</li>
									</div>
									<div>
										<li>
											<i class="bx bx-radio-circle-marked"></i>Leadership
										</li>
										<li>
											<i class="bx bx-radio-circle-marked"></i>Project managment
										</li>
									</div>
								</ul>
								<p>
									One last thing, I'm available for freelance work, so feel free
									to reach out and say hello! I promise I don't bite 😉
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="skills">
				<div
					style={{
						backgroundColor: isDarkMode ? "#030712" : "#F9FAFB",
						color: isDarkMode ? "#ffffff" : "#000000",
						minHeight: "100vh",
						padding: "20px",
					}}
				>
					<div className="container  max-sm:p-0">
						<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px] mt-[96px] mb-[48px]">
							Skills
						</h4>
						<h5 className="text-[20px] font-normal flex justify-center mb-12 max-sm:mx-auto">
							Here is a quick summary of my most recent experiences:
						</h5>
						<div className="wrapper max-sm:flex max-sm:gap-x-[48px] max-sm:ml-[48px]">
							<div className="up flex justify-between items-center max-sm:flex-col max-sm:justify-center max-sm:items-start">
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
							</div>
							<div className="down flex justify-between items-center mt-12 max-sm:flex-col max-sm:justify-center max-sm:items-start max-sm:mt-0">
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
								<div className="card w-[88px] h-[100px] flex-col justify-center">
									<img src={JS} alt="JS" className="pl-2 mb-2" />
									<p className="text-[18px] font-normal">Javascript</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="experience bg-[#F9FAFB]">
				<div
					style={{
						backgroundColor: isDarkMode ? "#111827" : "#F9FAFB",
						color: isDarkMode ? "#ffffff" : "#000000",
						minHeight: "100vh",
						padding: "20px",
					}}
				>
					<div className="container max-sm:p-0">
						<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px] mt-[96px] mb-[48px]">
							Experience
						</h4>
						<h5 className="text-[20px] font-normal flex justify-center mb-12  max-sm:max-w-[576px]">
							Here is a quick summary of my most recent experiences:
						</h5>
						<div className=" flex-col justify-between items-start">
							<div className="card w-[896px] h-[288px] p-[32px] flex justify-between items-center border border-[#1F2937] mx-auto rounded-xl mb-12 max-lg:w-[668px] max-sm:w-[343px] max-sm: flex-col">
								<div className="flex justify-between gap-x-12 items-start  max-sm:w-[343px] max-sm:flex-col ">
									<img src={Rasm} alt="rasm" className="max-sm:mx-auto" />
									<div>
										<h4 className="text-[20px] font-bold  max-sm:mx-auto  max-sm:ml-8  max-sm:mb-2">
											Student at Najot ta'lim
										</h4>
										<p className="max-w-[384px] h-[48px] max-sm:ml-8">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit..
										</p>
										<p className="max-w-[384px]  h-[48px] max-sm:ml-8">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</p>
										<p className=" h-[24px]  max-sm:ml-8">
											Sed quis justo ac magna.
										</p>
										<p className="max-w-[384px]  h-[48px] max-sm:ml-8">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</p>
									</div>
									<p className=" max-sm:hidden">May 2023 - Present</p>
								</div>
							</div>
							<div className="card w-[896px] h-[288px] p-[32px] flex justify-between items-center border border-[#1F2937] mx-auto rounded-xl mb-12 max-lg:w-[668px] max-sm:w-[343px] max-sm: flex-col">
								<div className="flex justify-between gap-x-12 items-start max-sm:w-[343px] max-sm:flex-col">
									<img src={Rasm} alt="rasm" className="max-sm:mx-auto" />
									<div>
										<h4 className="text-[20px] font-bold  max-sm:mx-auto  max-sm:ml-8  max-sm:mb-2">
											Student at Najot ta'lim
										</h4>
										<p className="max-w-[384px] h-[48px] max-sm:ml-8">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit..
										</p>
										<p className="max-w-[384px]  h-[48px] max-sm:ml-8">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</p>
										<p className=" h-[24px]  max-sm:ml-8">
											Sed quis justo ac magna.
										</p>
										<p className="max-w-[384px]  h-[48px] max-sm:ml-8">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</p>
									</div>
									<p className=" max-sm:hidden">May 2023 - Present</p>
								</div>
							</div>
							<div className="card w-[896px] h-[288px] p-[32px] flex justify-between items-center border border-[#1F2937] mx-auto rounded-xl mb-12 max-lg:w-[668px] max-sm:w-[343px] max-sm: flex-col">
								<div className="flex justify-between gap-x-12 items-start max-sm:w-[343px] max-sm:flex-col">
									<img src={Rasm} alt="rasm" className="max-sm:mx-auto" />
									<div>
										<h4 className="text-[20px] font-bold  max-sm:mx-auto  max-sm:ml-8  max-sm:mb-2">
											Student at Najot ta'lim
										</h4>
										<p className="max-w-[384px] h-[48px] max-sm:ml-8">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit..
										</p>
										<p className="max-w-[384px]  h-[48px] max-sm:ml-8">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</p>
										<p className=" h-[24px]  max-sm:ml-8">
											Sed quis justo ac magna.
										</p>
										<p className="max-w-[384px]  h-[48px] max-sm:ml-8">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</p>
									</div>
									<p className=" max-sm:hidden">May 2023 - Present</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default index;