"use client";
import ZoomImage from "@/components/app/zoomImage";
import { projects } from "@/constants";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Button, Image } from "@heroui/react";
import { useState, useEffect, useRef, useMemo } from "react";
import { FiZoomIn } from "react-icons/fi";

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [cardScales, setCardScales] = useState({});
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  
  const projectSelected = useMemo(()=>{
    const currentProj = projects.find((item)=>item.index === currentProject);
    return {img: currentProj?.img, title: currentProj?.title, desc: currentProj?.description};
  },[currentProject])
  
  const cardRefs = useRef([]);

  useEffect(() => {
    projects.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const newScales = {};
      
      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const cardCenter = rect.top + rect.height / 2;
          const screenCenter = windowHeight / 2;
          
          const distance = Math.abs(cardCenter - screenCenter);
          const maxDistance = windowHeight / 2;
          const scale = Math.max(0.85, Math.min(1.15, 1.15 - (distance / maxDistance) * 0.3));
          newScales[index] = scale;
        }
      });
      
      setCardScales(newScales);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [visibleCards]);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="text-center mb-24 space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          Projects
        </h1>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-8">
        {projects.map((item, index) => {
          const isVisible = visibleCards.includes(index);
          const scale = cardScales[index] || 0.85;
          return (
            <div
              key={item.index}
              ref={el => cardRefs.current[index] = el}
              className={`transform transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: `scale(${scale}) translateY(${isVisible ? 0 : '5rem'})`,
                transition: 'transform 0.3s ease-out, opacity 0.7s ease-out'
              }}
            >
              <Card 
                isFooterBlurred 
                className="w-full h-[600px] shadow-2xl hover:shadow-purple-500/50"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start bg-gradient-to-b from-black/60 to-transparent p-6">
                  <h4 className="text-white font-bold text-2xl mb-2">{item.title}</h4>
                  <Button onPress={() => setCurrentProject(item.index)}>
                    <FiZoomIn />
                  </Button>
                  {item.encours && (
                    <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                      En cours
                    </span>
                  )}
                </CardHeader>
                
                <Image
                  removeWrapper
                  alt={`${item.title} background`}
                  className="z-0 w-full h-full object-scale-down"
                  src={item.img[0] || "https://via.placeholder.com/800x400?text=Project+Image"}
                />
                
                <CardFooter className="absolute bg-black/60 backdrop-blur-md bottom-0 z-10 border-t-1 border-purple-500/50 p-8">
                  <div className="flex grow gap-4 items-center">
                    <div className="flex flex-col gap-3 flex-1">
                      <p className="text-base text-white/90">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.skills.slice(0, 4).map((skill, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-purple-500/30 text-purple-200 px-2 py-1 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 ml-4">
                    {item.lien && (
                      <Button 
                        radius="full" 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform" 
                        size="sm"
                        as="a"
                        href={item.lien}
                        target="_blank"
                      >
                        Voir l'app
                      </Button>
                    )}
                    {item.githubLink !== "" && (
                      <Button 
                        radius="full" 
                        className="bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 transition-transform" 
                        size="sm"
                        as="a"
                        href={item.githubLink}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
      
      {/* UN SEUL MODAL EN DEHORS DE LA BOUCLE */}
      <ZoomImage
        isOpen={currentProject !== null}
        onOpenChange={(open) => { if(!open) setCurrentProject(null) }}
        images={projectSelected.img ?? []}
        projectName={projectSelected.title ?? ""}
        projectDec={projectSelected.desc ?? ""}
      />
    </div>
  );
}