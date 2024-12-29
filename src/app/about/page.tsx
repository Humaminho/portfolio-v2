import PageContainer from '@/components/layout/containers/page-container';
import Section from '@/components/layout/containers/section';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const skills = {
	languages: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
	frontend: ['React', 'Next.js', 'Tailwind CSS', 'Material-UI'],
	backend: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL'],
	tools: ['Git', 'Docker', 'AWS', 'Figma'],
};

const experiences = [
	{
		id: 1,
		role: 'Senior Frontend Developer',
		company: 'Tech Company',
		duration: '2022 - Present',
		description:
			'Led the frontend development team in building scalable web applications. Implemented modern frontend architecture using Next.js and TypeScript.',
	},
	{
		id: 2,
		role: 'Full Stack Developer',
		company: 'Startup Inc',
		duration: '2020 - 2022',
		description:
			'Developed and maintained full-stack applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver features.',
	},
	{
		id: 3,
		role: 'Software Engineer',
		company: 'Digital Agency',
		duration: '2018 - 2020',
		description:
			'Built responsive web applications and e-commerce solutions. Worked directly with clients to gather requirements and implement solutions.',
	},
];

export default function About() {
	return (
		<>
			<Section>
				<div className="space-y-6">
					<h1 className="text-4xl font-bold">About Me</h1>
					<div className="text-xl text-zinc-400 space-y-4 max-w-2xl">
						<p>
							I'm a full-stack developer with over 5 years of
							experience in building web applications. I
							specialize in JavaScript technologies and have a
							passion for creating intuitive user interfaces.
						</p>
						<p>
							When I'm not coding, you can find me contributing to
							open-source projects, writing technical articles, or
							exploring new technologies.
						</p>
					</div>
					<div className="flex gap-4">
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
						>
							<Github className="w-6 h-6" />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
						>
							<Linkedin className="w-6 h-6" />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
						>
							<Twitter className="w-6 h-6" />
						</a>
						<a
							href="mailto:example@email.com"
							className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
						>
							<Mail className="w-6 h-6" />
						</a>
					</div>
				</div>
			</Section>

			<Section className="py-20">
				<div className="space-y-12">
					<div className="space-y-6">
						<h2 className="text-2xl font-semibold">Experience</h2>
						<div className="space-y-8">
							{experiences.map((experience) => (
								<div
									key={experience.id}
									className="bg-zinc-950/70 p-6 rounded-xl border border-zinc-800"
								>
									<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
										<h3 className="text-lg font-medium">
											{experience.role}
										</h3>
										<span className="text-zinc-400 text-sm">
											{experience.duration}
										</span>
									</div>
									<div className="text-zinc-400 mb-4">
										{experience.company}
									</div>
									<p className="text-zinc-400">
										{experience.description}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="space-y-6">
						<h2 className="text-2xl font-semibold">Skills</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{Object.entries(skills).map(([category, items]) => (
								<div key={category}>
									<h3 className="text-lg font-medium capitalize mb-3">
										{category}
									</h3>
									<div className="flex flex-wrap gap-2">
										{items.map((item) => (
											<span
												key={item}
												className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-zinc-400"
											>
												{item}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</Section>
		</>
	);
}
