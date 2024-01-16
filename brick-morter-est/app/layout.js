import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
	title: 'Brick Morter Estimator',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}
