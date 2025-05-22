
import { useState } from "react";
import Section from "@/components/Section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Image, Play } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
      alt: "Village landscape with mountains and lake",
      category: "landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80",
      alt: "Beautiful forest path in the village",
      category: "landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80",
      alt: "Village coastline view",
      category: "landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
      alt: "Waterfall in village surroundings",
      category: "landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
      alt: "Misty morning in village mountains",
      category: "landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80",
      alt: "Village festival celebrations",
      category: "culture"
    },
    {
      src: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80",
      alt: "Traditional village architecture",
      category: "culture"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      alt: "Modern village life",
      category: "people"
    },
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
      alt: "Village residents at work",
      category: "people"
    }
  ];
  
  const videos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
      title: "Aerial View of Venkatapuram",
      duration: "2:45"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      title: "Village Festival Celebrations",
      duration: "4:12"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
      title: "Traditional Dance Performance",
      duration: "3:30"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
      title: "A Day in Venkatapuram",
      duration: "5:15"
    }
  ];
  
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };
  
  const closeDialog = () => {
    setSelectedImage(null);
  };
  
  const filterPhotosByCategory = (category: string) => {
    if (category === "all") return photos;
    return photos.filter(photo => photo.category === category);
  };
  
  return (
    <div className="pt-24 min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-village-green mb-4">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore the beauty and culture of Venkatapuram through our visual stories
            </p>
          </div>
        </div>
      </section>
      
      <Tabs defaultValue="photos" className="w-full">
        <div className="container mx-auto px-4 py-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="photos" className="text-lg py-3">
              <Image className="h-5 w-5 mr-2" />
              Photos
            </TabsTrigger>
            <TabsTrigger value="videos" className="text-lg py-3">
              <Play className="h-5 w-5 mr-2" />
              Videos
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="photos" className="mt-0">
            <Section
              title="Photo Gallery"
              subtitle="Stunning visuals capturing the essence of Venkatapuram village life, landscapes, and cultural celebrations."
            >
              <Tabs defaultValue="all" className="w-full mb-8">
                <TabsList className="flex justify-center flex-wrap gap-2">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="landscape">Landscapes</TabsTrigger>
                  <TabsTrigger value="culture">Culture</TabsTrigger>
                  <TabsTrigger value="people">People</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {photos.map((photo, index) => (
                      <Dialog key={index}>
                        <DialogTrigger asChild>
                          <div 
                            className="aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer reveal"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <img 
                              src={photo.src} 
                              alt={photo.alt} 
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 overflow-hidden">
                          <img 
                            src={photo.src} 
                            alt={photo.alt} 
                            className="w-full h-auto"
                          />
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </TabsContent>
                
                {["landscape", "culture", "people"].map((category) => (
                  <TabsContent key={category} value={category} className="mt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {filterPhotosByCategory(category).map((photo, index) => (
                        <Dialog key={index}>
                          <DialogTrigger asChild>
                            <div 
                              className="aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer reveal"
                              style={{ animationDelay: `${index * 0.1}s` }}
                            >
                              <img 
                                src={photo.src} 
                                alt={photo.alt} 
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl p-0 overflow-hidden">
                            <img 
                              src={photo.src} 
                              alt={photo.alt} 
                              className="w-full h-auto"
                            />
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Section>
          </TabsContent>
          
          <TabsContent value="videos" className="mt-0">
            <Section
              title="Video Gallery"
              subtitle="Immersive videos showcasing the vibrant life, cultural events, and scenic beauty of Venkatapuram."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                  <div 
                    key={index}
                    className="rounded-lg overflow-hidden shadow-lg reveal"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative aspect-video group cursor-pointer">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-8 w-8 text-village-green" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-sm py-1 px-2 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="text-xl font-semibold text-village-green">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </TabsContent>
        </div>
      </Tabs>
      
      <section className="bg-village-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Share Your Venkatapuram Moments</h2>
            <p className="text-lg mb-8 text-white/80">
              Have you visited our village? We'd love to see and share your photos and videos.
              Tag us on social media or contact us to feature your content in our gallery.
            </p>
            <div className="inline-flex bg-white/10 px-4 py-2 rounded-md">
              <p className="text-lg font-medium">#ExploreVenkatapuram</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
