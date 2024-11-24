// import AnimatedCursor from "react-animated-cursor";

import Home from "./sections/Home";
import BlogsPage from "./sections/BlogsPage";
import ProjectsPage from "./sections/ProjectsPage";
import ErrorPage from "./sections/404";
import { Routes, Route } from "react-router-dom";

import StarBackground from "./components/Background/StarBackground";
import ShootingStars from "./components/Background/ShootingStars";

function App() {
	

	return (
		<div className=" transition-all ease-in-out duration-500 relative">
			<div className="absolute h-screen overflow-x-hidden before:content-[''] before:absolute before:inset-0 before:-z-10 before:left-1/2 before:top-[-50px] before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:h-[250px] before:w-[800px] before:mix-blend-color-dodge before:rounded-full before:blur-[62px] before:bg-gradient-to-t before:from-[rgba(43,0,255,0.415)] before:to-[rgba(255,0,0,0.8)] before:pointer-events-none">
				<div className="fixed w-full h-screen -z-10">
					<StarBackground />
					<ShootingStars />
				</div>
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blogs" element={<BlogsPage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
			
		</div>
	);
}

export default App;
