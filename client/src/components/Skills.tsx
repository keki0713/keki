import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Globe, Shield } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: ["Problem-Solving", "Critical Thinking", "Quality Assurance"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Collaboration",
      icon: Users,
      skills: ["Team Collaboration", "Independent Work Ethic", "Resilience"],
      color: "bg-accent/10 text-accent-foreground"
    },
    {
      title: "Languages",
      icon: Globe,
      skills: ["English", "Filipino"],
      color: "bg-muted/50 text-muted-foreground"
    }
  ];

  //todo: remove mock functionality - add real programming languages and frameworks
  const programmingSkills = [
    { name: "Python", level: "Advanced", description: "Data Science & Machine Learning" },
    { name: "JavaScript", level: "Intermediate", description: "Web Development" },
    { name: "HTML/CSS", level: "Advanced", description: "Frontend Development" },
    { name: "SQL", level: "Intermediate", description: "Database Management" },
    { name: "Git", level: "Intermediate", description: "Version Control" }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Skills & Competencies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical expertise and professional capabilities developed through education and experience
            </p>
          </div>

          {/* Soft Skills */}
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover-elevate transition-all duration-200">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-foreground">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Programming Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground text-center">Technical Proficiencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {programmingSkills.map((skill, index) => (
                <Card key={index} className="hover-elevate transition-all duration-200">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-foreground">{skill.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                      
                      {/* Visual Level Indicator */}
                      <div className="space-y-1">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`bg-primary h-2 rounded-full transition-all duration-300 ${
                              skill.level === 'Advanced' ? 'w-5/6' : 
                              skill.level === 'Intermediate' ? 'w-2/3' : 'w-1/2'
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Strengths */}
          <Card className="hover-elevate transition-all duration-200">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Core Strengths</h3>
                </div>
                <p className="text-muted-foreground max-w-4xl mx-auto">
                  "I believe in letting the quality of my work speak for itself and thrive in roles requiring 
                  precision and independent problem-solving. My approach focuses on deep technical proficiency, 
                  attention to detail, and thorough code quality assurance."
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Attention to Detail",
                    "Code Quality Focus", 
                    "Independent Problem-Solving",
                    "Deep Technical Proficiency",
                    "System Efficiency"
                  ].map((strength, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}