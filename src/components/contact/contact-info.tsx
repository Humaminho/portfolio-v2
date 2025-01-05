import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

function ContactInfo() {
	return (
		<div className="space-y-12">
			<div className="space-y-6">
				<h2 className="text-2xl font-semibold">Contact Information</h2>
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
				<h2 className="text-2xl font-semibold">Social Media</h2>
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
	);
}

export default ContactInfo;
