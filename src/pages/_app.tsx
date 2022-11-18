/* eslint-disable react/no-unescaped-entities */
import type { AppProps } from "next/app";
import MainContainer from "../layout/MainContainer";
import Head from "next/head";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
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
				</Head>
				<MainContainer>
					<Component {...pageProps} />
				</MainContainer>
			</ThemeProvider>
		</>
	);


}
