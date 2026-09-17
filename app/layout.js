import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Mars Society India | India Chapter of The Mars Society",
  description:
    "The India Chapter of The Mars Society: a national platform for Mars research, analog missions, and community in India.",
  openGraph: {
    title: "Mars Society India",
    description:
      "The India Chapter of The Mars Society: a national platform for Mars research, analog missions, and community in India.",
    images: ["/posters/mars-orbit.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-void text-bone">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}