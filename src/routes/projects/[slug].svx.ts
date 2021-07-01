import { getPostBySlug } from '$lib/database/projects';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = params;

	const article = await getPostBySlug(slug);

	if (article) {
		return {
			body: {
				article
			}
		};
	}
};
