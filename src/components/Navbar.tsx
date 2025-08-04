import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">E</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Emplo AI</span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-emplo-gray hover:text-foreground">
              Log In
            </Button>
            <Button className="bg-emplo-dark hover:bg-emplo-dark/90 text-white px-6 py-2 rounded-lg font-medium">
              Start Pilot
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;