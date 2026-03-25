"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ThankYouPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const plan = searchParams.get("plan");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-10">
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        Thank You for Subscribing!
      </h1>
      <p className="text-gray-700 mb-2">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Plan:</strong> {plan}
      </p>
      <p className="text-gray-700">
        We appreciate your support for our charity events!
      </p>
    </main>
  );
}

export default function ThankYou() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouPage />
    </Suspense>
  );
}