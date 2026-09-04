export interface NavSection {
	slug: string;
	title: string;
	/** overrides `title` in the home/404 contents index only, never in the nav */
	indexTitle?: string;
	/** short description used on the home index and in section intros */
	blurb: string;
	/** true once the section holds real content rather than a placeholder */
	live: boolean;
}

export const sections: NavSection[] = [
	{
		slug: 'about',
		title: 'About',
		blurb: 'Biography, appointments, degrees, awards, and a downloadable CV.',
		live: true,
	},
	{
		slug: 'books',
		title: 'Books',
		blurb:
			'Father and Son / Martin Amis: Postmodernism and Beyond / Cambridge Companion to Martin Amis.',
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
			'Planning page for my book on the reclamation of traumatic spaces in Ireland.',
		live: true,
	},
	{
		slug: 'creative-work',
		title: 'Creative Work',
		blurb: 'Flight, a completed novel, and published poems.',
		live: true,
	},
	{
		slug: 'consulting',
		title: 'Consulting',
		blurb:
			'External program review and assessment for honors programs and English departments.',
		live: true,
	},
	{
		slug: 'teaching',
		title: 'Teaching',
		indexTitle: 'Teaching Portfolio',
		blurb: 'Courses in twentieth-century English and Irish literature, film, and theory.',
		live: true,
	},
];

/**
 * Pages that sit outside the main section list. Empty since Contact was folded
 * into the footer, which now carries both email addresses and the address.
 */
export const utilityLinks: NavSection[] = [];
