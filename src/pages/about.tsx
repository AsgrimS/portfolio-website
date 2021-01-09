import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import WelcomeView from "../components/WelcomeView"

const About = () => {
	return (
		<>
			<StaticQuery
				query={graphql`
					query AboutPageQuery {
						site {
							siteMetadata {
								title
							}
						}
					}
				`}
				render={(data) => (
					<>
						<WelcomeView />
						{/* <Navbar title={data.site.siteMetadata.title} /> */}
						<AboutContent>
							<h2>Some text</h2>
						</AboutContent>
					</>
				)}
			/>
		</>
	)
}

const AboutContent = styled.div`
	height: 100vh;
	margin-left: 15rem;
	margin-right: 15rem;
	text-align: center;
`

export default About
