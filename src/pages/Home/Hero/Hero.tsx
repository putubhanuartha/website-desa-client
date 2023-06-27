import React from "react";
import { HeroContent } from "./HeroContent";
export const Hero = () => {
	return (
		<div className="h-screen relative flex">
			<section className="brightness-[0.45]">
				<video
					id="hero_video"
					className="w-screen h-screen object-cover object-center"
					autoPlay
					loop
					muted
					controls={false}
				>
					<source src="/video/hero.mp4" />
				</video>
			</section>
			<HeroContent />
		</div>
	);
};
