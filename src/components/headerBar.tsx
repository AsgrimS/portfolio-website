import React from "react"
import styled from "styled-components"

type HeaderProps = {
	title: string
}

const HeaderBar = ({ title }: HeaderProps) => {
	return (
		<HeaderContainer>
			<HeaderTitle>{title}</HeaderTitle>
			<HeaderItemsContainer>
				<HeaderItem>About</HeaderItem>
				<HeaderItem>Contact</HeaderItem>
			</HeaderItemsContainer>
		</HeaderContainer>
	)
}

const HeaderContainer = styled.header`
	display: flex;
	height: 3rem;
	background-color: #284b63;
	align-items: center;
	padding-left: 3rem;
	padding-right: 3rem;
	color: #ffffff;
`
const HeaderTitle = styled.span`
	font-family: "Open Sans Bold";
	font-size: 1.2rem;
`

const HeaderItemsContainer = styled.span`
	margin-left: auto;
`

const HeaderItem = styled.span`
	font-family: "Open Sans";
	margin-right: 1.5rem;
	font-size: 1.2rem;
	color: #ffffff;
`

export default HeaderBar
