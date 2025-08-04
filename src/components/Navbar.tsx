import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-sm border-b border-white/30 shadow-sm'
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
            <span className="text-xl font-light text-foreground font-space-grotesk">Emplo AI</span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-sm font-light text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 font-space-grotesk"
                >
                  Log In
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 rounded-xl shadow-lg bg-white/85 backdrop-blur-sm z-50">
                <DropdownMenuItem className="text-sm font-space-grotesk cursor-pointer">
                  as Employer
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm font-space-grotesk cursor-pointer">
                  as Job Seeker
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm font-light shadow-sm hover:shadow-md transition-all duration-200 font-space-grotesk">
              Start Pilot
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;