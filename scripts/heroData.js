const translations = {
  en: {
    greetings: "Hello, World!",
    typewriter: "I'm a",
    socials: "Follow me",
    scroll: "Scroll down"
  },
  hu: {
    greetings: "Helló, Világ!",
    typewriter: "Egy",
    socials: "Kövess itt",
    scroll: "Görgess tovább"
  }
};

export const heroText = (lang) => {
    switch (lang) {
      case "hu":
        return translations.hu

      default:
        return translations.en
    }
  } 