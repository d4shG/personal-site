import { Translation } from "react-i18next";

export const techStackTitle = (lang) => {
    switch (lang) {
        case "hu":
            return "Technológiai eszköztáram";

        default:
            return "My tech stack";
    }
};

const translations = {
  en: {
    title: "My Services",
    services: [
      {
        category: 'IT Consulting',
        services: [
          'IT Planning & Infrastructure Setup',
          'Database Management & Optimization',
          'Data Recovery & System Troubleshooting',
          'Web Administration & System Support',
        ]
      },
      {
        category: 'Developer Services',
        services: [
          'Custom Web Application Development',
          'Full Stack Development',
          'API Development & Integration',
          'Database Design & Management',
        ]
      }
    ]
  },
  hu: {
    title: "Szolgáltatásaim",
    services: [
      {
        category: 'IT Tanácsadás',
        services: [
          'IT Tervezés és Infrastruktúra Beállítás',
          'Adatbázis Kezelés és Optimalizálás',
          'Adatmentés és Rendszer Hibakeresés',
          'Web Adminisztráció és Rendszer Támogatás',
        ]
      },
      {
        category: 'Fejlesztői Szolgáltatások',
        services: [
          'Egyedi Webalkalmazás Fejlesztés',
          'Full Stack Fejlesztés',
          'API Fejlesztés és Integráció',
          'Adatbázis Tervezés és Kezelés',
        ]
      }
    ]
  }
};
  
  export const servicesText = (lang) => {
    switch (lang) {
        case "hu":
            return translations.hu;

        default:
            return translations.en;
    }
};