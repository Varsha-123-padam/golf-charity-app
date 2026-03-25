// src/app/page.tsx
import Link from "next/link";

// Navbar component
function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-green-800 text-white shadow-md">
      <h1 className="text-xl font-bold">Golf Charity</h1>
      <div className="flex gap-6">
        <Link href="/" className="hover:text-green-200 transition">Home</Link>
        <Link href="/events" className="hover:text-green-200 transition">Events</Link>
        <Link href="/subscribe" className="hover:text-green-200 transition">Subscribe</Link>
        <Link href="/login" className="hover:text-green-200 transition">Login</Link>
      </div>
    </nav>
  );
}

// Home Page
export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Golf Charity Platform
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Play Golf. Support Causes. Make an Impact.
        </p>

        <div className="flex gap-4">
          <Link href="/events">
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">
              View Events
            </button>
          </Link>

          <Link href="/subscribe">
            <button className="bg-white border border-green-700 text-green-700 px-6 py-2 rounded-lg hover:bg-green-100">
              Subscribe
            </button>
          </Link>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Subscription Plans
        </h2>

        <div className="flex justify-center gap-8 flex-wrap">

          <div className="bg-white p-6 rounded-lg shadow-md w-64">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-gray-600 mb-4">₹199/month</p>
            <p className="mb-4">Access to local events</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded">
              Choose Plan
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-64">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-gray-600 mb-4">₹499/month</p>
            <p className="mb-4">All events + priority booking</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded">
              Choose Plan
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-64">
            <h3 className="text-xl font-semibold mb-2">VIP</h3>
            <p className="text-gray-600 mb-4">₹999/month</p>
            <p className="mb-4">Exclusive events + donation tracking</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded">
              Choose Plan
            </button>
          </div>

        </div>
      </section>

      {/* Charity Section */}
      <section className="p-10 bg-green-100 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Our Impact
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          Your subscriptions help us support meaningful causes.
        </p>

        <div className="flex justify-center gap-8 flex-wrap">

          <div className="bg-white p-6 rounded-lg shadow-md w-60">
            <h3 className="text-xl font-bold text-green-700">₹50,000+</h3>
            <p>Donated to Education</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-60">
            <h3 className="text-xl font-bold text-green-700">₹30,000+</h3>
            <p>Healthcare Support</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-60">
            <h3 className="text-xl font-bold text-green-700">₹20,000+</h3>
            <p>Environmental Causes</p>
          </div>

        </div>
      </section>

    </main>
  );
}