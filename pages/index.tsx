import { robotoMono } from "@/config/font";
import { metaData } from "@/config/meta";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>{metaData.title}</title>
				<meta name="description" content={metaData.description} />
			</Head>

			<div className={`${robotoMono.className}`}>
				<h1>Hello World!</h1>
			</div>
		</>
	);
}
