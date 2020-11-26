import Head from 'next/head';
import Link from 'next/link';

import {getAllSlugs} from '../lib/posts';

export default function Home({slugs}) {
	return (
		<>
			<Head>
				<title>Hello world</title>
			</Head>
			<div className="container m-4">
				<h1 className="text-red-500 text-xl my-2">Hello world!</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<ul className="my-4">
					{slugs.map((slug) => (
						<li key={slug}>
							<Link href={`/posts/${slug}`}>
								<a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
									{slug}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const slugs = await getAllSlugs();

	return {
		props: {
			slugs
		}
	};
}
