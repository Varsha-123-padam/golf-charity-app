"use client"; // Important for forms in App Router
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh

    // Mock credentials (you can replace this with real backend later)
    if (email === "test@golf.com" && password === "123456") {
      setError("");
      
      // Save logged-in email in localStorage
      localStorage.setItem("userEmail", email);

      // Redirect to events page
      router.push("/events");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-green-700 text-white py-2 rounded hover:bg-green-800"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-500">
          Don't have an account?{" "}
          <Link href="/" className="text-green-700 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}