function ContactForm() {
	return (
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
	);
}

export default ContactForm;
