import Section from '../layout/containers/section';

function ContactHeader() {
	return (
		<Section>
			<div className="space-y-6">
				<h1 className="text-4xl font-bold">Get in Touch</h1>
				<p className="text-xl text-zinc-400 max-w-2xl">
					I&apos;m always interested in hearing about new projects and
					opportunities. Feel free to reach out through the form or
					via email.
				</p>
			</div>
		</Section>
	);
}

export default ContactHeader;
