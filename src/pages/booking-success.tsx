import Link from "next/link";

export default function BookingSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-6">
      <div className="bg-white p-8 rounded shadow text-center max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-4">✅ Booking Confirmed!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for booking with us. Our team will reach out to you shortly.
        </p>

        <Link href="/">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
