import ContactForm from '@/components/contact/contact-form';
import ContactHeader from '@/components/contact/contact-header';
import ContactInfo from '@/components/contact/contact-info';
import Section from '@/components/layout/containers/section';

export default function Contact() {
	return (
		<>
			<ContactHeader />
			<Section className="py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<ContactInfo />
					<ContactForm />
				</div>
			</Section>
		</>
	);
}
