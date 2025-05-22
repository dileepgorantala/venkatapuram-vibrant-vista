
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Image, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-village-teal" />,
      title: "Rich Cultural Heritage",
      description: "Our village preserves centuries-old traditions, festivals, and practices that showcase our cultural identity."
    },
    {
      icon: <MapPin className="h-10 w-10 text-village-teal" />,
      title: "Scenic Landscapes",
      description: "Surrounded by rolling hills, lush greenery, and pristine water bodies, Venkatapuram is a visual delight."
    },
    {
      icon: <Image className="h-10 w-10 text-village-teal" />,
      title: "Modern Amenities",
      description: "While preserving our traditions, we have embraced modern facilities and infrastructure for a comfortable lifestyle."
    },
    {
      icon: <Calendar className="h-10 w-10 text-village-teal" />,
      title: "Vibrant Community",
      description: "Our close-knit community celebrates together and supports each other through all of life's moments."
    }
  ];

  const testimonials = [
    {
      quote: "Visiting Venkatapuram was like stepping into a perfect blend of tradition and modernity. The hospitality was unmatched!",
      author: "Arjun Sharma",
      role: "Travel Blogger"
    },
    {
      quote: "The cultural festivals of Venkatapuram are a visual treat. I've never seen such vibrant celebrations anywhere else.",
      author: "Priya Patel",
      role: "Photographer"
    },
    {
      quote: "As someone who grew up in Venkatapuram, I'm proud to see how the village has developed while keeping its soul intact.",
      author: "Rajesh Kumar",
      role: "Village Elder"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <Section 
        title="Why Venkatapuram?" 
        subtitle="Discover what makes our village special and why it's a perfect blend of tradition and modernity."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-2">
                <div className="mb-4 inline-flex p-3 rounded-full bg-village-cream">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-village-green">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section 
        title="Our Beautiful Village" 
        subtitle="Take a visual tour of Venkatapuram's scenic landscapes, cultural landmarks, and community life."
        dark
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl reveal">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80" 
              alt="Village Lake" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl reveal" style={{ animationDelay: "0.2s" }}>
            <img 
              src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80" 
              alt="Village Temple" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl reveal" style={{ animationDelay: "0.4s" }}>
            <img 
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80" 
              alt="Village Festival" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="text-center reveal">
          <Link to="/gallery">
            <Button className="bg-white text-village-green hover:bg-village-cream font-medium text-lg px-6 py-6">
              Explore Full Gallery
            </Button>
          </Link>
        </div>
      </Section>
      
      <Section 
        title="What People Say" 
        subtitle="Testimonials from visitors and residents about their experiences in Venkatapuram."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-border reveal" style={{ animationDelay: `${index * 0.2}s` }}>
              <blockquote className="text-lg italic text-muted-foreground mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-village-teal/20 flex items-center justify-center text-village-teal font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      <section className="py-16 bg-village-cream relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')", 
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-village-green mb-4">
              Visit Venkatapuram Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the magic of our village - from cultural celebrations to natural beauty, 
              there's something for everyone in Venkatapuram.
            </p>
            <Link to="/contact">
              <Button className="bg-village-green hover:bg-village-green/90 text-white font-medium text-lg px-8 py-6">
                Plan Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
