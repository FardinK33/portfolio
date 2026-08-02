"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const rafId = useRef<number | null>(null);
    const pos = useRef({ x: -100, y: -100 });
    const isHovering = useRef(false);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        const applyTransform = (x: number, y: number, hovering: boolean) => {
            dot.style.transform = `translate(${x - 4}px, ${y - 4}px) scale(${hovering ? 0 : 1})`;
            ring.style.transform = `translate(${x - 16}px, ${y - 16}px) scale(${hovering ? 2.2 : 1})`;
        };

        const checkHover = (el: Element | null): boolean => {
            if (!el) return false;
            const target = el as HTMLElement;
            return (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                !!target.closest("a") ||
                !!target.closest("button") ||
                target.classList.contains("cursor-pointer")
            );
        };

        const onMouseMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };

            if (rafId.current !== null) return;
            rafId.current = requestAnimationFrame(() => {
                rafId.current = null;
                const { x, y } = pos.current;
                const el = document.elementFromPoint(x, y);
                const hovering = checkHover(el);
                isHovering.current = hovering;
                applyTransform(x, y, hovering);
            });
        };

        // Fix: on scroll the page moves under the cursor without any mouse event.
        // Re-check what element is under the current cursor position using elementFromPoint.
        const onScroll = () => {
            if (rafId.current !== null) return;
            rafId.current = requestAnimationFrame(() => {
                rafId.current = null;
                const { x, y } = pos.current;
                const el = document.elementFromPoint(x, y);
                const hovering = checkHover(el);
                if (hovering !== isHovering.current) {
                    isHovering.current = hovering;
                    applyTransform(x, y, hovering);
                }
            });
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("scroll", onScroll);
            if (rafId.current !== null) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <>
            {/* Main Cursor Dot */}
            <div
                ref={dotRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "var(--foreground)",
                    pointerEvents: "none",
                    zIndex: 9999,
                    willChange: "transform",
                    transition: "transform 80ms linear",
                    opacity: 0.9,
                }}
            />

            {/* Outer Ring */}
            <div
                ref={ringRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "1.5px solid var(--foreground)",
                    pointerEvents: "none",
                    zIndex: 9999,
                    willChange: "transform",
                    transition: "transform 120ms ease-out",
                    opacity: 0.7,
                }}
            />
        </>
    );
}
