'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';
import MobileNavbar from './mobile-navbar';
import MobileSocials from './mobile-socials';

interface MobileNavProps {
	isOpen: boolean;
	onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<>
			<div
				className={`fixed inset-0 bg-zinc-950/20 backdrop-blur-sm z-40 md:hidden transition-opacity ${
					isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
				}`}
				onClick={onClose}
			/>
			<div
				className={`fixed top-0 bottom-0 right-0 z-50 w-full sm:w-80 bg-zinc-950 border-l border-zinc-800 md:hidden transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className="flex flex-col h-full p-6">
					<button
						onClick={onClose}
						className="self-end flex-center"
						aria-label="Close menu"
					>
						<X className="w-6 h-6" />
					</button>
					<div className="flex flex-col gap-8">
						<MobileNavbar />
						<MobileSocials />
					</div>
				</div>
			</div>
		</>
	);
}

export default MobileNav;
