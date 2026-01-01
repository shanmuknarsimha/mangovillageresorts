import { Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

export default function Social() {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', link:'https://www.instagram.com/mangovillageresorts',name:' Instagram' },
    { icon: Youtube, label: 'Youtube', link:'https://www.youtube.com/@MangoVillageResorts',name:' Youtube' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 tracking-wide">
          STAY CONNECTED WITH MANGO VILLAGE
        </h2>
        <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed mb-12">
          Follow our journey through curated stories, guest experiences, and celebrations shared across our destinations.
        </p>

        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                aria-label={social.label}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Icon className="min-w-6 min-h-6 mr-1" strokeWidth={1.5} />
                {social.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
