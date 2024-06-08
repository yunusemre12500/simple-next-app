import Link from "next/link";

export default function NotFound(): JSX.Element {
	return (
		<>
			<h2>404 Page Not Found</h2>

			<Link href="/">Go To Home</Link>
		</>
	);
}
