import Link from 'next/link';
import SvgLogo from './svg-logo';

function Logo() {
	return (
		<Link href="/" className="text-lg font-semibold">
			<SvgLogo />
		</Link>
	);
}

export default Logo;
