import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head>
				<title>Hello world</title>
			</Head>
			<h1 className="text-red-500 text-xl my-2">Hello world!</h1>
			<Image src="/shark.png" alt="Flying shark" width={564} height={400} />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
		</>
	);
}
