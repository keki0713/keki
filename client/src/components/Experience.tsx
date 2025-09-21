import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Work Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional experience and accomplishments in software development
            </p>
          </div>

          <Card className="hover-elevate transition-all duration-200">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-semibold text-foreground">Programming Intern</h3>
                        <Badge variant="outline">Internship</Badge>
                      </div>
                      <p className="text-primary font-medium">TechSolution Inc.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>March - May 2023</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Butuan City</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* STAR Format Case Study */}
                <div className="space-y-6 border-t border-border pt-6">
                  <h4 className="text-lg font-semibold text-foreground">Key Achievement - Module Development Project</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Situation & Task */}
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <h5 className="font-medium text-foreground">Situation</h5>
                        </div>
                        <p className="text-sm text-muted-foreground ml-4">
                          Worked in a focused development environment where independent module development 
                          and code maintenance were critical to project success.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <h5 className="font-medium text-foreground">Task</h5>
                        </div>
                        <p className="text-sm text-muted-foreground ml-4">
                          Complete independent assignments on module development with minimal supervision 
                          while ensuring code quality and system efficiency.
                        </p>
                      </div>
                    </div>

                    {/* Action & Result */}
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <h5 className="font-medium text-foreground">Action</h5>
                        </div>
                        <p className="text-sm text-muted-foreground ml-4">
                          Demonstrated strong concentration skills during extended programming sessions, 
                          contributed effectively to code debugging and maintenance tasks.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <h5 className="font-medium text-foreground">Result</h5>
                        </div>
                        <p className="text-sm text-muted-foreground ml-4">
                          Successfully completed all assigned modules and enhanced technical proficiency 
                          with attention to detail, earning positive feedback from supervisors.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Accomplishments */}
                  <div className="space-y-3">
                    <h5 className="font-medium text-foreground">Key Accomplishments</h5>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        'Code debugging and maintenance',
                        'Independent module development',
                        'Extended programming sessions',
                        'Quality assurance focus'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}