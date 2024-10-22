import { FunctionComponent } from 'react';
import './globals.css';
interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<html>
			<body>
				<div>
					<main>
						{children}
					</main>
				</div>
			</body>
		</html>
	);
};

export default Layout;