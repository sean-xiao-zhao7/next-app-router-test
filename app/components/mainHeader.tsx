import Link from "next/link";

export default function MainHeader() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </li>
        </ul>
    );
}
