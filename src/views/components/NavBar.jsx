import React, { Fragment } from 'react';
import styled from 'styled-components';

/* @components */
import Logotype from 'assets/Logotype';

const Wrapper = styled.header`
	width: 100vw;
	min-height: 6rem;
	display: grid;
	justify-content: center;
	box-shadow: hsla(0, 0%, 0%, 0.3) 0 0 2rem;
	position: sticky;
	z-index: 8080;
`;

const Container = styled.nav`
	max-width: 96rem;
	width: 100vw;
	height: 100%;
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: auto 1fr;
`;

const Text = styled.h1`
	font-family: roboto-mono, monospace;
	font-weight: 700;
	font-size: 1.4rem;
	text-transform: uppercase;
	color: currentColor;
	display: grid;
	grid-auto-flow: row;
	gap: 0.2rem;
`;

const TextRow = styled.span`
	display: block;
`;

const Dash = styled.span`
	padding-left: 0.1rem;
	letter-spacing: -0.1rem;
	user-select: none;
`;

const Link = styled.a`
	padding: 0 2rem;
	width: 20rem;
	height: 100%;
	text-decoration: none;
	display: grid;
	align-items: center;
	grid-template-columns: 5rem 1fr;
	gap: 1rem;
	color: hsl(0, 0%, 100%, 0.7);
	transition: color 150ms ease-in-out;

	&:hover {
		color: hsl(0, 0%, 100%, 0.5);
	}
`;

const Menu = styled.div`
	padding: 0 2rem;
	display: grid;
	grid-auto-flow: column;
	align-items: center;
	justify-items: right;
	justify-content: right;
	gap: 1rem;
	position: relative;
`;

const MenuItem = styled.a`
	padding: 1rem;
	height: 100%;
	line-height: 4rem;
	font-size: 1.2rem;
	font-weight: 700;
	text-transform: uppercase;
	text-decoration: none;
	color: hsl(0, 0%, 100%);
	transition: all 150ms ease-in-out;

	&:hover {
		color: hsl(0, 0%, 100%, 0.7);
		box-shadow: inset 0 -0.3rem 0 0 hsl(0, 0%, 100%, 0.07);
	}

	&[data-current] {
		background: hsl(0, 0%, 100%, 0.03);
	}
`;

export default () => (
	<Fragment>
		<Wrapper>
			<Container>
				<Link href="/">
					<Logotype />
					<Text>
						<TextRow>
							Rymdfarts<Dash>&mdash;&mdash;</Dash>
						</TextRow>
						<TextRow>myndigheten</TextRow>
					</Text>
				</Link>
				<Menu>
					<MenuItem href="/">Teknologi</MenuItem>
					<MenuItem href="/" data-current="true">
						Expedition
					</MenuItem>
					<MenuItem href="/">Utveckling</MenuItem>
					<MenuItem href="/">Verksamhet</MenuItem>
				</Menu>
			</Container>
		</Wrapper>
	</Fragment>
);
