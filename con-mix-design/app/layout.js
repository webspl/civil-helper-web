import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
	title: 'Concrete Mix Design',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	)
}
