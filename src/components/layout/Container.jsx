/**
 * The single source of truth for the site's horizontal spacing.
 * Every section of the site should wrap its content in this so the
 * left/right gutters stay consistent from the header down.
 */
export default function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
