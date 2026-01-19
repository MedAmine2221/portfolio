"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";
import Link from "next/link";

import { recommendations } from "@/constants";

export default function RecommendationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) {
      // swipe left → next
      setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    }

    if (distance < -minSwipeDistance) {
      // swipe right → prev
      setCurrentIndex((prev) =>
        prev === 0 ? recommendations.length - 1 : prev - 1,
      );
    }

    setIsAutoPlay(false);
  };

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, recommendations.length]);

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Recommandations</h2>

      <div className="relative">
        <div
          className="overflow-hidden"
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          onTouchStart={onTouchStart}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {recommendations.map((rec, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card className="max-w-2xl mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="justify-between pb-4">
                    <div className="flex gap-4">
                      <div className="avatar placeholder">
                        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold ring-2 ring-primary">
                          {rec.username
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <Link href={rec.link}>
                          <h4 className="text-lg font-bold text-default-700">
                            {rec.username}
                          </h4>
                        </Link>
                        <h5 className="text-sm tracking-tight text-primary font-semibold">
                          {rec.role}
                        </h5>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="px-6 py-4">
                    <p className="text-default-600 leading-relaxed text-justify">
                      {rec.recomm}
                    </p>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {recommendations.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "bg-primary w-8 h-3"
                : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
