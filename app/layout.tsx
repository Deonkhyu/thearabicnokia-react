import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider"
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
	subsets: ["latin"],
	weight: ['400', '700'],
});

export const metadata: Metadata = {
	title: "Semenggoh Nature Reserve",
	description: "Semenggoh Nature Reserve website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body className={cinzel.className}>
				<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
