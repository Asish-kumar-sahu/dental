import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  AlertCircle,
  Send,
  CircleCheck,
  CalendarDays,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { SectionLabel } from "../components/Headings";

export default function Contact() {
  const { contact, theme } = siteConfig;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "",
    appointmentDate: "",
    appointmentTime: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [bookingSummary, setBookingSummary] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const summary = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      concern: form.concern,
      appointmentDate: form.appointmentDate || "Flexible",
      appointmentTime: form.appointmentTime || "Flexible",
      message: form.message,
    };

    const message = `Appointment request:%0AName: ${summary.name}%0APhone: ${summary.phone}%0AEmail: ${summary.email}%0AConcern: ${summary.concern}%0ADate: ${summary.appointmentDate}%0ATime: ${summary.appointmentTime}%0AMessage: ${summary.message || "No message"}`;

    setBookingSummary(summary);
    setSubmitted(true);
    localStorage.setItem("dental-booking-request", JSON.stringify(summary));
    window.open(`https://wa.me/917022132084?text=${message}`, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setSubmitted(false);
      setBookingSummary(null);
      setForm({
        name: "",
        phone: "",
        email: "",
        concern: "",
        appointmentDate: "",
        appointmentTime: "",
        message: "",
      });
    }, 6000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Info column */}
          <div className="lg:col-span-5">
            <SectionLabel>{contact.sectionLabel}</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6"
              style={{ color: theme.textPrimary }}
            >
              <span className="block">{contact.heading.line1}</span>
              <span className="block" style={{ color: theme.accent }}>
                {contact.heading.line2}
              </span>
            </motion.h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: theme.textMuted }}>
              {contact.description}
            </p>

            <div className="space-y-1">
              <ContactRow
                icon={<MapPin size={16} />}
                label="Find us"
                value={
                  <>
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                    <br />
                    {contact.address.line3}
                  </>
                }
                href={contact.mapLink || "https://www.google.com/maps/search/?api=1&query=Dr.Motadu's+Multispeciality+Dental+Clinic,+Camp,+Pune"}
              />
              {contact.phone && (
                <ContactRow
                  icon={<Phone size={16} />}
                  label="Call"
                  value={contact.phone}
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                />
              )}
              {contact.email && (
                <ContactRow
                  icon={<Mail size={16} />}
                  label="Email"
                  value={contact.email}
                  href={`mailto:${contact.email}`}
                />
              )}
            </div>

            {/* Hours */}
            {contact.hours?.length > 0 && (
              <div
                className="mt-6 p-5 rounded-2xl"
                style={{
                  background: theme.bgSecondary,
                  border: `1px solid ${theme.border}`,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={14} style={{ color: theme.accent }} />
                  <span
                    className="text-xs font-bold tracking-wider uppercase"
                    style={{ color: theme.accent }}
                  >
                    Clinic Hours
                  </span>
                </div>
                {contact.hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 text-sm"
                    style={{
                      borderBottom:
                        i < contact.hours.length - 1
                          ? `1px solid ${theme.border}`
                          : "none",
                    }}
                  >
                    <span style={{ color: theme.textMuted }}>{h.day}</span>
                    <span className="font-medium" style={{ color: theme.textPrimary }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Emergency line */}
            {contact.emergency?.show && (
              <motion.a
                href={`tel:${contact.emergency.phone.replace(/\s/g, "")}`}
                whileHover={{ scale: 1.02 }}
                className="mt-4 flex items-center gap-3 p-4 rounded-2xl"
                style={{
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#fecaca", color: "#b91c1c" }}
                >
                  <AlertCircle size={16} />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm" style={{ color: "#991b1b" }}>
                    {contact.emergency.text}
                  </div>
                  <div className="text-xs" style={{ color: "#991b1b" }}>
                    {contact.emergency.phone}
                  </div>
                </div>
              </motion.a>
            )}
          </div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 lg:p-10 rounded-3xl"
              style={{
                background: theme.bgSecondary,
                border: `1px solid ${theme.border}`,
              }}
            >
              <h3
                className="font-display font-bold text-2xl mb-2"
                style={{ color: theme.textPrimary }}
              >
                {contact.form.title}
              </h3>
              <p className="text-sm mb-8" style={{ color: theme.textMuted }}>
                Fill the form below and we'll get back within 2 hours.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <FormInput
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <FormInput
                  label="Preferred Date"
                  name="appointmentDate"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={form.appointmentDate}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Preferred Time"
                  name="appointmentTime"
                  type="time"
                  value={form.appointmentTime}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-xs font-semibold mb-2 tracking-wide"
                  style={{ color: theme.textMuted }}
                >
                  Primary Concern
                </label>
                <select
                  name="concern"
                  value={form.concern}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                  style={{
                    background: theme.bgPrimary,
                    border: `1px solid ${theme.border}`,
                    color: theme.textPrimary,
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = theme.accent)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = theme.border)}
                >
                  <option value="">Select a concern</option>
                  {contact.form.concernOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label
                  className="block text-xs font-semibold mb-2 tracking-wide"
                  style={{ color: theme.textMuted }}
                >
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm resize-none"
                  style={{
                    background: theme.bgPrimary,
                    border: `1px solid ${theme.border}`,
                    color: theme.textPrimary,
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = theme.accent)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = theme.border)}
                  placeholder="Tell us about your concerns, medical history, or questions..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 text-white font-semibold text-sm rounded-full flex items-center justify-center gap-2 disabled:opacity-80"
                style={{
                  background: submitted
                    ? "#16a34a"
                    : `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
                  boxShadow: `0 10px 30px ${theme.accent}40`,
                }}
              >
                {submitted ? (
                  <>
                    <CircleCheck size={16} />
                    Appointment request received
                  </>
                ) : (
                  <>
                    Book Appointment
                    <Send size={14} />
                  </>
                )}
              </motion.button>

              {bookingSummary && (
                <div
                  className="mt-4 rounded-2xl p-4 text-sm"
                  style={{
                    background: theme.bgPrimary,
                    border: `1px solid ${theme.border}`,
                    color: theme.textPrimary,
                  }}
                >
                  <div className="flex items-center gap-2 font-semibold mb-2" style={{ color: theme.accent }}>
                    <CalendarDays size={16} />
                    Booking summary
                  </div>
                  <div className="space-y-1">
                    <p><span className="font-medium">Patient:</span> {bookingSummary.name}</p>
                    <p><span className="font-medium">Concern:</span> {bookingSummary.concern}</p>
                    <p><span className="font-medium">Date:</span> {bookingSummary.appointmentDate}</p>
                    <p><span className="font-medium">Time:</span> {bookingSummary.appointmentTime}</p>
                  </div>
                </div>
              )}

              <p className="text-xs text-center mt-4" style={{ color: theme.textLight }}>
                Your information is confidential and used only to confirm your appointment.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        {contact.mapEmbed && (
          <div
            className="mt-12 rounded-3xl overflow-hidden aspect-[16/9]"
            style={{ border: `1px solid ${theme.border}` }}
          >
            <iframe
              src={contact.mapEmbed}
              className="w-full h-full"
              loading="lazy"
              title="Clinic location"
            />
          </div>
        )}
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }) {
  const { theme } = siteConfig;
  const Wrap = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-start gap-4 py-4 transition-colors"
      style={{ borderBottom: `1px solid ${theme.border}` }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: theme.accentSoft, color: theme.accent }}
      >
        {icon}
      </div>
      <div className="flex-1 pt-0.5">
        <div className="text-[10px] font-bold tracking-wider uppercase mb-0.5" style={{ color: theme.textLight }}>
          {label}
        </div>
        <div className="text-sm" style={{ color: theme.textPrimary }}>
          {value}
        </div>
      </div>
    </Wrap>
  );
}

function FormInput({ label, ...props }) {
  const { theme } = siteConfig;
  return (
    <div>
      <label
        className="block text-xs font-semibold mb-2 tracking-wide"
        style={{ color: theme.textMuted }}
      >
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
        style={{
          background: theme.bgPrimary,
          border: `1px solid ${theme.border}`,
          color: theme.textPrimary,
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = theme.accent)}
        onBlur={(e) => (e.currentTarget.style.borderColor = theme.border)}
      />
    </div>
  );
}
