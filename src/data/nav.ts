export interface NavSection {
	slug: string;
	title: string;
	/** overrides `title` in the home/404 contents index only, never in the nav */
	indexTitle?: string;
	/** short description, shown on the 404 page's section index; may carry <em> */
	blurb: string;
	/** true once the section holds real content rather than a placeholder */
	live: boolean;
}

export const sections: NavSection[] = [
	{
		slug: 'about',
		title: 'About',
		blurb: 'Biography, appointments and leadership, grants and awards, and a downloadable CV.',
		live: true,
	},
	{
		slug: 'books',
		title: 'Books',
		blurb:
			'<em>Father and Son</em> / <em>Martin Amis: Postmodernism and Beyond</em> / <em>The Cambridge Companion to Martin Amis</em>.',
		live: true,
	},
	{
		slug: 'scholarship',
		title: 'Scholarship',
		blurb:
			'Essays, book chapters, and the Martin Amis Web — work for generalists and specialists alike.',
		live: true,
	},
	{
		slug: 'fieldwork',
		title: 'Fieldwork',
		blurb:
			'Site-based photographs and conference papers toward a book on spatial trauma in Ireland and Northern Ireland.',
		live: true,
	},
	{
		slug: 'creative-work',
		title: 'Creative Work',
		blurb: '<em>Flight</em>, a novel manuscript under agent review, and published poems.',
		live: true,
	},
	{
		slug: 'consulting',
		title: 'Consulting',
		blurb:
			'External program review, assessment, and curricular reform for honors programs and English departments.',
		live: true,
	},
	{
		slug: 'teaching',
		title: 'Teaching',
		indexTitle: 'Teaching Portfolio',
		blurb: 'Courses taught in literature, literary theory, and film.',
		live: true,
	},
];

/**
 * Pages that sit outside the main section list. Empty since Contact was folded
 * into the footer, which now carries both email addresses and the address.
 */
export const utilityLinks: NavSection[] = [];
