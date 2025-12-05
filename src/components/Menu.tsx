import { Link, useLocation } from "react-router-dom";
import { Home, Info, Phone, CreditCard } from "lucide-react";
import Logo from "@/assets/logo.jpeg"; // your logo

export default function Menu() {
  const location = useLocation();

  const menuItems = [
    { title: "Home", path: "/", icon: Home },
    { title: "About", path: "/about", icon: Info },
    { title: "Prices", path: "/prices", icon: CreditCard },
    { title: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <nav className="w-full border-b border-border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="4Motion Recovery Logo"
            className="h-12 max-h-12 w-auto object-contain" // increased height slightly
          />
        </Link>

        {/* Right: Menu Links */}
        <div className="flex items-center gap-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-md transition-all text-sm font-medium
                  ${
                    isActive
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
