import Link from "next/link";

export default function Home() {
  return (
    <div className="sm:pt-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <section className="min-h-screen flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold">Welcome to Zootopia</h1>
          <p className="text-lg text-gray-700">
            Discover a world where animals live in harmony, showcasing the
            beauty of diversity and cooperation.
          </p>
          <p>
            <Link href="/about" className="text-blue-500 hover:underline">
              Learn more about us
            </Link>
          </p>
        </section>
      </main>
      <footer className="text-sm text-gray-500 text-center">
        <p>© 2025 Zootopia. All rights reserved.</p>
      </footer>
    </div>
  );
}
