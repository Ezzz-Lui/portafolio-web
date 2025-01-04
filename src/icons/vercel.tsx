"use client";

import * as React from "react";
import type { SVGProps } from "react";
import { useTheme } from "next-themes";

const Vercel = (props: SVGProps<SVGSVGElement>) => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <svg
      viewBox="0 0 256 222"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      className={currentTheme === "dark" ? "svg-dark" : "svg-light"}
      {...props}
    >
      <path
        fill={currentTheme === "dark" ? "#fff" : "#000"} // Cambia el color según el tema
        d="m128 0 128 221.705H0z"
      />
    </svg>
  );
};

export default Vercel;
