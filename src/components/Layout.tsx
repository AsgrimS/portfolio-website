import React from "react"
import { createGlobalStyle } from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import backgroundImage from "../images/background.jpg"

import favicon from "../images/curriculum-vitae.png"
import OpenSansRegular from "../fonts/OpenSans-Regular.ttf"
import OpenSansBold from "../fonts/OpenSans-SemiBold.ttf"
interface dataInterface {
	site: siteInterface
}

interface siteInterface {
	siteMetadata: siteMetadataInterface
}

interface siteMetadataInterface {
	title: string
}

const Layout: React.FC = ({ children }) => {
	return (
		<StaticQuery
			query={graphql`
				query LayoutQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={(data: dataInterface) => (
				<>
					<Helmet>
						<title>{data.site.siteMetadata.title}</title>
						<link rel="icon" href={favicon} />
					</Helmet>
					<GlobalStyle />
					{children}
				</>
			)}
		/>
	)
}

const GlobalStyle = createGlobalStyle`
	@font-face {
  font-family: "Open Sans";
  src: url(${OpenSansRegular});
	}

	@font-face {
  font-family: "Open Sans Bold";
  src: url(${OpenSansBold});
	}

  body {
		margin: 0;
		color:#353535;
		font-family:"Open Sans";

	background-image: url(${backgroundImage});
	background-size: 100% 100vh;
	/* background-color: #3c6e71; */
  }
`

export default Layout
