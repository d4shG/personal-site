import { useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { MdLanguage } from "react-icons/md";

const LanguageSwitcher = () => {
  const { changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = (selectedLang) => {
    changeLanguage(selectedLang);
    setIsOpen(false);
  };

  return (
    <div className={`language-switcher ${isOpen ? "open" : ""}`}>
      <MdLanguage
        className="language-switcher-icon"
        onClick={() => setIsOpen(!isOpen)}
      />

      <ul
        className="language-switcher-dropdown"
        onClick={() => setIsOpen(false)}
      >
        <li onClick={() => handleChangeLanguage("en")}>🇬🇧 English</li>
        <li onClick={() => handleChangeLanguage("hu")}>🇭🇺 Magyar</li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
