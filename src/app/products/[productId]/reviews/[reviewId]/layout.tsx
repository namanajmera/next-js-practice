export default function ReviewDetailsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            <h2>Fetaured Reviews</h2>
        </div>
    );
}