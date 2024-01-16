import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
	title: 'Residential Building Cost Assumption',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	)
}
