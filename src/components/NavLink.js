import React from "react";
import { Link } from "gatsby";

export default function NavLink({ to, children, className = "", ...rest }) {
  return (
    <Link
      to={to}
      getProps={({ isCurrent }) => {
        const active = isCurrent;
        return {
          className:
            `${className} px-3 py-2` +
            (active ? " bg-primary text-white font-semibold" : ""),
          "aria-current": isCurrent ? "page" : undefined,
        };
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}