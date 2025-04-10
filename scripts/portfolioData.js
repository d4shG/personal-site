const translations = {
	en: {
		title: "My Projects",
		projects: [
			{
				title: "This site💟",
				description:
					"A sleek, modern portfolio built with Next.js and SCSS to showcase my web development journey, skills, and projects. Continuously evolving with new features and projects.",
				image: `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_USERNAME}/personal-site/refs/heads/main/readme_media/showcase.png`,
				githubLink: `https://github.com/${process.env.NEXT_PUBLIC_USERNAME}/personal-site`,
				markdownFile: `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_USERNAME}/personal-site/refs/heads/main/README.md`,
			},
			{
				title: "Aurum",
				description:
					"A personal expense tracker built with Next.js, ASP.NET, and MSSQL. Developed by a SCRUM-based team with 5 sprints, following SOLID principles, Clean Code methodology, and CI via GitHub Actions. The app runs in Docker containers for efficient deployment.",
				image: "https://raw.githubusercontent.com/Aurum-ElProyecteGrande/aurum/refs/heads/main/Documentation/Snapshots/Landing.png",
				githubLink: "https://github.com/Aurum-ElProyecteGrande/aurum",
				markdownFile: `https://raw.githubusercontent.com/Aurum-ElProyecteGrande/aurum/refs/heads/main/README.md`,
			},
			{
				title: "SolarWatch",
				description:
					"A simple app built to learn ASP.NET Core, API calls, frontend basics, user roles, and GitHub Actions. A hands-on project for mastering key development skills.",
				image: null,
				githubLink: `https://github.com/${process.env.NEXT_PUBLIC_USERNAME}/solarwatch-ci`,
				markdownFile: `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_USERNAME}/solarwatch-ci/refs/heads/main/README.md`,
			},
			{
				title: "LadleMeThis",
				description:
					"A whimsical recipe site designed to bring joy to cooking! Find recipes based on ingredients you already have or share your culinary creations. Built with a warm and vibrant design using Next.js, SCSS, and JWT-based authentication for a seamless user experience.",
				image: "https://raw.githubusercontent.com/LadleMeThis/LadleMeThis/refs/heads/main/showcase/home.png",
				githubLink: "https://github.com/LadleMeThis/LadleMeThis",
				markdownFile: "https://raw.githubusercontent.com/LadleMeThis/LadleMeThis/refs/heads/main/README.md",
			},
			
		],
	},
	hu: {
		title: "Projektjeim",
		projects: [
			{
				title: "Ez az oldal💟",
				description:
					"Egy letisztult, modern portfólió, amelyet Next.js és SCSS segítségével építettem, hogy bemutassam webfejlesztési utamat, képességeimet és projektjeimet. Folyamatosan fejlődik új funkciókkal és projektekkel.",
				image: `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_USERNAME}/personal-site/refs/heads/main/readme_media/showcase.png`,
				githubLink: `https://github.com/${process.env.NEXT_PUBLIC_USERNAME}/personal-site`,
				markdownFile: `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_USERNAME}/personal-site/refs/heads/main/README.md`,
			},
			{
				title: "Aurum",
				description:
					"Egy személyes kiadáskövető alkalmazás, amelyet Next.js, ASP.NET és MSSQL felhasználásával fejlesztettünk. Egy SCRUM-alapú csapat 5 sprint során készítette, követve a SOLID elveket, a Clean Code módszertant és a GitHub Actions alapú CI-t. Az alkalmazás Docker konténerekben fut a hatékony telepítés érdekében.",
				image: "https://raw.githubusercontent.com/Aurum-ElProyecteGrande/aurum/refs/heads/main/Documentation/Snapshots/Landing.png",
				githubLink: "https://github.com/Aurum-ElProyecteGrande/aurum",
				markdownFile: `https://raw.githubusercontent.com/Aurum-ElProyecteGrande/aurum/refs/heads/main/README.md`,
			},
			{
				title: "SolarWatch",
				description:
					"Egy egyszerű alkalmazás, amelyet az ASP.NET Core, az API-hívások, a frontend alapjai, a felhasználói szerepkörök és a GitHub Actions megismerésére készítettem. Egy gyakorlati projekt, amely segített elsajátítani a legfontosabb fejlesztési készségeket.",
				image: null,
				githubLink: `https://github.com/${process.env.NEXT_PUBLIC_USERNAME}/solarwatch-ci`,
				markdownFile: `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_USERNAME}/solarwatch-ci/refs/heads/main/README.md`,
			},
			{
				title: "Ladlemethis",
				description:
					"Egy szeszélyes receptoldal, amely örömet hoz a főzésbe! Találj recepteket az alapján, ami már a konyhádban van, vagy oszd meg saját kulináris alkotásaidat. Next.js, SCSS és JWT-alapú hitelesítéssel készült, hogy zavartalan felhasználói élményt nyújtson, élénk és meleg dizájnnal.",
					image: "https://raw.githubusercontent.com/LadleMeThis/LadleMeThis/refs/heads/main/showcase/home.png",
					githubLink: "https://github.com/LadleMeThis/LadleMeThis",
					markdownFile: "https://raw.githubusercontent.com/LadleMeThis/LadleMeThis/refs/heads/main/README.md",
			},
			
		],
	},
};

export const portfolioText = (lang) => {
	switch (lang) {
		case "hu":
			return translations.hu;

		default:
			return translations.en;
	}
};

export const missingImage = `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_USERNAME}/personal-site/refs/heads/main/imgs/missingImage.jpeg`;

  