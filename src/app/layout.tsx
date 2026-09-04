import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "lifetime.",
    description: "Speech 30 - Elements of Communication in a Song",
    keywords: ["lifetime", "ben & ben", "speech 30", "communication", "elements of communication", "up diliman"],
    authors: [{ name: "Jezzu Morrisen Quimosing", url: "https://j3z.dev" }],
    creator: "Jezzu Morrisen Quimosing",
    openGraph: {
        title: "lifetime.",
        description: "Speech 30 - Elements of Communication in a Song",
        url: "https://speech.j3z.dev",
        siteName: "lifetime.",
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
