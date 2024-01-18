import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from "./components/Loading";

export const metadata = {
	title: 'Residential Building Cost Assumption',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>
				<Loading />
				{children}
			</body>
		</html>
	);
}
