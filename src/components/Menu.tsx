import { Link, useLocation } from "react-router-dom";
import { Home, Info, Phone, CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "@/assets/logo.jpg";

export default function Menu() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language; // get current language



const menuItems = [
  { title: t("menu.home"), path: "/", icon: Home },
  { title: t("menu.about"), path: "/about", icon: Info },
  { title: t("menu.prices"), path: "/prices", icon: CreditCard },
  { title: t("menu.contact"), path: "/contact", icon: Phone },
];


  const languages = ["ro", "en"];

  return (
    <nav className="w-full border-b border-border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex items-center justify-between py-0 px-0">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="4Motion Recovery Logo"
            className="h-20 max-h-20 w-auto object-contain"
          />
        </Link>

        {/* Right: Menu Links + Language Switcher */}
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
                  ${isActive
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

          {/* Language Switcher styled like menu links */}
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => i18n.changeLanguage(lang)}
              className={`
                flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all
                ${currentLang === lang
                  ? "bg-primary/10 text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
                }
              `}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
