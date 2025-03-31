export const translations = {
    en: {
      contactTitle: "Contact Me",
      form: {
        nameLabel: "Name:",
        namePlaceholder: "Your name",
        emailLabel: "Email:",
        emailPlaceholder: "Your email",
        messageLabel: "Message:",
        messagePlaceholder: "Your message",
        submitButton: "Submit",
        errors: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Invalid email format",
          messageRequired: "Message is required",
        },
        toast: {
          success: "Message sent successfully!",
          error: "Failed to send message. Please try again.",
        },
      },
    },
    hu: {
      contactTitle: "Kapcsolatfelvétel",
      form: {
        nameLabel: "Név:",
        namePlaceholder: "A neved",
        emailLabel: "Email:",
        emailPlaceholder: "Az email címed",
        messageLabel: "Üzenet:",
        messagePlaceholder: "Az üzeneted",
        submitButton: "Küldés",
        errors: {
          nameRequired: "A név megadása kötelező",
          emailRequired: "Az email megadása kötelező",
          emailInvalid: "Érvénytelen email formátum",
          messageRequired: "Az üzenet megadása kötelező",
        },
        toast: {
          success: "Üzenet sikeresen elküldve!",
          error: "Az üzenet küldése sikertelen. Próbáld újra!",
        },
      },
    },
  };

  export const contactText = (lang) => {
    switch (lang) {
        case "hu":
            return translations.hu;
  
        default:
            return translations.en;
    }
  };