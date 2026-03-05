import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
    return (
        <div>
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm">
                <Link href="/" className="text-2xl font-black tracking-tighter sm:text-3xl">
                    WorldProblems24
                </Link>
            </header>
            <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Where does the data come from?</AccordionTrigger>
                        <AccordionContent>
                        The data is aggregated from various public sources, including government reports, international organizations like SIPRI and the IMF, and financial market data providers. We strive for accuracy but cannot guarantee it. Data is for demonstration purposes.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How often is the data updated?</AccordionTrigger>
                        <AccordionContent>
                        The "live" data is a simulation based on recent trends and average change rates. It's intended to be illustrative, not a precise real-time feed. Static data points are updated as new reports become available.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Can I use this data for research?</AccordionTrigger>
                        <AccordionContent>
                        You are welcome to use the data for personal and non-commercial purposes. However, please verify the data with the original sources for any serious research or publication as this is a demo application.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>How can I report an issue or suggest a new statistic?</AccordionTrigger>
                        <AccordionContent>
                        Please contact us at <a href="mailto:support@codingship.qzz.io" className="text-accent hover:text-foreground">support@codingship.qzz.io</a> with your feedback or suggestions.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
        </div>
    );
}
