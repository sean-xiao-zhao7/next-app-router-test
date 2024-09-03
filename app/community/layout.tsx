export default function CommnunityLayout({
    community,
    latest,
}: Readonly<{
    community: React.ReactNode;
    latest: React.ReactNode;
}>) {
    return (
        <>
            <div>{latest}</div>
            <div>{community}</div>
        </>
    );
}
