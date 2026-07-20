/**
 * Placeholder icon set.
 *
 * These are stand-ins so the header renders correctly today. Drop your own
 * SVGs in this file (or split them into separate files) and keep the same
 * component names + `className="size-*"` pattern used across the header
 * components — nothing else needs to change.
 */
import cartIcon from "../../assets/icons/cart.svg";
import wishListIcon from "../../assets/icons/wishlist-icon.svg";
import accountIcon from "../../assets/icons/account-icon.svg";
import compareIcon from "../../assets/icons/compare-icon.svg";
import logoNest from "../../assets/logos/nest.png";


export function CompareIcon(props) {
    return <img src={compareIcon} alt="compare" {...props} />;
}

export function WishlistIcon(props) {
  return <img src={wishListIcon} alt="wishlist" {...props} />;
}

export function CartIcon(props) {
  return <img src={cartIcon} alt="cart" {...props} />;
}

export function AccountIcon(props) {
    return <img src={accountIcon} alt="account" {...props} />;
}

export function HeadsetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" strokeLinecap="round" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.4" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.4" />
      <path d="M20 19.5a3.5 3.5 0 0 1-3.5 3.5H14" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.6-3.6" strokeLinecap="round" />
    </svg>
  );
}

export function GridIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.2" />
      <rect x="14" y="3" width="7" height="7" rx="1.2" />
      <rect x="3" y="14" width="7" height="7" rx="1.2" />
      <rect x="14" y="14" width="7" height="7" rx="1.2" />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FlashIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function LeafLogoIcon(props) {
      return <img src={logoNest} alt="" {...props} />;
}
