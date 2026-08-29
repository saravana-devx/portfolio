import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import SectionIntro from "./SectionIntro";

const contactInfo = [
  { icon: <MapPin size={18} />, label: "Address", value: "Mumbai, India" },
  { icon: <Mail size={18} />, label: "Email", value: "saravana.devx@gmail.com" },
  { icon: <Phone size={18} />, label: "Phone", value: "+91 86690 61864" },
];

const Contact = ({ contactRef }) => {
  const [state, handleSubmit] = useForm("mkgrjaay");

  return (
    <motion.div
      ref={contactRef}
      className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <SectionIntro
        eyebrow="Contact"
        heading="If the team is ambitious, I’m interested."
        description="Reach out for backend roles, product engineering work, or teams that need someone comfortable across architecture and UI cleanup."
      />

      <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-5">
          {contactInfo.map((item, index) => (
            <div key={index} className="border-t border-white/10 pt-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-300/20 text-amber-300">
                  {item.icon}
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs uppercase tracking-[0.24em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="text-white">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mkgrjaay"
          method="POST"
          className="border-t border-white/10 pt-6"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-full border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition-colors focus:border-amber-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full rounded-full border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition-colors focus:border-amber-300"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone (optional)"
              className="w-full rounded-full border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition-colors focus:border-amber-300"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full rounded-full border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition-colors focus:border-amber-300"
            />
          </div>
          <textarea
            name="message"
            placeholder="Write your message here"
            required
            rows={5}
            className="mb-6 w-full resize-none rounded-[28px] border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition-colors focus:border-amber-300"
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full rounded-full bg-amber-300 py-3 font-mono text-sm font-medium uppercase tracking-[0.2em] text-slate-950 transition-colors hover:bg-amber-200 disabled:opacity-60"
          >
            {state.submitting ? "Sending..." : "Send message"}
          </button>
          {state.succeeded && (
            <p className="mt-4 font-mono text-sm text-emerald-300">
              Message sent. I&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
