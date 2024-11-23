import { motion } from "framer-motion";
import { navVariants } from "../../motion";

const Navbar = () => {
	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			className="m-o z-10 h-16 md:flex items-center transition ease-in-out hidden 2xl:max-w-[1530px] pt-6 px-4"
		>
			<div className="w-[95%] md:w-[90%] ms-auto me-auto flex justify-between items-center">
				<a href="#">
					<img
						className="w-20 p-[10px] hidden md:block rounded-full"
						src="https://res.cloudinary.com/ddkkfumkl/image/upload/v1728570367/WhatsApp_Image_2024-10-10_at_5.21.06_PM_gi5jhw.jpg"
						alt="abdikhafar"
						width="70px"
						height="70.219px"
					/>
				</a>
				<ul className="w-[70%] md:flex items-center justify-around hidden text-[#01f53f] text-xl font-bold">
					<li className="hover:scale-110 transition ease-in-out duration-150">
						<a href="#about">About Me</a>
					</li>
					<li className="hover:scale-110 transition ease-in-out duration-150">
						<a href="#projects">Projects</a>
					</li>
					<li className="hover:scale-110 transition ease-in-out duration-150">
						<a href="#work">Work</a>
					</li>
					<li className="hover:scale-110 transition ease-in-out duration-150">
						<a href="#blog">Blog</a>
					</li>
					<li className="hover:scale-110 transition ease-in-out duration-150">
						<a href="#achievements">Achievements</a>
					</li>
					<li className="hover:scale-110 transition ease-in-out duration-150">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</motion.nav>
	);
};

export default Navbar;
