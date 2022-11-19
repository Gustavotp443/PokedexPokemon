/* eslint-disable react/no-unescaped-entities */
import type { AppProps } from "next/app";
import MainContainer from "../layout/MainContainer";
import Head from "next/head";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import "nprogress/nprogress.css";

import Router from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";


export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		Router.events.on("routeChangeStart", handleRouteStart);
		Router.events.on("routeChangeComplete", handleRouteDone);
		Router.events.on("routeChangeError", handleRouteDone);

		return () => {
			// Make sure to remove the event handler on unmount!
			Router.events.off("routeChangeStart", handleRouteStart);
			Router.events.off("routeChangeComplete", handleRouteDone);
			Router.events.off("routeChangeError", handleRouteDone);
		};
	}, []);

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Head >
					<title>Minha Pagina</title>
					<meta name="keywords" content="Roupas, calçados, bonés"></meta>
					<style>
						@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
					</style>
					<link rel="stylesheet" type="text/css" href="../styles/nprogress.css" />
				</Head>
				<MainContainer>
					<Component {...pageProps} />
				</MainContainer>
			</ThemeProvider>
		</>
	);


}
