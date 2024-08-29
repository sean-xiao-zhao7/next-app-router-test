import Link from "next/link";

export default function MealsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Link href="/meals/share/1">Share Meal 1</Link>
            <Link href="/meals/share/2">Share Meal 2</Link>
            {children}
        </>
    );
}
