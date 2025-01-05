import Section from '../layout/containers/section';

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

function ExperienceSection() {
	return (
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
	);
}

export default ExperienceSection;
