"use client"
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Avatar, Button } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function RecommendationCarousel() {
  const recommendations = [
    {
      username: "BOUSSADIA Marami",
      role: "Responsable RH",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHIYEYKgqACvQ/profile-displayphoto-scale_200_200/B4DZl2qWsVJEAY-/0/1758632439934?e=1768435200&v=beta&t=HNJikU4tiGFJ-DiLTO-RFRtOfmWrYB-sqP6CJPf_r2g",
      recomm: `J'ai eu le plaisir d'accompagner Mohamed Amine Lazreg lors de son stage chez Waialys Group, puis de le voir évoluer en tant que collaborateur au sein de notre équipe. Dès le début, il a fait preuve d'un grand professionnalisme, d'une capacité d'adaptation remarquable et d'un véritable engagement dans ses missions. Son sérieux, sa rigueur et sa capacité à travailler aussi bien de manière autonome qu'en équipe ont fortement contribué à la réussite de plusieurs projets.`,
      link: "https://www.linkedin.com/in/marami-boussadia-/"
    },
    {
      username: "Hamza Khlifi",
      role: "Tech Lead",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEx_ZkmUbMAHQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727439466229?e=1768435200&v=beta&t=eVooVt9lAufSN7V1D5bDpqIsCaZZEsx468GIT7mzwqA",
      recomm: `J'ai eu le plaisir de collaborer avec Mohamed Amine depuis son stage de fin d'études (PFE) au sein de notre équipe. Ses compétences techniques et son engagement lui ont permis d'être recruté en tant que développeur JavaScript après son stage. Il a contribué de manière significative au développement de l'application mobile de notre projet principal.`,
      link: "https://www.linkedin.com/in/hamza-khlifi-a8577114b/"

    },
    {
      username: "Bourawi Khlifi",
      role: "Scrum Master",
      avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFwSHFBLyo5HQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728251350653?e=1768435200&v=beta&t=fy9V4ESDwA8tLksABNruIWsLdZIZSKSpozkQ39ooYS4",
      recomm: `J'ai eu l'occasion de suivre le parcours de Mohamed Amine depuis son intégration en tant que stagiaire PFE jusqu'à son poste actuel de développeur JavaScript. Grâce à sa motivation et à ses compétences techniques, il a rapidement su gagner la confiance de l'équipe. Toujours impliqué et orienté résultats, Mohamed Amine se distingue par sa rigueur, sa curiosité et son excellent esprit collaboratif.`,
      link: "https://www.linkedin.com/in/bouraoui-khlifi/"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, recommendations.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    setIsAutoPlay(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Recommandations</h2>
      
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {recommendations.map((rec, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card className="max-w-2xl mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="justify-between pb-4">
                    <div className="flex gap-4">
                      <Avatar
                        isBordered
                        radius="full"
                        size="lg"
                        src={rec.avatar}
                        className="ring-2 ring-primary"
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <Link href={rec.link}>
                            <h4 className="text-lg font-bold text-default-700">{rec.username}</h4>
                        </Link>
                        <h5 className="text-sm tracking-tight text-primary font-semibold">{rec.role}</h5>
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

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-200 z-10 hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-200 z-10 hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {recommendations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "bg-primary w-8 h-3"
                : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <div className="flex justify-center mt-6">
        <Button
          size="sm"
          variant="flat"
          onPress={() => setIsAutoPlay(!isAutoPlay)}
          className="text-sm"
        >
          {isAutoPlay ? "⏸ Pause Auto-play" : "▶ Resume Auto-play"}
        </Button>
      </div>
    </div>
  );
}