import Link from "next/link";

export default function Events() {
  // Sample events data (you can replace with dynamic data later)
  const events = [
    {
      title: "Charity Golf Tournament 2026",
      date: "April 15, 2026",
      location: "Green Valley Golf Club",
      description: "Join us for a fun tournament supporting education programs.",
    },
    {
      title: "Corporate Charity Golf Day",
      date: "May 10, 2026",
      location: "Sunset Hills Golf Course",
      description: "Corporate teams play for a cause: healthcare support.",
    },
    {
      title: "VIP Charity Golf Gala",
      date: "June 5, 2026",
      location: "Royal Greens",
      description: "Exclusive event with donation tracking for environmental causes.",
    },
  ];

  return (
    <main className="min-h-screen bg-green-50 p-10">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-green-800 text-white shadow-md mb-10">
        <h1 className="text-xl font-bold">Golf Charity</h1>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-green-200 transition">Home</Link>
          <Link href="/events" className="hover:text-green-200 transition">Events</Link>
          <Link href="/login" className="hover:text-green-200 transition">Login</Link>
        </div>
      </nav>

      {/* Page Title */}
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        Upcoming Events
      </h2>

      {/* Event Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {events.map((event, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md flex-1 min-w-[250px] max-w-xs">
  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
  <p className="text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p>
  <p className="text-gray-600 mb-3"><strong>Location:</strong> {event.location}</p>
  <p className="mb-4">{event.description}</p>
  <Link href={`/subscribe?plan=VIP`}>
    <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
      Subscribe
    </button>
  </Link>
</div>
        ))}
      </div>
    </main>
  );
}