import NavLink from './nav-link';

interface NavbarProps {
	className?: string;
}

function Navbar({ className = '' }: NavbarProps) {
	const links = [
		{ href: '/', label: 'Overview' },
		{ href: '/about', label: 'About' },
		{ href: '/work', label: 'Work' },
		{ href: '/contact', label: 'Contact' },
	];

	return (
		<nav
			className={`hidden md:flex-center h-10 bg-zinc-950 border border-zinc-400 rounded-xl shadow-lg shadow-zinc-400/10 hover:shadow-xl hover:shadow-zinc-400/10 transition-all ${className}`}
		>
			<ul className="flex-center gap-6 text-sm px-7">
				{links.map(({ href, label }) => (
					<li key={href}>
						<NavLink href={href}>{label}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
