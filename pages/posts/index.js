import Head from 'next/head';
import Link from 'next/link';

import {getAllSlugs} from '../../lib/posts';

export default function Home({slugs}) {
	return (
		<>
			<Head>
				<title>Hello world</title>
			</Head>
			<div className="container">
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
