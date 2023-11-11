import React from 'react'
import { useInView } from "react-intersection-observer";

export default function View({ children }) {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 1,
    });

    return (
        <div ref={ref} style={{ border: `2px solid black` }}>{children}</div>
    )
}
