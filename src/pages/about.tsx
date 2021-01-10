import React, { useRef } from "react"
import styled from "styled-components"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

import WelcomeBox from "../components/WelcomeBox"
import AboutBox from "../components/AboutBox"

const About = () => {
	const ref = useRef<Parallax>()
	return (
		<Parallax pages={2} scrolling={true} ref={ref}>
			<ParallaxLayer offset={0.3} speed={0.5}>
				<WelcomeBox />
			</ParallaxLayer>
			<ParallaxLayer offset={1} speed={0}>
				<AboutBackground />
			</ParallaxLayer>
			<ParallaxLayer offset={1.2} speed={0.3}>
				<AboutBox />
			</ParallaxLayer>
		</Parallax>
	)
}

const AboutBackground = styled.section`
	height: 100vh;
	background-color: rgb(60, 110, 113, 0.9);
`
export default About
