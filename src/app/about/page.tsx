import AboutHeader from '@/components/about/about-header';
import ExperienceSection from '@/components/about/experience-section';
import SkillsSection from '@/components/about/skills-section';
import Section from '@/components/layout/containers/section';

export default function About() {
	return (
		<>
			<AboutHeader />
			<Section className="py-20">
				<div className="space-y-12">
					<ExperienceSection />
					<SkillsSection />
				</div>
			</Section>
		</>
	);
}
