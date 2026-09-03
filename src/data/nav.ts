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
		blurb: 'Biography, appointments, degrees, and a downloadable CV.',
		live: false,
	},
	{
		slug: 'scholarship',
		title: 'Scholarship',
		blurb: 'Books, chapters, and the Martin Amis Web — work for general and specialist readers.',
		live: false,
	},
	{
		slug: 'irish-traumatic-spaces',
		title: 'Irish Traumatic Spaces',
		blurb: 'Photographs of place, toward a book on the landscapes of Irish trauma.',
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
		blurb: 'Program review, assessment, and external evaluation for honors programs and English departments.',
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
