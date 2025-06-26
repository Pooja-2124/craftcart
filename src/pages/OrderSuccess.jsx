import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-green-600">🎉 Order Placed Successfully!</h1>
      <p className="mt-4 text-gray-700">Thank you for your purchase.</p>
      <Link
        to="/"
        className="inline-block mt-6 px-6 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
      >
        Back to Shop
      </Link>
    </div>
  );
}

export default OrderSuccess;
