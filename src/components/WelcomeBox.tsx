import React from "react"
import styled from "styled-components"

const WelcomeBox = () => {
	return (
		<MessageContainer>
			<Message>My Website</Message>
		</MessageContainer>
	)
}

const MessageContainer = styled.div`
	height: 300px;
	width: 600px;
	margin-left: auto;
	margin-right: 10rem;
	background-color: rgb(255, 255, 255, 0.8);
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Message = styled.span`
	font-family: "Open Sans Bold";
	font-size: 30px;
`

export default WelcomeBox
