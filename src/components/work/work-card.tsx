import { Code2, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface WorkCardProps {
	src: string;
	title: string;
	description: string;
	features: string[];
	github: string;
	live: string;
	stack: string[];
	hasGitRepo: boolean;
}

function WorkCard({
	src,
	title,
	description,
	features,
	github,
	live,
	stack,
	hasGitRepo,
}: WorkCardProps) {
	return (
		<div className="group bg-zinc-950/70 flex flex-col lg:flex-row gap-8 p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
			<div className="w-full lg:w-1/2">
				<div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden relative">
					<Image
						src={src}
						alt={title}
						fill
						className="object-cover"
					/>
				</div>
			</div>

			<div className="w-full lg:w-1/2 space-y-6">
				<div className="space-y-4">
					<h2 className="text-2xl font-semibold group-hover:text-zinc-50 transition-colors">
						{title}
					</h2>

					<p className="text-zinc-400">{description}</p>
				</div>

				<div className="space-y-2">
					<h3 className="text-sm font-medium text-zinc-300">
						Features
					</h3>
					<ul className="space-y-2">
						{features.map((feature, index) => (
							<li
								key={index}
								className="text-sm text-zinc-400 flex gap-2"
							>
								<Code2 size={16} className="shrink-0 mt-1" />
								<span>{feature}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="space-y-2">
					<h3 className="text-sm font-medium text-zinc-300">
						Tech Stack
					</h3>
					<div className="flex flex-wrap gap-2">
						{stack.map((tech) => (
							<span
								key={tech}
								className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-zinc-400"
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				<div className="flex gap-4 pt-2">
					{hasGitRepo && (
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors"
						>
							<Github size={20} />
							<span>Source Code</span>
						</a>
					)}
					<a
						href={live}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors"
					>
						<ExternalLink size={20} />
						<span>Live Demo</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default WorkCard;
