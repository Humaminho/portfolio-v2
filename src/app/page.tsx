import PageContainer from '@/components/layout/containers/page-container';
import Section from '@/components/layout/containers/section';

export default function Home() {
	return (
		<>
			<Section>
				<div className="space-y-6">
					<h1 className="text-4xl md:text-6xl font-bold">
						Hi, I&apos;m{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
							John Doe
						</span>
					</h1>
					<p className="text-xl md:text-2xl text-zinc-400 max-w-2xl">
						A full-stack developer specializing in building
						exceptional digital experiences. Currently focused on
						building accessible web applications at{' '}
						<a
							href="#"
							className="text-zinc-100 hover:text-zinc-50 underline underline-offset-4"
						>
							Company Name
						</a>
						.
					</p>
					<div className="flex gap-4">
						<button className="px-6 py-3 rounded-xl bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors">
							Get in touch
						</button>
						<button className="px-6 py-3 rounded-xl border border-zinc-400 text-zinc-400 hover:text-zinc-50 hover:border-zinc-50 transition-colors">
							View work
						</button>
					</div>
				</div>
			</Section>

			<Section className="py-20">
				<div className="space-y-4">
					<h2 className="text-2xl font-semibold">
						Featured Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
							>
								<div className="aspect-video bg-zinc-800 rounded-lg mb-4" />
								<h3 className="text-lg font-medium mb-2">
									Project {i}
								</h3>
								<p className="text-zinc-400">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quisquam voluptas, quod,
									voluptates, voluptatum dolores quae
									quibusdam quas quidem quos nemo quia.
								</p>
							</div>
						))}
					</div>
				</div>
			</Section>

			<Section className="py-20">
				<div className="space-y-4">
					<h2 className="text-2xl font-semibold">Recent Posts</h2>
					<div className="space-y-6">
						{[1, 2, 3].map((i) => (
							<article
								key={i}
								className="p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
							>
								<time className="text-sm text-zinc-400">
									January {i}, 2024
								</time>
								<h3 className="text-lg font-medium mt-2 mb-3">
									Blog Post {i}
								</h3>
								<p className="text-zinc-400">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quisquam voluptas, quod,
									voluptates, voluptatum dolores quae
									quibusdam quas quidem quos nemo quia.
								</p>
							</article>
						))}
					</div>
				</div>
			</Section>
		</>
	);
}
