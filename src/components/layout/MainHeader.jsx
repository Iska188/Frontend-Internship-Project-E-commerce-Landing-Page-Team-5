import Container from "./Container";
import {
  SearchIcon,
  CompareIcon,
  WishlistIcon,
  CartIcon,
  AccountIcon,
  LeafLogoIcon,
} from "../icons";

function IconLink({ icon: Icon, label, count }) {
  return (
    <a
      href="#"
      className="group flex items-center gap-2 text-sm font-medium text-ink whitespace-nowrap"
    >
      <span className="relative flex items-center justify-center">
        <Icon className="size-6 text-ink/80 group-hover:text-brand transition-colors" />
        {count !== undefined && (
          <span className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-white">
            {count}
          </span>
        )}
      </span>
      <span className="hidden lg:inline">{label}</span>
    </a>
  );
}

export default function MainHeader() {
  return (
    <Container>
      <div className="flex items-center gap-6 py-5 lg:gap-10">
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center gap-2">
          <LeafLogoIcon />
        </a>

        {/* Search */}
        <div className="hidden flex-1 md:flex">
          <div className="flex w-full items-stretch overflow-hidden rounded-md border border-gray-200">
            <input
              type="text"
              placeholder="Search for products…"
              className="w-full min-w-0 px-4 text-sm text-ink placeholder:text-gray-400 focus:outline-none"
            />
            <button className="flex shrink-0 items-center gap-2 bg-brand px-6 text-sm font-medium text-white hover:bg-brand-dark transition-colors">
              <SearchIcon className="size-4 lg:hidden" />
              <span className="hidden lg:inline">Search</span>
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-6">
          <a
            href="#"
            className="hidden items-center gap-1 rounded-md border border-brand/40 px-4 py-2 text-sm font-medium text-brand hover:bg-brand hover:text-white transition-colors xl:flex"
          >
            Become Vendor <span aria-hidden>→</span>
          </a>

          <div className="hidden items-center gap-5 sm:flex">
            <IconLink icon={CompareIcon} label="Compare" count={1} />
            <IconLink icon={WishlistIcon} label="Wishlist" count={22} />
            <IconLink icon={CartIcon} label="Cart" count={0} />
            <IconLink icon={AccountIcon} label="Account" />
          </div>
        </div>
      </div>
    </Container>
  );
}
