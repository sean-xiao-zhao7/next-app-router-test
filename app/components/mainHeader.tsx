import Link from "next/link";

export default function MainHeader() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
                <Link href="/blog/1">Blog 1</Link>
                <Link href="/blog/2">Blog 2</Link>
                <Link href="/about">About</Link>
            </li>
        </ul>
    );
}
