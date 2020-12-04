import Image from 'next/image';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

import { getAllSlugs, getPostBySlug } from '../../lib/posts';

const components = {};

export default function Post({ post }) {
	const content = hydrate(post.content, { components });
	return (
		<>
			<h1 className="text-2xl sm:text-4xl font-bold my-4">{post.title}</h1>
			{post.coverImage && (
				<Image
					src={post.coverImage.src}
					alt={post.coverImage.alt}
					width={post.coverImage.width}
					height={post.coverImage.height}
				/>
			)}
			<article className="prose mx-auto my-4">{content}</article>
		</>
	);
}

export async function getStaticPaths() {
	const paths = getAllSlugs().map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post = await getPostBySlug(params.slug, [
		'content',
		'title',
		'coverImage',
	]);

	if (!post) return { notFound: true };

	const mdxSource = await renderToString(post.content, {
		components,
		scope: post,
	});

	return {
		props: {
			post: {
				...post,
				content: mdxSource,
			},
		},
	};
}
