import PageContainer from '@/components/layout/containers/page-container';
import Section from '@/components/layout/containers/section';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Contact() {
	return (
		<Section>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<div className="space-y-12">
					<div className="space-y-6">
						<h1 className="text-4xl font-bold">Get in Touch</h1>
						<p className="text-xl text-zinc-400 max-w-2xl">
							I&apos;m always interested in hearing about new
							projects and opportunities. Feel free to reach out
							through the form or via email.
						</p>
					</div>

					<div className="space-y-8">
						<div className="space-y-6">
							<h2 className="text-2xl font-semibold">
								Contact Information
							</h2>
							<div className="space-y-4">
								<div className="flex items-center gap-3 text-zinc-400">
									<Mail className="w-5 h-5" />
									<a
										href="mailto:example@email.com"
										className="hover:text-zinc-50 transition-colors"
									>
										example@email.com
									</a>
								</div>
								<div className="flex items-center gap-3 text-zinc-400">
									<Phone className="w-5 h-5" />
									<a
										href="tel:+1234567890"
										className="hover:text-zinc-50 transition-colors"
									>
										+1 (234) 567-890
									</a>
								</div>
								<div className="flex items-center gap-3 text-zinc-400">
									<MapPin className="w-5 h-5" />
									<span>San Francisco, CA</span>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">
								Social Media
							</h2>
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
							</div>
						</div>
					</div>
				</div>

				<div className="bg-zinc-950/70 p-8 rounded-xl border border-zinc-800">
					<form className="space-y-6">
						<div className="space-y-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="space-y-2">
									<label
										htmlFor="name"
										className="block text-sm font-medium text-zinc-400"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										required
									/>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="email"
										className="block text-sm font-medium text-zinc-400"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										required
									/>
								</div>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-zinc-400"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									required
								/>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="message"
									className="block text-sm font-medium text-zinc-400"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={6}
									className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
									required
								/>
							</div>
						</div>
						<button
							type="submit"
							className="w-full px-6 py-3 text-center rounded-xl bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</Section>
	);
}
