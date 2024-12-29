import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tempSvg = (
	<svg
		width="56"
		height="63"
		viewBox="0 0 56 63"
		fill="none"
		className="w-10 h-10 hover:scale-105 hover:rotate-6 transition-all text-zinc-100 hover:text-indigo-500"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M7.04976e-07 15L28 31.5L28 63L0 47L7.04976e-07 15Z"
			fill="currentColor"
		/>
		<path
			d="M55.5 46.7098L28.5 62.1384V31.5V31.2143L28.2538 31.0692L1.02007 15.0208L28 0.567228L55.5 15.2994V46.7098Z"
			stroke="currentColor"
		/>
	</svg>
);

function Logo() {
	return (
		<Link href="/" className="text-lg font-semibold">
			{/** Create animated svg here */}
			{tempSvg}
		</Link>
	);
}

export default Logo;
