import { useDarkMode } from "../../DarkmodeContext";

import React from 'react';

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
				<section id="contact">
					<div className="container max-sm:p-0">
						<h4 className="flex justify-center text-black items-center mx-auto p-1 pt-2 rounded-xl bg-[#E5E7EB] w-[105px] mt-[48px] mb-[16px]">
							Get in touch
						</h4>
						<p className="max-w-[576px] text-center mx-auto mb-[48px]">
							Imom Buxoriy bobomizning “Al Jome as sahih” kitobining eng
							birinchi hadisi shu hadis bilan boshlangan: “Innamal a’malu bin
							niyyati” ya’ni, “Barcha amallar niyatga bog’liq”.
						</p>
						<p className=" gap-x-2 mb-5 text-center mx-auto">
							<i class="bx bx-chat"></i>
							13muhammadamin0804@gmail.com
							<i class="bx bx-copy"></i>
						</p>
						<p className=" gap-x-2 mb-[50px] text-center mx-auto">
							<i class="bx bxs-phone-call"></i>
							+998 94 070 04 08
							<i class="bx bx-copy"></i>
						</p>
						<p className="text-center">
							You may also find me on these platforms!
						</p>
						<div className="flex mt-[48px] gap-x-2 mx-auto justify-center max-sm:mt-[48px]">
							<i class="bx bxl-github bx-sm"></i>
							<i class="bx bxl-twitter bx-sm"></i>
							<i class="bx bxl-figma bx-sm"></i>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default index;