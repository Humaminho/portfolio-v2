const skills = {
	languages: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
	frontend: ['React', 'Next.js', 'Tailwind CSS', 'Material-UI'],
	backend: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL'],
	tools: ['Git', 'Docker', 'AWS', 'Figma'],
};

function SkillsSection() {
	return (
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
	);
}

export default SkillsSection;
