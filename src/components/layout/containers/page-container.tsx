interface PageContainerProps {
	children: React.ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
	return (
		<main className="pt-[var(--header-height)]">
			<div className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-56">
				{children}
			</div>
		</main>
	);
}
export default PageContainer;
