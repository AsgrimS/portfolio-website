import React from "react"
import styled from "styled-components"

const AboutBox = () => {
	return (
		<AboutContainer>
			<Box1>
				<span>Test</span>
			</Box1>
			<Box2>
				<span>Test</span>
			</Box2>
		</AboutContainer>
	)
}

const AboutContainer = styled.div`
	display: flex;
	text-align: center;
	font-size: 25px;
`

const Box1 = styled.div`
	height: 400px;
	width: 500px;
	background-color: rgb(255, 255, 255, 0.8);
	margin-left: 10rem;
	border-radius: 10px;
`
const Box2 = styled.div`
	height: 600px;
	width: 500px;
	background-color: rgb(255, 255, 255, 0.8);
	margin-left: auto;
	margin-right: 7rem;

	border-radius: 10px;
`

export default AboutBox
