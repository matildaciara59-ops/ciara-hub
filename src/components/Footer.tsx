const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-heading text-2xl font-bold">Ciara Hub</span>
            <p className="text-primary-foreground/70 mt-2 text-sm">
              Empowering your success, one package at a time.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#packages" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
            >
              Packages
            </a>
            <a 
              href="#about" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Ciara Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
