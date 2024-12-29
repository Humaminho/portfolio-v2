import PageContainer from '@/components/layout/containers/page-container';
import Section from '@/components/layout/containers/section';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
	id: number;
	title: string;
	description: string;
	tags: string[];
	image: string;
	githubUrl?: string;
	liveUrl?: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description:
			'A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features include user authentication, product management, and payment integration.',
		tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
		image: '/projects/project-1.png',
		githubUrl: 'https://github.com',
		liveUrl: 'https://example.com',
	},
	{
		id: 2,
		title: 'Task Management App',
		description:
			'A collaborative task management application with real-time updates. Built using React, Firebase, and Material-UI.',
		tags: ['React', 'Firebase', 'Material-UI'],
		image: '/projects/project-2.png',
		githubUrl: 'https://github.com',
	},
	{
		id: 3,
		title: 'AI Content Generator',
		description:
			"An AI-powered content generation tool that helps create marketing copy. Integrated with OpenAI's GPT-3 API.",
		tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
		image: '/projects/project-3.png',
		liveUrl: 'https://example.com',
	},
	// Add more projects as needed
];

export default function Work() {
	return (
		<>
			<Section>
				<div className="space-y-6">
					<h1 className="text-4xl font-bold">My Work</h1>
					<p className="text-xl text-zinc-400 max-w-2xl">
						A collection of my recent projects. Each project is
						crafted with attention to detail and a focus on user
						experience.
					</p>
				</div>
			</Section>

			<Section>
				<div className="grid grid-cols-1 gap-12">
					{projects.map((project) => (
						<div
							key={project.id}
							className="group bg-zinc-950/70 flex flex-col lg:flex-row gap-8 p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
						>
							<div className="w-full lg:w-1/2">
								<div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden">
									{/* Replace with actual image */}
									<div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800" />
								</div>
							</div>

							<div className="w-full lg:w-1/2 space-y-4">
								<h2 className="text-2xl font-semibold group-hover:text-zinc-50 transition-colors">
									{project.title}
								</h2>

								<p className="text-zinc-400">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-zinc-400"
										>
											{tag}
										</span>
									))}
								</div>

								<div className="flex gap-4 pt-4">
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors"
										>
											<Github size={20} />
											<span>Source Code</span>
										</a>
									)}
									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors"
										>
											<ExternalLink size={20} />
											<span>Live Demo</span>
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</Section>
		</>
	);
}
