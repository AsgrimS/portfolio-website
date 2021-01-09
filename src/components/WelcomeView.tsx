import React from "react"
import styled from "styled-components"

import backgroundImg from "../images/pexels-josh-sorenson-1714208.jpg"

const WelcomeView = () => {
	return (
		<WelcomeViewContainer>
			<ParallaxImage src={backgroundImg} />
		</WelcomeViewContainer>
	)
}

const WelcomeViewContainer = styled.section`
	/* background-color: #3c6e71; */
	height: 100vh;
	width: 100%;
`

const ParallaxImage = styled.img`
	width: 100%;
	height: 100%;

	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`

export default WelcomeView
