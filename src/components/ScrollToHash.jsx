import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        let frameId;

        const scrollToSection = () => {
            const element = document.getElementById(
                decodeURIComponent(hash.substring(1))
            );

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            } else {
                frameId = requestAnimationFrame(scrollToSection);
            }
        };

        scrollToSection();

        return () => cancelAnimationFrame(frameId);
    }, [pathname, hash]);

    return null;
};

export default ScrollToHash;