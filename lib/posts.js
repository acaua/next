import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllSlugs() {
	return fs
		.readdirSync(postsDirectory)
		.map((filename) => filename.replace('.mdx', ''));
}

export function getPostBySlug(slug, fields = []) {
	const fullPath = path.join(postsDirectory, `${slug}.mdx`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);
	const items = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = slug;
		}

		if (field === 'content') {
			items[field] = content;
		}

		if (data[field]) {
			items[field] = data[field];
		}
	});

	return items;
}

export function getAllPosts(fields = []) {
	const posts = getAllSlugs()
		.map((slug) => getPostBySlug(slug, fields))
		// Sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));

	return posts;
}
