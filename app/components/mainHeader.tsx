import Link from "next/link";

export default function MainHeader() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
                <Link href="/meals">Meals</Link>
                <Link href="/community">Community</Link>
                <Link href="/about">About</Link>
            </li>
        </ul>
    );
}
