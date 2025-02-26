
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-semibold">
            ESG AI
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#environmental" className="nav-item">Environmental</a>
            <a href="#social" className="nav-item">Social</a>
            <a href="#governance" className="nav-item">Governance</a>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-4"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <a href="#environmental" className="block nav-item mb-2">Environmental</a>
            <a href="#social" className="block nav-item mb-2">Social</a>
            <a href="#governance" className="block nav-item mb-2">Governance</a>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-full justify-center nav-item"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
