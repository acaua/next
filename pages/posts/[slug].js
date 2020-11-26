import Link from 'next/link';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

import {getAllSlugs, getPostBySlug} from '../../lib/posts';

const components = {};

export default function Post({post}) {
	const content = hydrate(post.content, {components});
	return (
		<>
			<Link href="/">
				<a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
					Home
				</a>
			</Link>
			<h1 className="text-lg font-bold my-4">{post.title}</h1>
			<article className="prose">{content}</article>
		</>
	);
}

export async function getStaticPaths() {
	const paths = getAllSlugs().map((slug) => ({params: {slug}}));

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({params}) {
	const post = await getPostBySlug(params.slug, ['content', 'title']);

	const mdxSource = await renderToString(post.content, {
		components,
		scope: post
	});

	return {
		props: {
			post: {
				...post,
				content: mdxSource
			}
		}
	};
}
