import React from "react";
import { Instagram, Facebook, Mail, Linkedin, Twitter } from "lucide-react";
import logoDark from "../../assets/logo-dark.png";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Produtos",
    links: [
      { name: "iPhone", href: "#produtos" },
      { name: "Apple Watch", href: "#produtos" },
      { name: "Acessórios", href: "#produtos" },
      { name: "Ver Todos", href: "#produtos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre Nós", href: "#" },
      { name: "Como Funciona", href: "#como-funciona" },
      { name: "Blog", href: "#" },
      { name: "Contato", href: "#contato" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { name: "WhatsApp", href: "https://wa.me/5565981274128" },
      { name: "FAQ", href: "#" },
      { name: "Rastreio", href: "#" },
      { name: "Privacidade", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { 
    icon: <Instagram className="size-5" />, 
    href: "#", 
    label: "Instagram" 
  },
  { 
    icon: <Facebook className="size-5" />, 
    href: "#", 
    label: "Facebook" 
  },
  { 
    icon: <Twitter className="size-5" />, 
    href: "#", 
    label: "Twitter" 
  },
  { 
    icon: <Linkedin className="size-5" />, 
    href: "#", 
    label: "LinkedIn" 
  },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "#",
    src: logoDark,
    alt: "VULP Logo",
    title: "VULP",
  },
  sections = defaultSections,
  description = "Seu Apple com segurança total e sem enrolação. Especialistas em produtos Apple em Cuiabá. Atendimento humano, garantia de entrega e protocolos de segurança rigorosos.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2026 VULP Inc. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-32 bg-[#FAFAFA] border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary transition-colors">
                  <a href={social.href} aria-label={social.label} className="hover:scale-110 transition-transform inline-block">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-black/10 py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

