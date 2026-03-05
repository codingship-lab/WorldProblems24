import Link from "next/link";

export default function PrivacyPage() {
    return (
        <div>
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm">
                <Link href="/" className="text-2xl font-black tracking-tighter sm:text-3xl">
                    WorldProblems24
                </Link>
            </header>
            <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        Your privacy is important to us. It is WorldProblems24's policy to respect your privacy regarding any information we may collect from you across our website.
                    </p>
                    <h2 className="text-xl font-semibold text-foreground pt-4">1. Information We Collect</h2>
                    <p>
                        We only collect information about you if we have a reason to do so–for example, to provide our Services, to communicate with you, or to make our Services better. We collect this information from three sources: if and when you provide information to us, automatically through operating our Services, and from outside sources. For this demonstration application, we do not actively collect personal data.
                    </p>
                    <h2 className="text-xl font-semibold text-foreground pt-4">2. How We Use Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services. We do not share your personal information with third-parties except as required by law.
                    </p>
                     <h2 className="text-xl font-semibold text-foreground pt-4">3. Contact Us</h2>
                    <p>
                        For any questions about our privacy policy, please contact us at <a href="mailto:contactus@codingship.qzz.io" className="text-accent hover:text-foreground">contactus@codingship.qzz.io</a>.
                    </p>
                </div>
            </main>
        </div>
    );
}
