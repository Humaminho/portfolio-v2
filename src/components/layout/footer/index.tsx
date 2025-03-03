import Link from 'next/link';
import { socialLinks } from '@/data/personal-links';
import { Github, Linkedin } from 'lucide-react';

function LeetCodeIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="20"
			width="20"
			className="w-4 h-4"
		>
			<path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
		</svg>
	);
}

const IconComponents = {
	github: <Github className="w-4 h-4" />,
	linkedin: <Linkedin className="w-4 h-4" />,
	leetcode: <LeetCodeIcon />,
};

const links = [
	{ href: '/', label: 'Overview' },
	{ href: '/about', label: 'About' },
	{ href: '/work', label: 'Work' },
	{ href: '/contact', label: 'Contact' },
];

function Footer() {
	return (
		<footer className="mt-auto border-t border-zinc-800 bg-zinc-950/70">
			<div className="max-container py-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="flex flex-col items-center md:items-start gap-4">
						<p className="text-sm text-zinc-400">
							© {new Date().getFullYear()} Humam. All rights
							reserved.
						</p>
						<div className="flex items-center gap-4">
							{socialLinks.map((link) => (
								<a
									key={link.platform}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-zinc-400 hover:text-zinc-50 transition-colors"
									aria-label={link.label}
								>
									{
										IconComponents[
											link.platform as keyof typeof IconComponents
										]
									}
								</a>
							))}
						</div>
					</div>
					<nav>
						<ul className="flex items-center gap-6 text-sm">
							{links.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-zinc-400 hover:text-zinc-50 transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
