"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SubscribePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const plans = [
    { name: "Basic", price: "₹199/month", benefits: ["Access to local events"] },
    { name: "Premium", price: "₹499/month", benefits: ["All events", "Priority booking"] },
    { name: "VIP", price: "₹999/month", benefits: ["Exclusive events", "Donation tracking"] },
  ];

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    const planFromURL = searchParams.get("plan");
    if (planFromURL) {
      setSelectedPlan(planFromURL);
    }
  }, [searchParams]);

  const handleSubscribe = () => {
    if (!email) {
      setMessage("Please enter an email");
      return;
    }
    if (!selectedPlan) {
      setMessage("Please choose a subscription plan");
      return;
    }
    if (subscribedEmails.includes(email)) {
      setMessage("Email already subscribed");
      return;
    }

    setSubscribedEmails([...subscribedEmails, email]);
    router.push(`/thank-you?email=${email}&plan=${selectedPlan}`);
    setEmail("");
    setSelectedPlan("");
  };

  return (
    <main className="min-h-screen bg-green-50 p-10">
      <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">
        Subscription Plans
      </h1>

      <div className="flex flex-col items-center mb-8">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded mb-4 w-80"
        />
        <button
          onClick={handleSubscribe}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Subscribe
        </button>
        {message && <p className="mt-2 text-red-600">{message}</p>}
      </div>

      <div className="flex justify-center gap-8 flex-wrap">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`bg-white p-6 rounded-lg shadow-md flex-1 min-w-[250px] max-w-xs cursor-pointer ${
              selectedPlan === plan.name ? "border-2 border-green-700" : ""
            }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-gray-600 mb-4">{plan.price}</p>
            <ul className="mb-4 list-disc list-inside">
              {plan.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

export default function Subscribe() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SubscribePage />
    </Suspense>
  );
}