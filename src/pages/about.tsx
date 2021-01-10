import React, { useRef } from "react"
import styled from "styled-components"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import background from "../images/pexels-josh-sorenson-1714208.jpg"

const About = () => {
	const ref = useRef<Parallax>()
	return (
		<Parallax pages={2} scrolling={true} ref={ref}>
			<ParallaxLayer offset={0} speed={-1} factor={1}>
				<WelcomeView />
			</ParallaxLayer>
			<ParallaxLayer offset={0.5} speed={0.5} factor={1}>
				<span>TETASFASF</span>
			</ParallaxLayer>
			<ParallaxLayer offset={1} speed={0} factor={1}>
				<WelcomeView />
			</ParallaxLayer>
		</Parallax>
	)
}

const AboutContent = styled.section`
	height: 100vh;
	margin-left: 15rem;
	margin-right: 15rem;
	text-align: center;
`
const WelcomeView = styled.section`
	background-image: url(${background});
	background-size: 100% 100vh;
	height: 100vh;
	width: 100%;
`

const Test2 = styled.div`
	background-size: 100% 100vh;
	height: 100vh;
	width: 100%;
`

export default About
