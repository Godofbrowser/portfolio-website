import { ThemeProvider } from "@/containers/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { appDescription, person, appTitle, appUrl } from '../lib/constants'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const hasGoneLive = false

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  // metadataBase: new URL(appUrl),
  authors: [{ name: 'Emeke Ajeh', url: 'https://github.com/Godofbrowser' }],
  
  robots: {
    index: hasGoneLive,
    follow: true,
    nocache: true,
    googleBot: {
      index: hasGoneLive,
      // follow: false,
      // noimageindex: true,
      // 'max-video-preview': -1,
      // 'max-image-preview': 'large',
      // 'max-snippet': -1,
    },
  },

  title: {
    default: `${appTitle} - ${person.userFullName}`,
    template:  `%s | ${appTitle}`
  },
  description: appDescription,

  openGraph: {
    title: `${person.userFullName}'s Portfolio`,
    description: appDescription,
    siteName: `${person.userFullName}'s Portfolio`,
    images: [
      {
        url: `${appUrl}/images/profile-card-700x700.png`, // Must be an absolute URL
        width: 700,
        height: 700,
        alt: person.userFullName,
      },
      {
        url: `${appUrl}/images/profile-card-1280x640.png`, // Must be an absolute URL
        width: 1280,
        height: 640,
        alt: person.userFullName,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${person.userFullName}'s Portfolio`,
    description: appDescription,
    // siteId: '1467726470533754880',
    creator: '@godofbrowser',
    // creatorId: '1467726470533754880',
    images: [`${appUrl}/images/profile-card-1280x640.png`], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
