import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: { default: "SevaSetu Salon — Book Your Time, Not The Queue", template: "%s · SevaSetu Salon" },
  description:
    "A live queue + appointment platform for salons in Patna. Take a token from home and get an alert when it's your turn. For salon owners: live queue, barbers, walk-ins and a daily report.",
  keywords: ["salon queue app", "barber booking Patna", "salon appointment", "SevaSetu"],
  openGraph: {
    title: "SevaSetu Salon — Book Your Time, Not The Queue",
    description: "Live salon queue + appointments for Patna.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport = { themeColor: "#004D40" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
