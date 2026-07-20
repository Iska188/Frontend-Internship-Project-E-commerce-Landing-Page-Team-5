import Container from "./Container";
import { GridIcon, ChevronDownIcon, FlashIcon, HeadsetIcon } from "../icons";

const menu = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#" },
  { label: "Shop", href: "#", hasDropdown: true },
  { label: "Vendors", href: "#", hasDropdown: true },
  { label: "Mega Menu", href: "#", hasDropdown: true },
  { label: "Blog", href: "#", hasDropdown: true },
  { label: "Pages", href: "#", hasDropdown: true },
  { label: "Contact", href: "#" },
];

export default function NavBar() {
  return (
    <div className="hidden border-t border-gray-100 lg:block">
      <Container className="flex items-center justify-between">
        <button className="flex shrink-0 items-center gap-2 whitespace-nowrap bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark transition-colors">
          <GridIcon className="size-4" />
          Browse All Categories
          <ChevronDownIcon className="size-3.5" />
        </button>

        <nav className="flex items-center gap-5 pl-6 xl:gap-7 xl:pl-8">
          <a
            href="#"
            className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-ink hover:text-brand transition-colors"
          >
            <FlashIcon className="size-4 text-brand" />
            Hot Deals
          </a>

          {menu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors ${
                item.active ? "text-brand" : "text-ink hover:text-brand"
              }`}
            >
              {item.label}
              {item.hasDropdown && <ChevronDownIcon className="size-3.5" />}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 pl-6 xl:pl-8">
          <HeadsetIcon className="size-7 text-brand" />
          <div className="leading-tight whitespace-nowrap">
            <p className="text-base font-bold text-brand">1900 888 123</p>
            <p className="text-xs text-gray-400">24/7 Support Center</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
