export const LOCALES = ["en", "fr", "es", "pt"] as const;
export type Locale = (typeof LOCALES)[number];

export interface Translations {
  locale: Locale;
  langName: string;
  bestVpn: {
    title: string;
    description: string;
    headlineTop: string;
    headlineItalic: string;
    headlineBottom: string;
    lede: string;
    eyebrow: string;
  };
  deals: {
    title: string;
    description: string;
    heading: string;
    subheading: string;
  };
  topPicks: {
    heading: string;
    eyebrow: string;
    subtext: string;
    getCta: string;
    readReview: string;
    moneyBack: string;
    disclosure: string;
    disclosureLink: string;
  };
  country: {
    titleTemplate: string;
    topPicks: string;
    comparisonTitle: string;
    detailedReviews: string;
    faqTitle: string;
  };
  common: {
    bestOverall: string;
    unlimitedDevices: string;
    bestPrivacy: string;
    bestBudget: string;
    updatedWeekly: string;
    expertTested: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    locale: "en",
    langName: "English",
    bestVpn: {
      title: "Best VPN 2026 — Expert-Tested & Independently Reviewed",
      description: "We tested the top VPN services for speed, security, and privacy. NordVPN, Surfshark, Proton VPN, FastestVPN, and IPVanish compared.",
      headlineTop: "The only VPNs",
      headlineItalic: "that actually",
      headlineBottom: "earned our stars.",
      lede: "After 47 data points across speed, privacy, streaming reach, and customer support, five providers made the cut.",
      eyebrow: "Cover Story · 5 VPNs tested",
    },
    deals: {
      title: "VPN Deals & Coupons (2026) — Best Current Offers",
      description: "Verified VPN discounts updated weekly. Save up to 89%.",
      heading: "VPN Deals & Coupons",
      subheading: "Current promotions and discount codes. Updated weekly with verified deals.",
    },
    topPicks: {
      heading: "Our Top VPN Picks",
      eyebrow: "Expert-tested",
      subtext: "Chosen after real-world testing across speed, privacy, and streaming. Each ranking is independent.",
      getCta: "Get",
      readReview: "Read full review",
      moneyBack: "30-day money-back guarantee",
      disclosure: "We earn a commission when you click \"Get\" buttons, at no extra cost to you.",
      disclosureLink: "Read our affiliate disclosure",
    },
    country: {
      titleTemplate: "Best VPN for {country} (2026)",
      topPicks: "Our Top 5 Picks for {country}",
      comparisonTitle: "VPN Comparison for {country}",
      detailedReviews: "Detailed Provider Reviews for {country}",
      faqTitle: "VPN FAQ for {country}",
    },
    common: {
      bestOverall: "Best Overall",
      unlimitedDevices: "Unlimited Devices",
      bestPrivacy: "Best for Privacy",
      bestBudget: "Best Budget",
      updatedWeekly: "Updated weekly",
      expertTested: "Expert-tested",
    },
  },
  fr: {
    locale: "fr",
    langName: "Français",
    bestVpn: {
      title: "Meilleur VPN 2026 — Testé par des Experts & Évalué Indépendamment",
      description: "Nous avons testé les meilleurs services VPN pour la vitesse, la sécurité et la confidentialité. NordVPN, Surfshark, Proton VPN FastestVPN et IPVanish comparés.",
      headlineTop: "Les seuls VPN",
      headlineItalic: "qui ont vraiment",
      headlineBottom: "mérité nos étoiles.",
      lede: "Après 47 critères couvrant la vitesse, la confidentialité, le streaming et le support client, cinq fournisseurs ont passé le test.",
      eyebrow: "Dossier · 5 VPN testés",
    },
    deals: {
      title: "Offres VPN & Codes Promo (2026) — Meilleures Réductions",
      description: "Réductions VPN vérifiées, mises à jour chaque semaine. Économisez jusqu'à 89%.",
      heading: "Offres VPN & Codes Promo",
      subheading: "Promotions actuelles et codes de réduction. Mis à jour chaque semaine avec des offres vérifiées.",
    },
    topPicks: {
      heading: "Nos Meilleurs Choix VPN",
      eyebrow: "Testé par des experts",
      subtext: "Sélectionnés après des tests réels de vitesse, confidentialité et streaming. Chaque classement est indépendant.",
      getCta: "Obtenir",
      readReview: "Lire l'avis complet",
      moneyBack: "Garantie satisfait ou remboursé 30 jours",
      disclosure: "Nous recevons une commission lorsque vous cliquez sur les boutons, sans frais supplémentaires pour vous.",
      disclosureLink: "Lire notre divulgation d'affiliation",
    },
    country: {
      titleTemplate: "Meilleur VPN pour {country} (2026)",
      topPicks: "Nos 4 Meilleurs Choix pour {country}",
      comparisonTitle: "Comparaison VPN pour {country}",
      detailedReviews: "Avis Détaillés pour {country}",
      faqTitle: "FAQ VPN pour {country}",
    },
    common: {
      bestOverall: "Meilleur Global",
      unlimitedDevices: "Appareils Illimités",
      bestPrivacy: "Meilleur Confidentialité",
      bestBudget: "Meilleur Budget",
      updatedWeekly: "Mis à jour chaque semaine",
      expertTested: "Testé par des experts",
    },
  },
  es: {
    locale: "es",
    langName: "Español",
    bestVpn: {
      title: "Mejor VPN 2026 — Probado por Expertos & Evaluado Independientemente",
      description: "Probamos los mejores servicios VPN en velocidad, seguridad y privacidad. NordVPN, Surfshark, Proton VPN FastestVPN e IPVanish comparados.",
      headlineTop: "Los únicos VPN",
      headlineItalic: "que realmente",
      headlineBottom: "se ganaron nuestras estrellas.",
      lede: "Después de 47 criterios de velocidad, privacidad, streaming y soporte, cinco proveedores pasaron la prueba.",
      eyebrow: "Portada · 5 VPN probados",
    },
    deals: {
      title: "Ofertas VPN & Cupones (2026) — Mejores Descuentos",
      description: "Descuentos VPN verificados, actualizados semanalmente. Ahorra hasta 89%.",
      heading: "Ofertas VPN & Cupones",
      subheading: "Promociones actuales y códigos de descuento. Actualizados semanalmente.",
    },
    topPicks: {
      heading: "Nuestras Mejores Opciones VPN",
      eyebrow: "Probado por expertos",
      subtext: "Seleccionados después de pruebas reales de velocidad, privacidad y streaming. Cada clasificación es independiente.",
      getCta: "Obtener",
      readReview: "Leer reseña completa",
      moneyBack: "Garantía de reembolso de 30 días",
      disclosure: "Recibimos una comisión cuando haces clic en los botones, sin costo adicional para ti.",
      disclosureLink: "Leer nuestra divulgación de afiliados",
    },
    country: {
      titleTemplate: "Mejor VPN para {country} (2026)",
      topPicks: "Nuestras 4 Mejores Opciones para {country}",
      comparisonTitle: "Comparación VPN para {country}",
      detailedReviews: "Reseñas Detalladas para {country}",
      faqTitle: "Preguntas Frecuentes VPN para {country}",
    },
    common: {
      bestOverall: "Mejor General",
      unlimitedDevices: "Dispositivos Ilimitados",
      bestPrivacy: "Mejor Privacidad",
      bestBudget: "Mejor Presupuesto",
      updatedWeekly: "Actualizado semanalmente",
      expertTested: "Probado por expertos",
    },
  },
  pt: {
    locale: "pt",
    langName: "Português",
    bestVpn: {
      title: "Melhor VPN 2026 — Testado por Especialistas & Avaliado Independentemente",
      description: "Testamos os melhores serviços VPN em velocidade, segurança e privacidade. NordVPN, Surfshark, Proton VPN FastestVPN e IPVanish comparados.",
      headlineTop: "Os únicos VPNs",
      headlineItalic: "que realmente",
      headlineBottom: "mereceram nossas estrelas.",
      lede: "Após 47 critérios de velocidade, privacidade, streaming e suporte, cinco provedores passaram no teste.",
      eyebrow: "Destaque · 5 VPNs testados",
    },
    deals: {
      title: "Ofertas VPN & Cupons (2026) — Melhores Descontos",
      description: "Descontos VPN verificados, atualizados semanalmente. Economize até 89%.",
      heading: "Ofertas VPN & Cupons",
      subheading: "Promoções atuais e códigos de desconto. Atualizados semanalmente.",
    },
    topPicks: {
      heading: "Nossas Melhores Escolhas VPN",
      eyebrow: "Testado por especialistas",
      subtext: "Selecionados após testes reais de velocidade, privacidade e streaming. Cada classificação é independente.",
      getCta: "Obter",
      readReview: "Ler avaliação completa",
      moneyBack: "Garantia de reembolso de 30 dias",
      disclosure: "Recebemos uma comissão quando você clica nos botões, sem custo adicional para você.",
      disclosureLink: "Leia nossa divulgação de afiliados",
    },
    country: {
      titleTemplate: "Melhor VPN para {country} (2026)",
      topPicks: "Nossas 4 Melhores Escolhas para {country}",
      comparisonTitle: "Comparação VPN para {country}",
      detailedReviews: "Avaliações Detalhadas para {country}",
      faqTitle: "Perguntas Frequentes VPN para {country}",
    },
    common: {
      bestOverall: "Melhor Geral",
      unlimitedDevices: "Dispositivos Ilimitados",
      bestPrivacy: "Melhor Privacidade",
      bestBudget: "Melhor Custo-Benefício",
      updatedWeekly: "Atualizado semanalmente",
      expertTested: "Testado por especialistas",
    },
  },
};

export function t(locale: Locale): Translations {
  return translations[locale] || translations.en;
}

/** Top country slugs per language for i18n pages */
export const TOP_COUNTRIES: Record<Locale, string[]> = {
  en: [],
  fr: ["france", "canada", "switzerland", "morocco", "belgium", "senegal", "tunisia", "luxembourg", "cameroon", "madagascar"],
  es: ["mexico", "spain", "argentina", "colombia", "chile", "peru", "costa-rica", "panama", "uruguay", "ecuador"],
  pt: ["brazil", "portugal", "mozambique"],
};
