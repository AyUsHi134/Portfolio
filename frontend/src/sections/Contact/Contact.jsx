import React, { useState } from "react";
import { sendContactMessage } from "../../services/contactService";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionHeading from "../../components/ui/SectionHeading";
import Card from "../../components/ui/Card";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const data = await sendContactMessage(form);
      setStatus("success");
      setStatusMessage((data && data.message) || "Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("[Contact] POST /contact failed:", err);
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <SectionWrapper
      id="contact"
      background="tint"
      className="clip-path-custom-2"
    >
      <SectionHeading title="CONTACT" subtitle="Feel free to reach out" />

      {/* Form Card (MATCHED CARD STYLE) */}
      <Card
        as="form"
        onSubmit={handleSubmit}
        hoverLift
        className="max-w-3xl mx-auto"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 outline-none focus:border-purple-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 outline-none focus:border-purple-500"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 outline-none focus:border-purple-500"
            required
          />

          {status === "success" && (
            <p className="text-sm text-green-400">{statusMessage}</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">{statusMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </Card>
    </SectionWrapper>
  );
};

export default Contact;
