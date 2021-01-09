import React from "react"
import { graphql, StaticQuery } from "gatsby"

const About = () => {
	return (
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
				<div>
					<h2>{data.site.siteMetadata.title}</h2>
					<h2>{data.site.siteMetadata.description}</h2>
				</div>
			)}
		/>
	)
}

export default About
