import Section from '../layout/containers/section';

function RecentPosts() {
	return (
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
								voluptates, voluptatum dolores quae quibusdam
								quas quidem quos nemo quia.
							</p>
						</article>
					))}
				</div>
			</div>
		</Section>
	);
}

export default RecentPosts;
