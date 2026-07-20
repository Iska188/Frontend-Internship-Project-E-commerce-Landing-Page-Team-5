import Container from "./Container";

const links = ["About Us", "My Account", "Wishlist", "Order Tracking"];

export default function TopBar() {
  return (
    <div className="hidden border-b border-gray-100 md:block">
      <Container className="flex h-10 items-center justify-between text-xs text-gray-500">
        <ul className="flex items-center gap-4">
          {links.map((label, i) => (
            <li key={label} className="flex items-center gap-4">
              <a href="#" className="hover:text-brand transition-colors">
                {label}
              </a>
              {i < links.length - 1 && <span className="text-gray-200">|</span>}
            </li>
          ))}
        </ul>

        <p className="text-brand font-medium">
          100% Secure delivery without contacting the courier
        </p>

        <div className="flex items-center gap-4">
          <span>
            Need help? Call Us:{" "}
            <a href="tel:+18880002222" className="text-brand font-medium">
              +1(888)000-2222
            </a>
          </span>
          <span className="text-gray-200">|</span>
          <button className="flex items-center gap-1 hover:text-brand transition-colors">
            English
          </button>
          <span className="text-gray-200">|</span>
          <button className="flex items-center gap-1 hover:text-brand transition-colors">
            INR
          </button>
        </div>
      </Container>
    </div>
  );
}
