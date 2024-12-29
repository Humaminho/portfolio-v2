'use client';

import { useState, useEffect, useRef } from 'react';

interface GradientMeshProps {
	className?: string;
}

export function GradientMesh({ className = '' }: GradientMeshProps) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isTouchDevice, setIsTouchDevice] = useState(false);
	const speedRef = useRef(0.02);
	const timeoutRef = useRef<NodeJS.Timeout>();
	const targetRef = useRef({ x: 0, y: 0 });
	const frameRef = useRef<number>();

	useEffect(() => {
		setIsTouchDevice('ontouchstart' in window);
	}, []);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			targetRef.current = { x: e.clientX, y: e.clientY };
		};

		const animate = () => {
			setMousePosition((prev) => ({
				x: prev.x + (targetRef.current.x - prev.x) * 0.1,
				y: prev.y + (targetRef.current.y - prev.y) * 0.1,
			}));
			frameRef.current = requestAnimationFrame(animate);
		};

		if (!isTouchDevice) {
			document.addEventListener('mousemove', handleMouseMove);
			frameRef.current = requestAnimationFrame(animate);
			return () => {
				document.removeEventListener('mousemove', handleMouseMove);
				if (frameRef.current) cancelAnimationFrame(frameRef.current);
			};
		}

		let animationFrameId: number;
		let targetX = Math.random() * window.innerWidth;
		let targetY = Math.random() * window.innerHeight;

		const updateSpeed = () => {
			speedRef.current = 0.01 + Math.random() * 0.03;
			const nextUpdate = 2000 + Math.random() * 3000;
			timeoutRef.current = setTimeout(updateSpeed, nextUpdate);
		};

		const animateRandom = () => {
			setMousePosition((prev) => {
				const dx = (targetX - prev.x) * speedRef.current;
				const dy = (targetY - prev.y) * speedRef.current;

				if (
					Math.abs(targetX - prev.x) < 1 &&
					Math.abs(targetY - prev.y) < 1
				) {
					targetX = Math.random() * window.innerWidth;
					targetY = Math.random() * window.innerHeight;
				}

				return {
					x: prev.x + dx,
					y: prev.y + dy,
				};
			});

			animationFrameId = requestAnimationFrame(animateRandom);
		};

		updateSpeed();
		animateRandom();

		return () => {
			cancelAnimationFrame(animationFrameId);
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [isTouchDevice]);

	return (
		<div className={`fixed inset-0 -z-10 w-screen h-screen ${className}`}>
			<div
				className="absolute inset-0 opacity-60"
				style={{
					backgroundImage: `url("/svg/cover.svg")`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			<div
				className="absolute inset-0 bg-black/90 transition-opacity duration-300"
				style={{
					background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.5), rgba(0,0,0,0.9))`,
				}}
			/>
		</div>
	);
}
