import Link from 'next/link';
import Section from '../layout/containers/section';

function HeroSection() {
	return (
		<Section>
			<div className="space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold">
					Hi, I&apos;m{' '}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
						Humam
					</span>
				</h1>
				<p className="text-xl md:text-2xl text-zinc-400 max-w-2xl">
					A full-stack developer specializing in creating modern,
					scalable solutions with a focus on exceptional user
					experiences.
				</p>
				<div className="flex gap-4">
					<Link
						href="/contact"
						className="px-6 py-3 rounded-xl bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors"
					>
						Get in touch
					</Link>
					<Link
						href="/work"
						className="px-6 py-3 rounded-xl border border-zinc-400 text-zinc-400 hover:text-zinc-50 hover:border-zinc-50 transition-colors"
					>
						View work
					</Link>
				</div>
			</div>
		</Section>
	);
}

export default HeroSection;
