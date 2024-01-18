import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from "./components/Loading";

export const metadata = {
	title: 'Concrete Mix Design',
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
