import { Target, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every package is designed with your success as the ultimate goal. We focus on tangible outcomes.",
  },
  {
    icon: Heart,
    title: "Client-Centered",
    description: "Your unique needs guide our approach. We tailor our solutions to fit your specific situation.",
  },
  {
    icon: Zap,
    title: "Swift Delivery",
    description: "Time is valuable. We ensure efficient processes without compromising on quality.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-gradient">Ciara Hub</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Ciara Hub, we believe in delivering excellence through personalized solutions. 
              Our packages are thoughtfully crafted to address your unique challenges and 
              propel you toward your aspirations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With years of expertise and a passion for helping others succeed, we've helped 
              countless clients transform their visions into reality. Join our community of 
              successful individuals who chose to invest in their future.
            </p>
          </div>
          
          <div className="space-y-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="flex gap-5 p-6 bg-card rounded-xl shadow-soft card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
