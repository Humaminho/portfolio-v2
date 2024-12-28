interface PageContainerProps {
	children: React.ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
	return (
		<main className="pt-[var(--header-height)]">
			<div className="py-6 md:py-10 lg:py-16 xl:py-20">{children}</div>
		</main>
	);
}

export default PageContainer;
