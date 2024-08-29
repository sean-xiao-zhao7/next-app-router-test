import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "./components/mainHeader";

export const metadata: Metadata = {
    title: "Next App Router Test",
    description: "Next App Router Test",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <MainHeader />
                {children}
            </body>
        </html>
    );
}
