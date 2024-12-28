import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import {Portfolio} from "@/components/Portfolio";
import {KeyMetrics} from "@/components/KeyMetrics";
import {Services} from "@/components/Services";
import {Contact} from "@/components/Contact";
import {Footer} from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Stack />
            <Portfolio/>
            <KeyMetrics/>
            <Services/>
            <Contact/>
            <Footer/>
        </>
    );
}
