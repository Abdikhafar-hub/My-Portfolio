import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../motion";

export const TypingText = ({ title, textStyles }) => (
	<motion.p
		variants={textContainer}
		initial="hidden"
		animate="show"
		className={`${textStyles}`}
	>
		{Array.from(title).map((letter, index) => (
			<motion.span
				variants={textVariant2}
				key={index}
				style={{ display: "inline-block" }}
			>
				{letter === " " ? "\u00A0" : letter}
			</motion.span>
		))}
	</motion.p>
);
