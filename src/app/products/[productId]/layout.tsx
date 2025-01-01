export default function ProductDetailsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            <h2>Fetaured Products</h2>
        </div>
    );
}