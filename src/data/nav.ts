export interface NavSection {
	slug: string;
	title: string;
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
			'Three books — Father and Son, Martin Amis: Postmodernism and Beyond, and The Cambridge Companion to Martin Amis.',
		live: true,
	},
	{
		slug: 'scholarship',
		title: 'Scholarship',
		blurb:
			'Essays, book chapters, and the Martin Amis Web — work for general and specialist readers.',
		live: false,
	},
	{
		slug: 'fieldwork',
		title: 'Fieldwork',
		blurb:
			'Site-based photographs (my own), for a book I’m writing on the reclamation of traumatic spaces in Ireland.',
		live: false,
	},
	{
		slug: 'creative-work',
		title: 'Creative Work',
		blurb: 'Flight, a novel, and published poems.',
		live: false,
	},
	{
		slug: 'consulting',
		title: 'Consulting',
		blurb:
			'External program review and assessment for honors programs and English departments.',
		live: false,
	},
	{
		slug: 'teaching',
		title: 'Teaching',
		blurb: 'Courses in twentieth-century English and Irish literature, film, and theory.',
		live: false,
	},
];

export const utilityLinks: NavSection[] = [
	{
		slug: 'contact',
		title: 'Contact',
		blurb: 'Department address and email.',
		live: false,
	},
];
