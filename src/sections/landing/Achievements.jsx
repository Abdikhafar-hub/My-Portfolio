import { motion } from "framer-motion";
import { TypingText } from "../../components/animationtext/TypingText";
import { staggerContainer } from "../../motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import AchievementCard from "../../components/cards/AchievementCard";

const Achievements = () => {
	const achievementData = [
		{
			imgUrl: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1731480955/meta-logo_ifg3hz.webp",
			title: "Meta Certified Python Developer",
			link: "https://www.coursera.org/account/accomplishments/verify/Z6EJCQ1KAQ6E"
		},
		{
			imgUrl:"https://res.cloudinary.com/ddkkfumkl/image/upload/v1731132924/google_cybersecurity_badge_v56a8d.png",
			title: "Google Certified: Cybersecurity Specialist",
			link: "https://www.coursera.org/account/accomplishments/professional-cert/WXTKMB2VW2XT"
		},
		{
			imgUrl: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1728680315/kdf_ve3nvg.jpg",
			title: "Leadership, Command and Control",
			link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1728573961/WhatsApp_Image_2024-10-10_at_6.24.22_PM_ju6cb4.jpg"
		},
		{
			imgUrl: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1730076166/amazon_sdkjjj.png",
			title: "Amazon Certified: Security Specialty",
			link: "https://drive.google.com/file/d/1M9rb-SDKBooD91v9Lhjne2ysNZZ87zk0/view?usp=drive_link"
		},
		{
			imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1698216904/new_portfolio/azure_lmxkhu.webp",
			title: "Microsoft Certified: Azure AI Services ",
			link: "https://drive.google.com/file/d/1f90rPZ7l5ceS0XAgv2y1SsCmzAdOdERk/view?usp=drive_link"
		},
		{
			imgUrl: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1729735546/25231_z1rbyi.png",
			title: "Microsoft Certified: Github Foundations",
			link: "https://drive.google.com/file/d/1pR7qLv2fhmYW7YRqfkxj9ZLdC5_haL6l/view?usp=drive_link"
		},
		{
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1697061485/new_portfolio/gdsc_ddlz0h.webp",
			title: "Certified Software Engineer",
			link: "https://drive.google.com/file/d/1unrVKhjAoVExB14NKlDGUH3FhEgEbUG-/view?usp=drive_link",
		},
		{
			imgUrl: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1729738779/WhatsApp_Image_2024-10-24_at_4.59.44_AM-removebg-preview_ytjb5q.png",
			title: "Microsoft Certified: Fundamentals of AI",
			link: "https://drive.google.com/file/d/1fA7TfbaJovuXoji-sCvcC05KjL32NGb-/view?usp=drive_link"
		},
		{
			imgUrl: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1729739477/aws-dev-ops-hero-graphic-1_vazfms.webp",
			title: "DevOps Foundations",
			link: "https://drive.google.com/file/d/11B1yaZPgOcVfc_OA33sak8PyG7yY3Okv/view?usp=drive_link"
		},
		{
			imgUrl: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1728679743/cover_ofwonz.png",
			title: "Certified Javascript Developer",
			link: "https://drive.google.com/file/d/152avgY7nFEG91g2maoUsFzK4-ufInxcG/view?usp=drive_link"
		},
		{
			imgUrl: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1729739118/micro-removebg-preview_tyaecs.png",
			title: "Microsoft Certified: Machine Learning",
			link: "https://drive.google.com/file/d/1fAiMbK6WdJNsJFFNip-fMT3k_ryhKdge/view?usp=drive_link"
		},
		{
			imgUrl: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1728680315/kdf_ve3nvg.jpg",
			title: "Leadership, Command and Control",
			link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1728573961/WhatsApp_Image_2024-10-10_at_6.24.22_PM_ju6cb4.jpg"
		},
		{
			imgUrl: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1728575995/12197372_cio22m.png",
			title: "Incident Management Systems",
			link: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1728573925/WhatsApp_Image_2024-10-10_at_6.24.22_PM_1_hz3lu1.jpg"
		},		  
		{
			imgUrl:
				"https://res.cloudinary.com/ddkkfumkl/image/upload/v1729738549/rct-removebg-preview_1_qsjgou.png",
			title: "React Developer",
			link: "https://drive.google.com/file/d/1w2XApIBofSABUmLAqHXCqYKiWSx3swgF/view?usp=drive_link",
		},
		
	];

	return (
		<motion.div
			id="achievements"
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.1 }}
			className="pt-12 flex flex-col ms-auto me-auto w-[95%] md:w-full z-10 text-slate-200"
		>
			<div className="flex flex-col justify-center items-center font-medium">
				<TypingText
					title="| Achievements"
					textStyles="text-4xl mb-4 font-semibold"
				/>

				<Swiper
					slidesPerView={1}
					spaceBetween={40}
					breakpoints={{
						601: { slidesPerView: 2 },
						1025: { slidesPerView: 3 },
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Autoplay]}
					autoplay={{
						delay: 2000, // Adjusted delay time (2 seconds)
						disableOnInteraction: false, // Keeps autoplay running even after interaction
					}}
					speed={10} // Adjusted transition speed (0.8 seconds)
					className=" w-[80%] mySwiper"
				>
					{achievementData.map((achievement, index) => (
						<SwiperSlide key={`achievement-${index}`} className="pt-6 px-6">
							<AchievementCard {...achievement} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</motion.div>
	);
};

export default Achievements;
