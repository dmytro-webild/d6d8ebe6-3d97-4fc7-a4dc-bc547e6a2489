"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Heart, Leaf, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Start",
          id: "hero",
        },
        {
          name: "Über mich",
          id: "about",
        },
        {
          name: "Leistungen",
          id: "services",
        },
        {
          name: "Galerie",
          id: "gallery",
        },
        {
          name: "Kontakt",
          id: "contact",
        },
      ]}
      brandName="Salon Name"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{
        variant: "plain",
      }}
      logoText="Salon Name"
      description="Where natural beauty finds its shape."
      buttons={[
        {
          text: "Termin vereinbaren",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      layoutOrder="default"
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-blondie-bride-smiling-camera-posing-bedroom_132075-11756.jpg"
      imageAlt="Natural hair portrait"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Über mich"
      metrics={[
        {
          icon: Sparkles,
          label: "Jahre Erfahrung",
          value: "12+",
        },
        {
          icon: Heart,
          label: "Zufriedene Kunden",
          value: "1500+",
        },
        {
          icon: Leaf,
          label: "Natürlicher Ansatz",
          value: "100%",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          tag: "Schnitt",
          title: "Schnitt & Styling",
          subtitle: "Natürliche Formgebung",
          description: "Ein Schnitt, der deine Haarstruktur betont.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-cute-smiling-blond-teenager-model-without-makeup-summer-hipster-white-dress-posing-street-background-turn-around_158538-12856.jpg",
        },
        {
          id: 2,
          tag: "Farbe",
          title: "Coloration & Balayage",
          subtitle: "Sanfte Übergänge",
          description: "Natürliche Highlights für strahlenden Glanz.",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-short-haired-blond-woman-s-portrait_633478-2499.jpg",
        },
        {
          id: 3,
          tag: "Pflege",
          title: "Haarpflege & Treatments",
          subtitle: "Tiefenentspannung",
          description: "Natürliche Produkte für gesundes Haar.",
          imageSrc: "http://img.b2bpic.net/free-photo/two-female-friends-relaxing-spa-holding-cocktails_1157-49807.jpg",
        },
      ]}
      title="Leistungen"
      description="Individuelle Beratung trifft auf Handwerk."
    />
  </div>

  <div id="philosophy" data-section="philosophy">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah M.",
          date: "2023",
          title: "Natural Beauty",
          quote: "Die beste Entscheidung für mein Haar.",
          tag: "Review",
          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-bride-indoors-front-view_23-2149640901.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-blondie-bride-smiling-camera-posing-bedroom_132075-11756.jpg",
          imageAlt: "natural woman hair portrait warm",
        },
        {
          id: "2",
          name: "Julia K.",
          date: "2023",
          title: "Natural Beauty",
          quote: "Ein echter Wohlfühlort.",
          tag: "Review",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-cute-smiling-blond-teenager-model-without-makeup-summer-hipster-white-dress-posing-street-background-turn-around_158538-12856.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-face-massaging-with-gua-sha-medium-shot_23-2149349087.jpg",
          imageAlt: "hairdresser working naturally soft focus",
        },
        {
          id: "3",
          name: "Elena R.",
          date: "2023",
          title: "Natural Beauty",
          quote: "Ehrliches Handwerk.",
          tag: "Review",
          avatarSrc: "http://img.b2bpic.net/free-photo/pretty-short-haired-blond-woman-s-portrait_633478-2499.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-cute-smiling-blond-teenager-model-without-makeup-summer-hipster-white-dress-posing-street-background-turn-around_158538-12856.jpg",
          imageAlt: "natural balayage warm tones",
        },
        {
          id: "4",
          name: "Mona L.",
          date: "2023",
          title: "Natural Beauty",
          quote: "Wunderschön und natürlich.",
          tag: "Review",
          avatarSrc: "http://img.b2bpic.net/free-photo/two-female-friends-relaxing-spa-holding-cocktails_1157-49807.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-short-haired-blond-woman-s-portrait_633478-2499.jpg",
          imageAlt: "natural hair cut healthy shine",
        },
        {
          id: "5",
          name: "Clara S.",
          date: "2024",
          title: "Natural Beauty",
          quote: "Einfach perfekt, ich komme definitiv wieder.",
          tag: "Review",
          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-blondie-bride-smiling-camera-posing-bedroom_132075-11756.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/two-female-friends-relaxing-spa-holding-cocktails_1157-49807.jpg",
          imageAlt: "balayage natural warm style",
        },
      ]}
      title="Unsere Philosophie"
      description="Schönheit, die zu dir passt — nicht zum Trend."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Look 1",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-cute-smiling-blond-teenager-model-without-makeup-summer-hipster-white-dress-posing-street-background-turn-around_158538-12856.jpg",
        },
        {
          id: "2",
          name: "Look 2",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-short-haired-blond-woman-s-portrait_633478-2499.jpg",
        },
        {
          id: "3",
          name: "Look 3",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/two-female-friends-relaxing-spa-holding-cocktails_1157-49807.jpg",
        },
      ]}
      title="Galerie"
      description="Impressionen aus unserem Salon."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Kontakt"
      title="Termin vereinbaren"
      description="Ich freue mich darauf, dich kennenzulernen."
      buttons={[
        {
          text: "Jetzt anfragen",
          href: "mailto:hello@salon.de",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com",
            },
            {
              label: "Impressum",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Termin",
              href: "#contact",
            },
            {
              label: "Kontakt",
              href: "mailto:hello@salon.de",
            },
          ],
        },
      ]}
      logoText="Salon Name"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
