import Header from '@/components/layout/header';
import PageContainer from '@/components/layout/containers/page-container';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body cz-shortcut-listen="true" className="bg-zinc-950 text-zinc-50">
				<Header />
				<PageContainer>{children}</PageContainer>
			</body>
		</html>
	);
}
