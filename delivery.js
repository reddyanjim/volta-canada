
import Link from 'next/link';

export default function Delivery() {
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

      <section className="px-6 py-12 text-center bg-yellow-50">
        <h2 className="text-3xl font-bold mb-4">Deliver with VoltaCanada</h2>
        <p className="max-w-xl mx-auto text-lg mb-6">
          Deliver food or essentials in your area while keeping more of your earnings.
        </p>
        <ul className="text-left max-w-2xl mx-auto space-y-2">
          <li>🍁 Partner with local restaurants and stores</li>
          <li>🛵 Use a car, bike, or scooter</li>
          <li>📦 On-demand or scheduled delivery options</li>
          <li>📲 Simple app interface & route optimization</li>
        </ul>
        <div className="mt-8">
          <Link href="#" className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold">Join Now</Link>
        </div>
      </section>

      <footer className="mt-12 text-center py-6 border-t">
        <p>&copy; 2025 VoltaCanada. All rights reserved.</p>
      </footer>
    </main>
  );
}
