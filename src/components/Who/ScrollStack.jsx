import { useLayoutEffect, useRef, useCallback, useEffect } from "react";
import "./ScrollStack.css";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 120,
  itemScale = 0.03,
  itemStackDistance = 32,
  stackPosition = "22%",
  scaleEndPosition = "10%",
  baseScale = 0.86,
  useWindowScroll = true,
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const cardOffsetsRef = useRef([]);
  const rafRef = useRef(null);

  const getPxValue = useCallback((value, containerHeight) => {
    return typeof value === "string" ? (parseFloat(value) / 100) * containerHeight : value;
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = useWindowScroll ? window.scrollY : scrollerRef.current?.scrollTop ?? 0;
    const containerHeight = window.innerHeight;
    const stackPosPx = getPxValue(stackPosition, containerHeight);
    const scaleEndPx = getPxValue(scaleEndPosition, containerHeight);

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const initialTop = cardOffsetsRef.current[index];
      if (typeof initialTop !== "number") return;
      const pinTrigger = initialTop - stackPosPx - index * itemStackDistance;

      let translateY = 0;
      if (scrollTop >= pinTrigger) {
        translateY = scrollTop - pinTrigger;
      }

      const scaleStart = initialTop - stackPosPx;
      const scaleEnd = initialTop - scaleEndPx;

      let progress = 0;
      if (scrollTop > scaleStart) {
        progress = Math.min(1, (scrollTop - scaleStart) / (scaleEnd - scaleStart));
      }

      const targetScale = baseScale + index * itemScale;
      const currentScale = 1 - progress * (1 - targetScale);

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${currentScale})`;
    });
  }, [
    baseScale,
    getPxValue,
    itemScale,
    itemStackDistance,
    scaleEndPosition,
    stackPosition,
    useWindowScroll,
  ]);

  const refreshOffsets = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    cardOffsetsRef.current = cards.map((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top + window.scrollY;
    });

    updateCardTransforms();
  }, [updateCardTransforms]);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateCardTransforms();
    });
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return undefined;

    const cards = Array.from(scroller.querySelectorAll(".scroll-stack-card"));
    cardsRef.current = cards;

    const refreshOffsets = () => {
      cardOffsetsRef.current = cards.map((card) => {
        const rect = card.getBoundingClientRect();
        return rect.top + window.scrollY;
      });
    };

    refreshOffsets();
    window.addEventListener("resize", refreshOffsets);

    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
      card.style.webkitTransform = "translateZ(0)";
    });
    refreshOffsets();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [itemDistance, refreshOffsets]);

  useEffect(() => {
    const scrollTarget = useWindowScroll ? window : scrollerRef.current;
    if (!scrollTarget) return undefined;

    const cards = cardsRef.current;
    const imageElements = cards.flatMap((card) =>
      Array.from(card.querySelectorAll("img"))
    );

    const onLoad = () => {
      refreshOffsets();
    };

    refreshOffsets();
    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", refreshOffsets);
    window.addEventListener("load", onLoad);

    imageElements.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", onLoad);
      }
    });

    const settleTimer = window.setTimeout(refreshOffsets, 250);

    return () => {
      scrollTarget.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", refreshOffsets);
      window.removeEventListener("load", onLoad);
      imageElements.forEach((img) => {
        img.removeEventListener("load", onLoad);
      });
      window.clearTimeout(settleTimer);
    };
  }, [handleScroll, refreshOffsets, useWindowScroll]);

  return (
    <div
      className={`scroll-stack-scroller ${useWindowScroll ? "scroll-stack-scroller--window" : ""} ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" style={{ height: "60vh" }} />
      </div>
    </div>
  );
};

export default ScrollStack;
