'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

function NavLink({ href, children, className, ...props }: NavLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;
	const router = useRouter();

	function handleTransition(e: React.MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		router.push(href);
	}

	return (
		<Link
			href={href}
			onClick={handleTransition}
			className={cn(
				'w-[65px] flex-center',
				isActive ? 'text-zinc-50' : 'text-zinc-400',
				className
			)}
			{...props}
		>
			{children}
		</Link>
	);
}

export default NavLink;
