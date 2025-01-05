import Section from '../layout/containers/section';
import WorkCard from './work-card';
import projects from '@/data/projects';

function ProjectsSection() {
	return (
		<Section className="py-20">
			<div className="grid grid-cols-1 gap-12">
				{projects.map((project) => (
					<WorkCard key={project.id} {...project} />
				))}
			</div>
		</Section>
	);
}

export default ProjectsSection;
