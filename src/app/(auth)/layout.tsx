"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayoutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const links = [
        {
            title: 'Login',
            url: '/login',
        },
        {
            title: 'Register',
            url: '/register',
        },
        {
            title: 'Forgot Password',
            url: '/forgot-password',
        },
    ];
    const pathname = usePathname();
    return (
        <div>
            {
                links && links.map((ele) => {
                    const isActive = pathname.match(ele.url);
                    return (
                        <Link key={ele.url} href={ele.url}>
                            <span className={isActive ? "font-bold text-purple-500 p-4" : "font-light text-blue-600 p-4"}>{ele.title}</span>
                        </Link>
                    )
                })
            }
            {children}
        </div>
    );
}