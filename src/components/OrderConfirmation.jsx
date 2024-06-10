import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] };
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="mb-4 text-xl font-bold text-center text-black">
        Thank you for your order!
      </h1>
      <p className="text-center text-black mb-6">
        Your items will arrive within 3-5 working days. Here's what you ordered:
      </p>
      <div
        className={`grid ${
          cartItems.length === 1
            ? "grid-cols-1 justify-center"
            : "grid-cols-1 sm:grid-cols-2"
        } gap-4`}
      >
        {cartItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white p-5 border rounded-md shadow-md flex flex-col items-center ${
              cartItems.length === 1 ? "mx-auto w-full sm:w-1/2" : "w-full"
            }`}
          >
            <img
              className="h-48 w-32 object-contain mb-4"
              src={item.image}
              alt={item.title}
            />
            <div className="text-black text-center">
              <h2 className="font-bold mb-2">{item.title}</h2>
              <div className="flex flex-col mb-4 text-center md:text-left">
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <h2 className="font-bold text-black">
          Total Amount: ${totalAmount.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default OrderConfirmation;
