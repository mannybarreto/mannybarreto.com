export type Framework = { name: string; link: string };

// FM = Front Matter
export type ProjectFM = {
	title: string;
	slug: string;
	tldr: string;
	stack: Framework[];
};

export type SocialFM = {
	name: string;
	icon: string;
	url: string;
}