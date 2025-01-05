'use client';

import { useState } from 'react';
import NavLink from './nav-link';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
	className?: string;
}

function Navbar({ className = '' }: NavbarProps) {
	const [isNavigating, setIsNavigating] = useState(false);

	function triggerAnimation() {
		const originalNavbar = document.getElementById('original-navbar');
		const animationNavbar = document.getElementById('animation-navbar');

		if (originalNavbar && animationNavbar) {
			animationNavbar.style.display = 'flex';

			originalNavbar.style.opacity = '0';

			setTimeout(() => {
				originalNavbar.style.display = 'none';
				animationNavbar.style.width = '48px';
				setIsNavigating(true);
			}, 400);
		}
	}

	function handleAnimationEnd() {
		const originalNavbar = document.getElementById('original-navbar');
		const animationNavbar = document.getElementById('animation-navbar');

		if (originalNavbar && animationNavbar) {
			animationNavbar.style.width = '390px';
			setIsNavigating(false);

			setTimeout(() => {
				animationNavbar.style.display = 'none';
				originalNavbar.style.display = 'flex';
				originalNavbar.style.opacity = '1';
			}, 300);
		}
	}

	const links = [
		{ href: '/', label: 'Overview' },
		{ href: '/about', label: 'About' },
		{ href: '/work', label: 'Work' },
		{ href: '/contact', label: 'Contact' },
	];

	return (
		<div className="hidden md:block relative z-10 h-12">
			<nav
				id="original-navbar"
				className={cn(
					`flex-center h-12 bg-zinc-950/70
					hover:bg-zinc-950/80 border hover:border-zinc-400
					border-zinc-600 rounded-full shadow-lg shadow-zinc-400/10
					hover:shadow-xl hover:shadow-zinc-400/10 transition-all
					duration-300`,
					className
				)}
			>
				<ul className="flex-center gap-6 text-sm px-7">
					{links.map(({ href, label }) => (
						<li key={href}>
							<NavLink
								href={href}
								onNavigate={triggerAnimation}
								onAnimationEnd={handleAnimationEnd}
							>
								{label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			<div
				id="animation-navbar"
				style={{ display: 'none' }}
				className={cn(
					`absolute overflow-hidden top-0 right-1/2 translate-x-1/2 h-12 
					bg-zinc-950/70 hover:bg-zinc-950/80 border hover:border-zinc-400
					border-zinc-600 rounded-full shadow-lg shadow-zinc-400/10
					hover:shadow-xl hover:shadow-zinc-400/10 transition-all
					duration-300 w-[390px]`
				)}
			>
				<ul
					className={cn(
						'flex-center gap-6 text-sm px-7 transition-all duration-300',
						isNavigating ? 'opacity-0' : 'opacity-100'
					)}
				>
					{links.map(({ href, label }) => (
						<NavLink
							key={href}
							href={href}
							onNavigate={() => {}}
							onAnimationEnd={() => {}}
						>
							{label}
						</NavLink>
					))}
				</ul>
				<div className="absolute inset-0 flex-center">
					<Loader2
						className={cn(
							'w-6 h-6 animate-spin text-indigo-500 transition-all duration-300',
							isNavigating
								? 'opacity-100 scale-100'
								: 'opacity-0 scale-0'
						)}
					/>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
