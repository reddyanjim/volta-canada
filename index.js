
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="p-6 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">VoltaCanada</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/drive">Drive</Link>
          <Link href="/delivery">Delivery</Link>
        </nav>
      </header>
      <section className="px-6 py-12 text-center bg-gradient-to-r from-red-100 to-white">
        <h2 className="text-4xl font-bold mb-4">Proudly Canadian. Fully Local.</h2>
        <p className="text-lg max-w-2xl mx-auto">
          VoltaCanada is your homegrown ride-share and delivery app, launching soon in Toronto. Fair commissions, safer rides, and better support.
        </p>
        <div className="mt-6 space-x-4">
          <Link href="/drive" className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold">Become a Driver</Link>
          <Link href="/delivery" className="border border-red-600 text-red-600 px-6 py-3 rounded-full font-semibold">Join as Delivery Partner</Link>
        </div>
      </section>
    </main>
  );
}
