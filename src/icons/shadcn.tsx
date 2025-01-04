"use client";

import * as React from "react";
import type { SVGProps } from "react";
import { useTheme } from "next-themes";

const Shadcnui = (props: SVGProps<SVGSVGElement>) => {
    const { theme } = useTheme();
    const [currentTheme, setCurrentTheme] = React.useState<string | undefined>(undefined);

    React.useEffect(() => {
        setCurrentTheme(theme);
    }, [theme]);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            width="1em"
            height="1em"
            className={currentTheme === "dark" ? "svg-dark" : "svg-light"}
            {...props}
        >
            <path fill="none" d="M0 0h256v256H0z" />
            <path
                fill="none"
                stroke={currentTheme === "dark" ? "#fff" : "#000"}
                strokeWidth={25}
                strokeLinecap="round"
                d="M208 128l-80 80M192 40L40 192"
            />
        </svg>
    );
};

export default Shadcnui;
