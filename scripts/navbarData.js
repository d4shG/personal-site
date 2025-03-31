const translations = {
	en: {
		home: "Home",
		about: "About",
		services: "Services",
		portfolio: "Portfolio",
		contact: "Contact",
	},
	hu: {
		home: "Kezdőlap",
		about: "Bemutatkozás",
		services: "Szolgáltatások",
		portfolio: "Portfólió",
		contact: "Kapcsolat",
	},
};

export const navbarText = (lang) => {
	switch (lang) {
		case "hu":
			return translations.hu;

		default:
			return translations.hu;
	}
};
