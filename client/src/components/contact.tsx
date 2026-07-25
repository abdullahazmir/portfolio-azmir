import { contact, socials } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="bg-surface/50 py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Let's connect" title="Contact" />
          <p className="text-foreground/70">
            Have a project in mind or just want to say hi? Reach out through the form or directly
            via the details below.
          </p>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex gap-2">
              <dt className="font-semibold">Email:</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold">Phone:</dt>
              <dd>
                <a href={`tel:${contact.phone}`} className="text-accent hover:underline">
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold">WhatsApp:</dt>
              <dd>
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  {contact.whatsapp}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold">GitHub:</dt>
              <dd>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  {socials.github}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
