const translations = {
	en: {
		title: "About me",
		subtitle: "What I do",
		details: {
			title: "Meet the Dev",
			paragraph1:
				"I’m a passionate and curious full-stack developer with a focus on building creative and efficient solutions. Currently, I’m expanding my skill set by diving into ASP.NET for full-stack development and exploring scalable database solutions, particularly with MSSQL. I love tackling new challenges that push my problem-solving abilities and allow me to grow both personally and professionally.",
			paragraph2:
				"I have a strong foundation in C#, JavaScript, and various web development technologies, including React, Next.js, and SQL. I'm always excited to take on projects that combine creativity, logic, and innovation, and I’m open to collaboration on solutions that make a real impact.",
			paragraph3:
				"Beyond coding, I enjoy balancing my technical work with hobbies like gaming, crocheting, and solving puzzles, all while staying true to my Ravenclaw spirit. If you want to chat about tech, C#, or even how to bake the best brownies, feel free to reach out!",
		},
		cards: {
			experience: "Years of experience",
			projects: "Completed projects",
			duckies: "Duckies given",
		},
	},
	hu: {
		title: "Rólam",
		subtitle: "Mivel foglalkozom",
		details: {
			title: "Ismerj meg!",
			paragraph1:
				"Lelkes és kíváncsi full-stack fejlesztő vagyok, aki kreatív és hatékony megoldásokat épít. Jelenleg az ASP.NET világába merülök el, hogy teljes stack fejlesztőként bővítsem a tudásom, és a skálázható adatbázisokat (különösen az MSSQL-t) is alaposabban megismerjem. Imádom azokat a kihívásokat, amik próbára teszik a problémamegoldó képességemet, és lehetőséget adnak a fejlődésre – szakmailag és személyesen is.",
			paragraph2:
				"Erős alapokkal rendelkezem C#, JavaScript és különféle webfejlesztési technológiák terén, mint például React, Next.js és SQL. Mindig izgatottan vágok bele olyan projektekbe, ahol a kreativitás, a logika és az innováció találkozik. Nyitott vagyok együttműködésre olyan megoldásokon, amik valódi hatást gyakorolnak.",
			paragraph3:
				"A kódolás mellett szeretek egyensúlyt teremteni a technikai munkám és a hobbik között – legyen szó gamingről, horgolásról vagy rejtvényfejtésről, mindezt igazi Hollóhátas mentalitással. Ha szeretnél beszélgetni a tech világáról, a C#-ról, vagy akár arról, hogyan készülnek a legjobb brownie-k, nyugodtan írj!",
		},
		cards: {
			experience: "év tapasztalat",
			projects: "Befejezett projektek",
			duckies: "Ajándékozott kacsák",
		},
	},
};

export const aboutText = (lang) => {
	switch (lang) {
		case "hu":
			return translations.hu;

		default:
			return translations.en;
	}
};
