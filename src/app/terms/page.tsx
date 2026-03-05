import Link from "next/link";

export default function TermsPage() {
    return (
        <div>
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm">
                <Link href="/" className="text-2xl font-black tracking-tighter sm:text-3xl">
                    WorldProblems24
                </Link>
            </header>
            <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                    </p>
                    <h2 className="text-xl font-semibold text-foreground pt-4">1. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials on WorldProblems24's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title. The data is provided for informational purposes only and should not be considered professional advice.
                    </p>
                    <h2 className="text-xl font-semibold text-foreground pt-4">2. Disclaimer</h2>
                    <p>
                        The materials on WorldProblems24's website are provided on an 'as is' basis. WorldProblems24 makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. The live data is a simulation and does not represent real-time market or statistical data.
                    </p>
                     <h2 className="text-xl font-semibold text-foreground pt-4">3. Governing Law</h2>
                    <p>
                       These terms and conditions are governed by and construed in accordance with the laws of the applicable jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </p>
                </div>
            </main>
        </div>
    );
}
