'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

function MobileNavbar() {
	const pathname = usePathname();

	const links = [
		{ href: '/', label: 'Overview' },
		{ href: '/about', label: 'About' },
		{ href: '/work', label: 'Work' },
		{ href: '/contact', label: 'Contact' },
	];

	return (
		<nav className="w-full">
			<ul className="flex flex-col gap-2 text-lg pt-10">
				{links.map(({ href, label }) => (
					<li key={href}>
						<Link
							href={href}
							className={`text-zinc-400 hover:text-zinc-50 transition-colors ${
								pathname === href ? 'text-zinc-50' : ''
							}`}
						>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default MobileNavbar;
