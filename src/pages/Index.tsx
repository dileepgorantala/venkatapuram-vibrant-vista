import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ChevronRight, Image, MapPin, Play, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const Index = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const features = [
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Rich Cultural Heritage",
      description: "Our village preserves centuries-old traditions, festivals, and practices that showcase our cultural identity.",
      bgColor: "bg-gradient-to-br from-amber-500 to-amber-700"
    },
    {
      icon: <MapPin className="h-10 w-10 text-white" />,
      title: "Scenic Landscapes",
      description: "Surrounded by rolling hills, lush greenery, and pristine water bodies, Venkatapuram is a visual delight.",
      bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-700"
    },
    {
      icon: <Image className="h-10 w-10 text-white" />,
      title: "Modern Amenities",
      description: "While preserving our traditions, we have embraced modern facilities and infrastructure for a comfortable lifestyle.",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      icon: <Calendar className="h-10 w-10 text-white" />,
      title: "Vibrant Community",
      description: "Our close-knit community celebrates together and supports each other through all of life's moments.",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700"
    }
  ];

  const testimonials = [
    {
      quote: "Visiting Venkatapuram was like stepping into a perfect blend of tradition and modernity. The hospitality was unmatched!",
      author: "Arjun Sharma",
      role: "Travel Blogger",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      quote: "The cultural festivals of Venkatapuram are a visual treat. I've never seen such vibrant celebrations anywhere else.",
      author: "Priya Patel",
      role: "Photographer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      quote: "As someone who grew up in Venkatapuram, I'm proud to see how the village has developed while keeping its soul intact.",
      author: "Rajesh Kumar",
      role: "Village Elder",
      avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80"
    }
  ];
  
  const highlights = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
      title: "Stunning Natural Beauty",
      description: "Explore breathtaking landscapes and serene environments"
    },
    {
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80",
      title: "Sacred Temples",
      description: "Visit ancient places of worship with remarkable architecture"
    },
    {
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80",
      title: "Vibrant Festivals",
      description: "Experience the colorful celebrations that happen year-round"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section with Interactive Cards */}
      <Section 
        title="Experience Venkatapuram" 
        subtitle="Discover what makes our village special and why it's a perfect blend of tradition and modernity."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-2xl hover:shadow-xl transition-all duration-500 overflow-hidden ${
                activeFeature === index ? "scale-105 z-10" : "scale-100"
              } hover:scale-105 cursor-pointer reveal`} 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveFeature(index)}
            >
              <div className={`${feature.bgColor} p-6 text-white`}>
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-center text-white">{feature.title}</CardTitle>
              </div>
              <CardContent className="p-6">
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Interactive Village Highlights Carousel */}
      <Section 
        title="Our Beautiful Village" 
        subtitle="Take a visual journey through Venkatapuram's breathtaking landscapes and vibrant community life."
        dark
      >
        <div className="mb-12">
          <Carousel className="w-full max-w-5xl mx-auto reveal">
            <CarouselContent>
              {highlights.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/80 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static mr-2 bg-white/20 hover:bg-white/40 border-white/10" />
              <CarouselNext className="relative static ml-2 bg-white/20 hover:bg-white/40 border-white/10" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center reveal mt-10">
          <Link to="/gallery">
            <Button className="bg-white text-village-green hover:bg-village-cream font-medium text-lg px-6 py-6">
              Explore Full Gallery
            </Button>
          </Link>
        </div>
      </Section>
      
      {/* Video Section */}
      <Section 
        title="Experience Village Life"
        className="overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl reveal mb-12">
            <video
              ref={videoRef}
              poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
              className="w-full aspect-video object-cover"
              controls
            >
              <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button 
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
              onClick={playVideo}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-village-gold/90 text-white group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 md:w-10 md:h-10 ml-1" />
              </div>
            </button>
          </div>
          <div className="text-center reveal">
            <h3 className="text-2xl md:text-3xl font-bold text-village-green mb-4">Experience Village Life</h3>
            <p className="text-muted-foreground">Take a virtual tour of Venkatapuram and immerse yourself in our culture</p>
          </div>
        </div>
      </Section>
      
      {/* Testimonials with Avatar Images */}
      <Section 
        title="Voices of Venkatapuram" 
        subtitle="Hear what visitors and residents have to say about their experiences in our village."
        className="bg-village-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 reveal" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="h-3 bg-village-green" />
              <div className="p-6">
                <blockquote className="text-lg italic text-muted-foreground mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-village-teal">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-village-green to-village-green/80">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Visit Venkatapuram Today
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Experience the magic of our village - from cultural celebrations to natural beauty, 
              there's something for everyone in Venkatapuram.
            </p>
            <Link to="/contact">
              <Button className="bg-village-gold hover:bg-village-gold/90 text-village-green font-medium text-lg px-8 py-6 rounded-full group">
                Plan Your Visit
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>
    </div>
  );
};

export default Index;
