import React, { useEffect, useRef, useState } from "react";

const Counter = ({
    end = 0,
    duration = 2000,
    suffix = "",
    prefix = "",
}) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);

    useEffect(() => {
        const element = counterRef.current;
        if (!element) return;

        let animationFrame;
        let started = false;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    observer.disconnect();

                    let startTime = null;

                    const animate = (timestamp) => {
                        if (startTime === null) startTime = timestamp;

                        const progress = Math.min(
                            (timestamp - startTime) / duration,
                            1
                        );

                        const easedProgress = 1 - Math.pow(1 - progress, 3);

                        setCount(Math.floor(end * easedProgress));

                        if (progress < 1) {
                            animationFrame = requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };

                    animationFrame = requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(animationFrame);
        };
    }, [end, duration]);

    return (
        <span ref={counterRef}>
            {prefix}{count.toLocaleString("en-IN")}{suffix}
        </span>
    );
};

export default Counter;