import { Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import MagneticButton from "../components/MagneticButton.jsx";
import SectionHeader from "../components/SectionHeader";
import { profile } from "../data/profile";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Please enter a valid email.";
    if (!form.subject.trim()) nextErrors.subject = "Please add a subject.";
    if (form.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters.";
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setStatus({ type: "", message: "" });

    if (Object.keys(nextErrors).length) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.formSubmitEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        })
      });

      if (!response.ok) throw new Error("Unable to send message.");

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully."
      });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or email me directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="section-padding">
      <div className="container-page">
        <SectionHeader
          eyebrow="Contact"
          title="Send a query"
          copy="For opportunities, project discussions, or academic collaboration, send a message through the form."
        />

        <form onSubmit={handleSubmit} noValidate className="soft-card mx-auto max-w-3xl p-5 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={updateField}
              error={errors.name}
              placeholder="Your name"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              error={errors.email}
              placeholder="you@example.com"
            />
          </div>

          <div className="mt-5">
            <Field
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={updateField}
              error={errors.subject}
              placeholder="Project or opportunity"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-bold text-charcoal">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={updateField}
              rows={6}
              placeholder="Write your message here..."
              className="mt-2 w-full resize-y rounded-2xl border border-charcoal/10 bg-paper px-4 py-3 text-sm text-charcoal outline-none transition duration-300 placeholder:text-stoneText/55 focus:border-clay focus:shadow-[0_0_0_4px_rgba(138,96,72,0.10)]"
            />
            {errors.message ? <p className="mt-2 text-sm font-semibold text-clay">{errors.message}</p> : null}
          </div>

          <AnimatePresence>
            {status.message ? (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-semibold shadow-soft ${
                status.type === "success"
                  ? "border-slateSoft/20 bg-mist/50 text-charcoal"
                  : "border-clay/25 bg-clay/10 text-clay"
              }`}
              >
                {status.message}
              </motion.div>
            ) : null}
          </AnimatePresence>

          <MagneticButton as="button" type="submit" disabled={isSubmitting} className="mt-6 disabled:cursor-not-allowed disabled:opacity-60">
            <Send size={16} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </MagneticButton>
        </form>
      </div>
    </AnimatedSection>
  );
}

function Field({ label, name, type = "text", value, onChange, error, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-charcoal">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-paper px-4 py-3 text-sm text-charcoal outline-none transition duration-300 placeholder:text-stoneText/55 focus:border-clay focus:shadow-[0_0_0_4px_rgba(138,96,72,0.10)]"
      />
      {error ? <p className="mt-2 text-sm font-semibold text-clay">{error}</p> : null}
    </div>
  );
}
