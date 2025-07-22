"use client";

import { useCVStore } from "@/store/cvStore";

export default function FormSection() {
  const { cvData, setCVData } = useCVStore();

  return (
    <section className="bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl mb-4">Preencha suas informações:</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome completo"
          value={cvData.name}
          onChange={(e) => setCVData({ name: e.target.value })}
          className="p-2 rounded bg-gray-700 text-white"
        />
        <input
          type="email"
          placeholder="Email profissional"
          value={cvData.email}
          onChange={(e) => setCVData({ email: e.target.value })}
          className="p-2 rounded bg-gray-700 text-white"
        />
        <input
          type="text"
          placeholder="Telefone"
          value={cvData.phone}
          onChange={(e) => setCVData({ phone: e.target.value })}
          className="p-2 rounded bg-gray-700 text-white"
        />
        <textarea
          placeholder="Formação acadêmica"
          value={cvData.education}
          onChange={(e) => setCVData({ education: e.target.value })}
          className="p-2 rounded bg-gray-700 text-white"
        />
        <textarea
          placeholder="Experiência profissional"
          value={cvData.experience}
          onChange={(e) => setCVData({ experience: e.target.value })}
          className="p-2 rounded bg-gray-700 text-white"
        />
        <textarea
          placeholder="Habilidades / Skills"
          value={cvData.skills}
          onChange={(e) => setCVData({ skills: e.target.value })}
          className="p-2 rounded bg-gray-700 text-white"
        />
      </form>
    </section>
  );
}
