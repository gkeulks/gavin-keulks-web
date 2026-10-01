export interface NavSection {
	slug: string;
	title: string;
	/** overrides `title` in the home/404 contents index only, never in the nav */
	indexTitle?: string;
	/** short description, shown on the 404 page's section index; may carry <em> */
	blurb: string;
	/** true once the section holds real content rather than a placeholder */
	live: boolean;
	/** the person and the service rather than the work: set after a divider
	    in the top nav, in a quieter weight */
	quiet?: boolean;
}

/* The work first, then the person and the service (`quiet`). The header
   draws a divider between the two groups, so keep the quiet ones last. */
export const sections: NavSection[] = [
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
			'Essays and book chapters, grouped by theme — work for generalists and specialists alike.',
		live: true,
	},
	{
		slug: 'digital-work',
		title: 'Digital Work',
		blurb: 'The Martin Amis Web and other sites — web design and digital humanities.',
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
		slug: 'about',
		title: 'About',
		blurb: 'Biography, appointments and leadership, grants and awards, and a downloadable CV.',
		live: true,
		quiet: true,
	},
	{
		slug: 'teaching',
		title: 'Teaching',
		indexTitle: 'Teaching Portfolio',
		blurb: 'Courses taught in literature, literary theory, and film.',
		live: true,
		quiet: true,
	},
	{
		slug: 'consulting',
		title: 'Consulting',
		blurb:
			'External program review, assessment, and curricular reform for honors programs and English departments.',
		live: true,
		quiet: true,
	},
];

/**
 * Pages that sit outside the main section list. Empty since Contact was folded
 * into the footer, which now carries both email addresses and the address.
 */
export const utilityLinks: NavSection[] = [];
