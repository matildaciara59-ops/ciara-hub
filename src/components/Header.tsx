import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold text-primary">
            Ciara Hub
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#packages" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Packages
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Contact
          </a>
        </nav>

        <Button variant="gold" size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
