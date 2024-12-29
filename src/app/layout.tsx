import Header from '@/components/layout/header';
import PageContainer from '@/components/layout/containers/page-container';
import { GradientMesh } from '@/components/layout/background/gradient-mesh';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={poppins.variable} suppressHydrationWarning>
			<body
				cz-shortcut-listen="true"
				className="text-zinc-50 min-h-screen bg-zinc-950"
			>
				<GradientMesh />
				<Header />
				<PageContainer>{children}</PageContainer>
			</body>
		</html>
	);
}
