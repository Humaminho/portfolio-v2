import { cn } from '@/lib/utils';

export default function Section({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<section className={cn('w-full', className)}>
			<div className="max-container">{children}</div>
		</section>
	);
}
