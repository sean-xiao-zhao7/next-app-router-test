import type { Metadata } from "next";
import "./globals.css";

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
            <body>{children}</body>
        </html>
    );
}
