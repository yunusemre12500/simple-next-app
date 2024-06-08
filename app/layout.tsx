import type { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren): JSX.Element {
	return (
		<>
			<html lang="en">
				<title>Home Page</title>
			</html>

			<body>{children}</body>
		</>
	);
}
