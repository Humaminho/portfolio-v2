import Section from '../layout/containers/section';

function WorkHeader() {
	return (
		<Section>
			<div className="space-y-6">
				<h1 className="text-4xl font-bold">My Work</h1>
				<p className="text-xl text-zinc-400 max-w-2xl">
					A collection of my recent projects. Each project is crafted
					with attention to detail and a focus on user experience.
				</p>
			</div>
		</Section>
	);
}

export default WorkHeader;
