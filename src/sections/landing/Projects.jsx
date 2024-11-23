import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText } from "../../components/animationtext/TypingText";
import ProjectCard from "../../components/cards/ProjectCard";
import { staggerContainer } from "../../motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
// import testimg from "../assets/testimg.png";
import { Link } from "react-router-dom";

const Projects = () => {
	const projectData = [
		{
			id: "proj-1",
			imgUrl:
				"https://res.cloudinary.com/ddkkfumkl/image/upload/v1730918049/DALL_E_2024-11-06_21.32.58_-_A_high-tech_pharmaceutical_company_headquarters_with_glass_facades_modern_design_and_greenery_featuring_details_of_drug_research_and_development._I_cv562a.webp",
			title: "Biogex Pharma LTD",
			desc: "A trusted distributor of high-quality,approved pharmaceuticals and medical supplies to healthcare providers, pharmacies, and hospitals.",
			github: "https://github.com/Abdikhafar-hub/BioGex-Pharma",
			live: "https://www.biogexpharma.com/",
			tech: ["React.js,", "NextJs,", "NodeJs"],
			videoExp: "",
		},

		{
			id: "proj-2",
			imgUrl:
				"https://res.cloudinary.com/ddkkfumkl/image/upload/v1729350277/natanael-melchor-43LwvC-eQPM-unsplash_jd1d52.jpg",
			title: "Hospital Management System",
			desc: "Software solution designed to manage all aspects of hospital operations. It streamlines processes such as patient registration, appointment scheduling, medical record management, billing, and inventory tracking. ",
			github: "https://github.com/Abdikhafar-hub/Royal-Imperial-Hospital",
			live: "https://royal-imperial-hospital.vercel.app/",
			tech: ["React.js,", "SQLAlchemy,", "Flask"],
			videoExp: "https://drive.google.com/file/d/1B4dB_51ir7G9beXeFua8mAkxkda6634k/view?usp=drive_link",
		},
		{
			id: "proj-3",
			imgUrl:
				"https://res.cloudinary.com/ddkkfumkl/image/upload/v1729369112/DALL_E_2024-10-19_23.17.57_-_A_luxurious_real_estate_mansion_labeled_A.khafar_prominently_displayed_at_the_entrance._The_mansion_features_grand_modern_architecture_with_large_g_kzmd6q.webp",
			title: "Real Estate App",
			desc: "Designed to connect prospective homeowners, tenants, and real estate professionals with their perfect housing solutions.. ",
			github: "https://github.com/Abdikhafar-hub/A.khafar-homes",
			live: "https://a-khafar-homes.vercel.app/",
			tech: ["React.js,", "Firebase,", "TailwindCSS"],
			videoExp: "",
		},
	
		{
			id: "proj-4",
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1703148140/new_portfolio/makifoods_evlwgs.webp",
			title: "A.khafar Foods",
			desc: "HTML,CSS and Javascript practice project. A simple meals website with a responsive design and a mobile-first approach.",
			github: "https://github.com/Abdikhafar-hub/A.khafar-Foods",
			live: "https://a-khafar-foods.vercel.app/",
			tech: ["HTML,", "CSS,", "Javascript"],
			videoExp: "",
		},
		
		{
			id: "proj-5",
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1703109021/new_portfolio/movie_dwo2xb.webp",
			title: "Movie Mania",
			desc: "A movie app utilizing the TMDB API to fetch movie data and provides a user-friendly interface for users to browse and explore various movies.",
			github: "https://github.com/Abdikhafar-hub/Movie-Mania",
			live: "https://movie-mania-dbvu66ol5-abdikhafar.vercel.app/",
			tech: ["HTML,", "CSS,", "JavaScript,", "TMDB API"],
			videoExp: "",
		},
		{
			id: "proj-6",
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1703148140/new_portfolio/nindmatch_mkdeem.webp",
			title: "Brainstomer",
			desc: "A React practice project. A simple memory game where the user has to match the cards with the same images.",
			github: "https://github.com/Abdikhafar-hub/Brainstomer",
			live: "https://brainstomer.vercel.app/",
			tech: ["React.js"],
			videoExp: "",
		},
	];

	const [active, setActive] = useState("proj-");
	return (
		<motion.div
			id="projects"
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.1 }}
			className="ms-auto me-auto w-[95%] md:w-full text-slate-200"
		>
			<div className="pt-16 flex flex-col justify-center items-center font-medium">
				<TypingText
					title="| Projects"
					textStyles="text-4xl mb-10 font-semibold"
				/>
				<div className="w-[90%] 2xl:w-[85%] flex lg:flex-row flex-col min-h-[70vh] gap-5">
					{projectData.map((proj, index) => (
						<ProjectCard
							key={proj.id}
							{...proj}
							index={index}
							active={active}
							handleClick={setActive}
						/>
					))}
				</div>
				<Link
					to="/projects"
					className="flex flex-col justify-center items-center mt-10 text-xl font-semibold hover:scale-110 transition ease-in-out duration-200"
				>
					<BsFillArrowUpRightCircleFill />
					<TypingText title="More Projects" textStyles="" />
				</Link>
			</div>
		</motion.div>
	);
};

export default Projects;
