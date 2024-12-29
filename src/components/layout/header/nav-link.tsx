'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	onNavigate?: () => void;
	onAnimationEnd?: () => void;
}

function NavLink({
	href,
	children,
	className,
	onNavigate,
	onAnimationEnd,
	...props
}: NavLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;
	const router = useRouter();

	function handleTransition(e: React.MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();

		if (pathname === href) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		if (onNavigate) {
			onNavigate();
		}

		setTimeout(() => {
			router.push(href);
			setTimeout(() => {
				if (onAnimationEnd) {
					onAnimationEnd();
				}
			}, 500);
		}, 600);
	}

	return (
		<Link
			href={href}
			onClick={handleTransition}
			className={cn(
				'w-[65px] flex-center font-medium transition-all duration-300',
				isActive ? 'text-zinc-50' : 'text-zinc-400 hover:text-zinc-50',
				className
			)}
			{...props}
		>
			{children}
		</Link>
	);
}

export default NavLink;
