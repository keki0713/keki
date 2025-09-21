import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Github, Folder } from "lucide-react";

export default function Projects() {
  //todo: remove mock functionality - replace with real projects from John's portfolio
  const projects = [
    {
      title: "Python Data Science Project",
      description: "Comprehensive data analysis and machine learning project demonstrating skills learned from the Udemy bootcamp. Includes data visualization, statistical analysis, and predictive modeling.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter"],
      category: "Data Science",
      status: "Completed",
      highlights: ["Data cleaning and preprocessing", "Machine learning algorithms", "Statistical visualization"]
    },
    {
      title: "Module Development Assignment",
      description: "Independent programming module developed during TechSolutions Inc. internship. Focused on code quality, debugging, and system efficiency with minimal supervision.",
      technologies: ["JavaScript", "HTML", "CSS", "Version Control"],
      category: "Web Development", 
      status: "Completed",
      highlights: ["Independent development", "Code debugging", "Quality assurance"]
    },
    {
      title: "Academic BSIT Capstone",
      description: "Final year capstone project showcasing comprehensive understanding of information technology concepts and practical application of programming skills.",
      technologies: ["Full Stack Development", "Database Design", "System Analysis"],
      category: "Academic",
      status: "In Progress",
      highlights: ["System design", "Database architecture", "Full stack implementation"]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Projects & Work Samples</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selected projects demonstrating technical skills and practical application of programming knowledge
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-elevate transition-all duration-200 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="space-y-4 flex-1">
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Folder className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{project.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {project.category}
                              </Badge>
                              <Badge 
                                variant={project.status === 'Completed' ? 'default' : 'secondary'} 
                                className="text-xs"
                              >
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Highlights</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => console.log(`View ${project.title} details`)}
                      data-testid={`button-view-project-${index}`}
                    >
                      <Code className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => console.log(`External link for ${project.title}`)}
                      data-testid={`button-external-project-${index}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="hover-elevate transition-all duration-200">
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Github className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">More Projects Coming Soon</h3>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  As I continue my journey in software development, I'm working on additional projects that 
                  demonstrate my growing expertise in various technologies and programming languages.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="button-discuss-projects"
                >
                  Let's Discuss Your Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}