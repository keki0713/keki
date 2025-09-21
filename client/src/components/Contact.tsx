import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, User, Building } from "lucide-react";

export default function Contact() {
  const references = [
    {
      name: "Ms. Maria Santos",
      title: "Senior Developer, TechSolutions Inc.",
      email: "msantos@gmail.com",
      type: "Professional Reference"
    },
    {
      name: "Mr. Edwin Manuel Jarlata", 
      title: "Professor, Caraga State University",
      email: "emjarlata@gmail.com",
      type: "Academic Reference"
    },
    {
      name: "Ms. Anna Lopez",
      title: "Professor, Caraga State University", 
      email: "alopez@gmail.com",
      type: "Academic Reference"
    }
  ];

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Contact & References</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch to discuss opportunities or request additional information
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="hover-elevate transition-all duration-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">John Keneth L. Diola</h3>
                      <p className="text-muted-foreground">BSIT Graduate</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <a 
                          href="mailto:johnkeneth.diola@carsu.edu.ph"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          data-testid="link-email"
                        >
                          johnkeneth.diola@carsu.edu.ph
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Phone</p>
                        <a 
                          href="tel:+639812341572"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          data-testid="link-phone"
                        >
                          (+63) 981 234 1572
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">
                          Purok 4 Los Arcos, Prosperidad Agusan del Sur
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full"
                    onClick={() => window.open('https://drive.google.com/file/d/1RIXHq9LLxvBiOCc5kUqi9WS6UpSHGhxY/view?usp=sharing', '_blank')}
                    data-testid="button-contact-resume"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Complete Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* References */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Professional References</h3>
              {references.map((reference, index) => (
                <Card key={index} className="hover-elevate transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-foreground">{reference.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {reference.type.split(' ')[0]}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{reference.title}</p>
                          <a 
                            href={`mailto:${reference.email}`}
                            className="text-sm text-primary hover:underline"
                            data-testid={`link-reference-${index}`}
                          >
                            {reference.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Footer */}
          <Card className="hover-elevate transition-all duration-200">
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Ready to Collaborate</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  I'm open to discussing new opportunities, internships, or projects where I can contribute 
                  my technical skills and dedication to quality work. Feel free to reach out to learn more 
                  about my experience and capabilities.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = 'mailto:johnkeneth.diola@carsu.edu.ph?subject=Portfolio Inquiry'}
                    data-testid="button-send-email"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = 'tel:+639812341572'}
                    data-testid="button-call-phone"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}