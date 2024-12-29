'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Logo from './logo';
import MobileNav from './mobile-nav';
import Navbar from './navbar';
import SocialLinks from './social-links';

function Header() {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 h-[var(--header-height)]">
			<div className="flex-between h-full max-container">
				<Logo />
				<Navbar />
				<div className="flex items-center gap-2">
					<SocialLinks />
					<button
						onClick={() => setIsMobileNavOpen(true)}
						className="flex-center md:hidden w-10 h-10 rounded-full border-solid border border-zinc-400 text-zinc-400 hover:text-zinc-50 hover:border-zinc-50 transition-all"
						aria-label="Open menu"
					>
						<Menu className="w-4 h-4" />
					</button>
				</div>
			</div>
			<MobileNav
				isOpen={isMobileNavOpen}
				onClose={() => setIsMobileNavOpen(false)}
			/>
		</header>
	);
}

export default Header;
