import React from "react"
import { createGlobalStyle } from "styled-components"

const Layout = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	)
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #d9d9d9;
    color: #353535
  }
`

export default Layout
