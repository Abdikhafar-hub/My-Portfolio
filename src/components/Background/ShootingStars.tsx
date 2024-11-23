import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
	id: number;
	x: number;
	y: number;
	angle: number;
	scale: number;
	speed: number;
	distance: number;
}

const getRandomStartPoint = () => {
	const side = Math.floor(Math.random() * 4);
	const offset = Math.random() * window.innerWidth;

	switch (side) {
		case 0: // Top
			return { x: offset, y: 0, angle: 45 };
		case 1: // Right
			return { x: window.innerWidth, y: offset, angle: 135 };
		case 2: // Bottom
			return { x: offset, y: window.innerHeight, angle: 225 };
		case 3: // Left
			return { x: 0, y: offset, angle: 315 };
		default:
			return { x: 0, y: 0, angle: 45 };
	}
};

const ShootingStars: React.FC = () => {
	const [stars, setStars] = useState<ShootingStar[]>([]);
	const svgRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		const createStar = () => {
			const { x, y, angle } = getRandomStartPoint();
			const newStar: ShootingStar = {
				id: Date.now() + Math.random(),
				x,
				y,
				angle,
				scale: 1,
				speed: Math.random() * 20 + 10, // Increased speed range
				distance: 0,
			};
			setStars((prevStars) => [...prevStars, newStar]);

			// Set a random delay (between 0.5 and 4 seconds) for creating the next star
			const randomDelay = Math.random() * 2000 + 2000; // Adjust this delay to control frequency
			setTimeout(createStar, randomDelay);
		};

		createStar(); // Initial star creation

		return () => {}; // No cleanup needed for timeout
	}, []);

	useEffect(() => {
		const moveStars = () => {
			setStars((prevStars) =>
				prevStars
					.map((star) => {
						const newX =
							star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
						const newY =
							star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
						const newDistance = star.distance + star.speed;
						const newScale = 1 + newDistance / 100;

						// Remove star if it goes out of bounds
						if (
							newX < -20 ||
							newX > window.innerWidth + 20 ||
							newY < -20 ||
							newY > window.innerHeight + 20
						) {
							return null;
						}
						return { ...star, x: newX, y: newY, distance: newDistance, scale: newScale };
					})
					.filter((star) => star !== null) as ShootingStar[] // Filter out stars that have moved out of bounds
			);
		};

		const animationFrame = requestAnimationFrame(moveStars);
		return () => cancelAnimationFrame(animationFrame);
	}, [stars]);

	return (
		<svg
			ref={svgRef}
			width="100%"
			height="100%"
			style={{ position: "absolute", top: 0, left: 0 }}
		>
			{stars.map((star) => (
				<rect
					key={star.id}
					x={star.x}
					y={star.y}
					width={10 * star.scale}
					height="2"
					fill="url(#gradient)"
					transform={`rotate(${star.angle}, ${star.x + (10 * star.scale) / 2}, ${
						star.y + 1
					})`}
				/>
			))}
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" style={{ stopColor: "#b4f2ff", stopOpacity: 0 }} />
					<stop offset="100%" style={{ stopColor: "#48dcf9", stopOpacity: 1 }} />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default ShootingStars;
