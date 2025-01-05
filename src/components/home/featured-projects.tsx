import Section from '../layout/containers/section';
import ProjectCard from './project-card';
import projects from '@/data/projects';

function FeaturedProjects() {
	return (
		<Section className="py-20">
			<div className="space-y-4">
				<h2 className="text-2xl font-semibold">Featured Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							src={project.src}
							title={project.title}
							description={project.description}
							stack={project.stack}
						/>
					))}
				</div>
			</div>
		</Section>
	);
}

export default FeaturedProjects;
