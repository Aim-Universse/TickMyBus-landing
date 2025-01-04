
import {  Apple, PlayCircle, Instagram, Linkedin } from 'lucide-react';
import Logo from './logo-footer.png'
const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-start">
            <img 
                src={Logo}
                alt="Company Logo" 
                className="h-14 w-auto"
              />
            </div>
            <div className="space-y-4">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors w-48">
                <Apple className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors w-48">
                <PlayCircle className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Play Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-red-500">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-red-500">About</button></li>
              <li><button onClick={() => scrollToSection('mission')} className="hover:text-red-500">Mission & Vision</button></li>
              <li><button onClick={() => scrollToSection('team')} className="hover:text-red-500">Team</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-red-500">Contact</button></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a> */}
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a> */}
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-gray-400">2, Kelimel street, Lekshmipuram</p>
              <p className="text-gray-400">Ganapathy, Coimbatore</p>
              <p className="text-gray-400">
Tamil Nadu 641006</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TickMyBus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;