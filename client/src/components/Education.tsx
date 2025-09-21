import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Trophy } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic achievements and continuous learning journey
            </p>
          </div>

          <div className="grid gap-6">
            {/* Main Education */}
            <Card className="hover-elevate transition-all duration-200">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-semibold text-foreground">
                          Bachelor of Science in Information Technology
                        </h3>
                        <Badge variant="default" data-testid="badge-cum-laude">
                          <Trophy className="w-3 h-3 mr-1" />
                          Cum Laude
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">Caraga State University</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>2021 - 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Ampayon, Butuan City</span>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                      <div className="text-sm text-muted-foreground mb-1">Cumulative GPA</div>
                      <div className="text-2xl font-bold text-primary">1.75</div>
                      <div className="text-xs text-muted-foreground">Exceptional Academic Performance</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications & Training */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate transition-all duration-200">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Udemy Certification</h4>
                        <p className="text-sm text-muted-foreground">2025</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-2">
                        Python for Data Science and Machine Learning Bootcamp
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Validated by:</span> Prof. Anna Lopez, Caraga State University
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-200">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">TechSolutions Inc.</h4>
                        <p className="text-sm text-muted-foreground">2024</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-2">
                        Programming Internship Completion
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Validated by:</span> Ms. Maria Santos, Senior Developer
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}