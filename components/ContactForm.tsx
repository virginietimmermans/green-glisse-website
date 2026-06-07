"use client";

import { useState } from "react";

interface FormData {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Pour l'instant on simule l'envoi — intégrer EmailJS ou Resend ici
    // Exemple EmailJS :
    // await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);

    try {
      // Simulation d'envoi — remplacer par l'appel API réel
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ nom: "", email: "", sujet: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded-xl px-4 py-3 text-[#1C1C1C] bg-white focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent transition-colors text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#1C1C1C] mb-1.5" htmlFor="nom">
            Nom *
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            value={formData.nom}
            onChange={handleChange}
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1C1C1C] mb-1.5" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1C1C1C] mb-1.5" htmlFor="sujet">
          Sujet *
        </label>
        <select
          id="sujet"
          name="sujet"
          required
          value={formData.sujet}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Choisissez un sujet</option>
          <option value="reservation">Réservation de cours</option>
          <option value="groupe">Cours de groupe / entreprise</option>
          <option value="cadeau">Bon cadeau</option>
          <option value="info">Demande d&apos;informations</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1C1C1C] mb-1.5" htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message..."
          className={inputClass}
        />
      </div>

      {status === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl px-4 py-3 text-sm">
          ✅ Message envoyé ! Nous vous répondrons sous 24h.
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl px-4 py-3 text-sm">
          ❌ Une erreur s&apos;est produite. Contactez-nous directement par WhatsApp.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#2D6A4F] hover:bg-[#52B788] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-full transition-colors duration-200"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Vous pouvez aussi nous contacter directement par{" "}
        <a href="https://wa.me/33621772546" className="text-[#2D6A4F] hover:underline" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>{" "}
        pour une réponse encore plus rapide.
      </p>
    </form>
  );
}
