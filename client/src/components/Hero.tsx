import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Mail, Phone } from "lucide-react";
import gradPic from "@assets/GradPic_1758421075197.jpg";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src={gradPic} 
                  alt="John Keneth L. Diola graduation photo"
                  className="w-full h-full object-cover"
                  data-testid="img-profile-photo"
                />
              </div>
              <div className="absolute -bottom-4 -right-4">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  BSIT Graduate
                </Badge>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                Cum Laude
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                John Keneth L. <span className="text-primary">Diola</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                BSIT Graduate & Programming Intern
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A focused and dedicated BSIT graduate with Cum Laude honors, who prefers working in concentrated 
              environments where attention to detail and deep technical proficiency are valued. While naturally 
              reserved, I am highly observant and thorough in my work, ensuring code quality and system efficiency.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Purok 4 Los Arcos, Prosperidad Agusan del Sur</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>johnkeneth.diola@carsu.edu.ph</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>(+63) 981 234 1572</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => window.open('https://drive.google.com/file/d/1RIXHq9LLxvBiOCc5kUqi9WS6UpSHGhxY/view?usp=sharing', '_blank')}
                data-testid="button-hero-resume"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-hero-contact"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}