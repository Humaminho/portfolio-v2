import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
	src: string;
	title: string;
	description: string;
	stack: string[];
}

function ProjectCard({ src, title, description, stack }: ProjectCardProps) {
	return (
		<Link
			href="/work"
			className="group p-6 rounded-xl border bg-zinc-950/70 border-zinc-800 hover:border-zinc-700 transition-colors"
		>
			<div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden relative mb-4">
				<Image
					src={src}
					alt={title}
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-500"
				/>
			</div>
			<h3 className="text-lg font-medium mb-2 group-hover:text-zinc-50 transition-colors">
				{title}
			</h3>
			<p className="text-zinc-400 text-sm mb-4 line-clamp-2">
				{description}
			</p>
			<div className="flex flex-wrap gap-2">
				{stack.slice(0, 3).map((tech) => (
					<span
						key={tech}
						className="px-2 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400"
					>
						{tech}
					</span>
				))}
			</div>
		</Link>
	);
}

export default ProjectCard;
