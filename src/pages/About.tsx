
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const milestones = [
    {
      year: "1820",
      title: "Village Founding",
      description: "Venkatapuram was established as a small settlement by a group of families seeking fertile land for agriculture."
    },
    {
      year: "1885",
      title: "First Temple Built",
      description: "The main village temple was constructed, becoming the spiritual and cultural center of the community."
    },
    {
      year: "1947",
      title: "Independence Celebration",
      description: "The village celebrated India's independence with a grand ceremony that is remembered to this day."
    },
    {
      year: "1972",
      title: "Modern Development",
      description: "Electricity and formal roads connected the village to nearby towns, marking the beginning of modernization."
    },
    {
      year: "2005",
      title: "Digital Revolution",
      description: "Internet connectivity reached the village, opening new educational and economic opportunities."
    },
    {
      year: "2023",
      title: "Green Initiative",
      description: "The village launched a comprehensive environmental program, aiming to become carbon-neutral by 2030."
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-village-green opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-village-green mb-4">
              About Venkatapuram
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our heritage, culture, and community
            </p>
          </div>
        </div>
      </section>
      
      <Section
        title="Our History"
        subtitle="Tracing the origins and growth of Venkatapuram through centuries of cultural evolution."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 reveal">
            <h3 className="text-2xl font-display font-bold text-village-green mb-4">
              A Legacy of Tradition and Progress
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Venkatapuram has a rich history dating back to the early 19th century. Founded by a small group of families seeking fertile agricultural lands, the village has grown into a vibrant community that balances tradition with progress.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Through periods of colonial rule, independence struggles, and modern development, our village has maintained its core cultural identity while adapting to changing times. The architectural heritage, traditional practices, and community bonds form the foundation of our village life.
            </p>
            <p className="text-lg text-muted-foreground">
              Our ancestors' wisdom and values continue to guide us as we embrace new technologies and ideas, creating a harmonious blend of the old and new.
            </p>
          </div>
          <div className="order-1 md:order-2 reveal">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80" 
                alt="Village Historical Photo" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>
      
      <Section
        title="Our Timeline"
        subtitle="Key milestones in the journey of Venkatapuram through the years."
        dark
      >
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/30"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center relative reveal ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-white text-village-green p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-display font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-village-green font-bold z-10">
                  {milestone.year}
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section
        title="Our Values"
        subtitle="The principles that guide our community and shape our decisions."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-border text-center reveal">
            <div className="w-16 h-16 mx-auto mb-4 bg-village-green/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-village-green" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8c0 5-8 10-8 10s-8-5-8-10a8 8 0 0 1 16 0z"></path>
                <circle cx="10" cy="8" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-village-green mb-3">Community Spirit</h3>
            <p className="text-muted-foreground">
              We believe in the strength of unity and cooperation. Our community comes together for celebrations, challenges, and everyday life.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-border text-center reveal" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 mx-auto mb-4 bg-village-green/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-village-green" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.444 11.326a27.92 27.92 0 0 0 5.764 3.404c3.604-1.015 7.382-4.404 7.382-4.404s-1.663 7.222-9.135 7.222c-7.472 0-9.135-7.222-9.135-7.222s1.457 1.714 5.124 1"></path>
                <path d="M18 2.1c-.9-.1-1.7.4-2.2 1a4.44 4.44 0 0 1-1.7 1.1c-.5.2-1.2.2-1.9.2H7.2c-1.3 0-1.9 1.4-1.2 2.4l2.3 3.3c.9 1.2 2.2 2 3.7 2.1h1"></path>
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-village-green mb-3">Cultural Heritage</h3>
            <p className="text-muted-foreground">
              We honor our traditions and work to preserve our cultural heritage for future generations while sharing it with the world.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-border text-center reveal" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 mx-auto mb-4 bg-village-green/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-village-green" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-village-green mb-3">Progressive Thinking</h3>
            <p className="text-muted-foreground">
              We embrace innovation and change that improves our lives while respecting our traditions and natural environment.
            </p>
          </div>
        </div>
      </Section>
      
      <section className="py-16 md:py-24 bg-village-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-village-green mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're planning a visit, looking to relocate, or just curious about our culture, 
              we welcome you to connect with the Venkatapuram community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gallery">
                <Button className="bg-village-gold hover:bg-village-gold/90 text-village-green font-medium">
                  Explore Our Gallery
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-village-green text-village-green hover:bg-village-green hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
