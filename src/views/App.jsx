import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

/* @components */
import NavBar from 'views/components/NavBar';

const GlobalStyle = createGlobalStyle`
	body {
		background: linear-gradient(to bottom, #16142C 0%, #020111 25%, #020111 45%, #16142C 100%);
		font-family: futura-pt, sans-serif;
		color: #fff;
	}

	html, body, #root {
		height: 100%;
	}
`;

export default () => (
	<Fragment>
		<GlobalStyle />
		<NavBar />
	</Fragment>
);
