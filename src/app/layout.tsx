import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ErrorBoundary } from '@/components/error-boundary';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
	display: 'swap',
	preload: false,
});

export const metadata: Metadata = {
	metadataBase: new URL('https://humam.works'),
	title: {
		default: 'Humam Kharbouch | Software Developer',
		template: '%s | Humam Kharbouch',
	},
	description:
		'Software Developer specializing in modern web technologies...',
	keywords: ['software developer', 'web development', 'react', 'next.js'],
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'Humam Kharbouch | Software Developer',
		description:
			'Software Developer specializing in modern web technologies...',
		url: 'https://humam.works',
		siteName: 'Humam Kharbouch',
		locale: 'en_US',
		type: 'website',
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${poppins.variable} font-sans antialiased`}
				suppressHydrationWarning
			>
				<ErrorBoundary>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
					>
						{children}
						<Analytics />
					</ThemeProvider>
				</ErrorBoundary>
			</body>
		</html>
	);
}
