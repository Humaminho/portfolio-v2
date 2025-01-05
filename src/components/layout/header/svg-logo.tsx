import React from 'react';

export default function SvgLogo() {
	return (
		<div className="group hover:rotate-180 duration-300 transition-all">
			<svg
				width="45"
				height="45"
				viewBox="0 0 160 184"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="text-zinc-100 hover:text-indigo-500 transition-colors overflow-visible"
			>
				<path
					d="M76.2537 0.208321L76.194 31.7083L41.1533 53.1419L76.1126 74.7082L76.087 88.2082L61.57 97.1807L25.1127 74.6116L25.0284 119.112L0 134.064L0.169519 44.5643L76.2537 0.208321Z"
					fill="currentColor"
					className="transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
				/>
				<path
					d="M159.477 134.766L134.506 119.219L134.59 75.2187L95.9065 97.436L82.3797 88.4982L82.4054 74.9104L120.527 53.6556L82.5306 31.9105L82.5903 0.410608L159.646 45.2661L159.477 134.766Z"
					fill="currentColor"
					className="transition-transform group-hover:translate-x-2 group-hover:-translate-y-2"
				/>
				<path
					d="M2.12549 140.41L27.8599 125.181L66.2114 146.748L65.7234 102.142L78.6309 94.5136L91.9775 102.192L91.8963 145.012L129.432 122.481L156.626 139.522L79.9006 183.248L2.12549 140.41Z"
					fill="currentColor"
					className="transition-transform group-hover:translate-y-2"
				/>
			</svg>
		</div>
	);
}
