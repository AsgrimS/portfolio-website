import React from "react"
import { graphql, StaticQuery } from "gatsby"

import HeaderBar from "../components/headerBar"
import styled from "styled-components"

const About = () => {
	return (
		<>
			<StaticQuery
				query={graphql`
					query AboutPageQuery {
						site {
							siteMetadata {
								title
								description
							}
						}
					}
				`}
				render={(data) => (
					<>
						<HeaderBar title={data.site.siteMetadata.title} />
						<AboutContainer>
							<h2>{data.site.siteMetadata.description}</h2>
						</AboutContainer>
					</>
				)}
			/>
		</>
	)
}

const AboutContainer = styled.div`
	margin-left: 15rem;
	margin-right: 15rem;
	text-align: center;
`

export default About
