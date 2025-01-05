interface Project {
	id: number;
	src: string;
	title: string;
	description: string;
	features: string[];
	github: string;
	live: string;
	stack: string[];
	hasGitRepo: boolean;
}

export const projects: Project[] = [
	{
		id: 1,
		src: '/images/cozyshop.webp',
		title: 'Cozy shop',
		description:
			'Cozy Shop is an e-commerce website showcasing a fictional clothing brand, specializing in comfortable and fashionable clothes. Made using React.js and Sass CSS.',
		features: [
			'A functional cart for buying clothes, which allows users to add items to their cart and checkout.',
			'A search and filtering system for the products.',
			'A mobile-first approach for responsive design and a light and dark mode.',
		],
		github: 'https://github.com/Humaminho/store-website',
		live: 'https://cozy-shop.netlify.app/',
		stack: ['TypeScript', 'React', 'Sass'],
		hasGitRepo: true,
	},
	{
		id: 2,
		src: '/images/bluevies.webp',
		title: 'BLUEVIES',
		description:
			'Bluevies is a movie search web application powered by the The Movie Database (TMDB) API. Developed with React and styled using Vanilla CSS.',
		features: [
			'Email and Gmail authentication using Firebase.',
			'Cloud Firestore integration which allows users to save their favorite movies to their account and access them from any device.',
			'Search and suggestion functionality to look for movies provided by the TMDB API.',
		],
		github: 'https://github.com/Humaminho/movie-app',
		live: 'https://bluevies.netlify.app/',
		stack: ['TypeScript', 'React', 'Firebase'],
		hasGitRepo: true,
	},
	{
		id: 3,
		src: '/images/artwise.webp',
		title: 'ARTWISE CREATIVE',
		description:
			"Artwise Creative is a digital agency website I developed for a client, using Next.js and Tailwind CSS. The website was customized to the client's preferences to ensure that it met their specific needs and requirements.",
		features: [
			'Responsive design with a modern landing page and a dark theme for a smooth user experience.',
			'Contact form that uses Pipedream to receive emails from potential clients.',
			'Use of Flowbite UI components and libraries such as Axios, Formik, and Yup.',
		],
		github: 'N/A',
		live: 'https://artwise-creative.vercel.app/',
		stack: ['TypeScript', 'Next.js', 'Tailwind'],
		hasGitRepo: false,
	},
];

export default projects;
