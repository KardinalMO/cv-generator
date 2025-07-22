"use client";

import { useCVStore } from "@/store/cvStore";

export default function CVPreview() {
  const { cvData } = useCVStore();

  return (
    <section className="bg-white text-black rounded-xl shadow-md h-full overflow-hidden flex">
      {/* Lateral colorida (Sidebar) */}
      <div className="w-1/3 bg-gray-800 text-white p-6 flex flex-col gap-6">
        <h2 className="text-3xl font-bold">{cvData.name || "Seu Nome"}</h2>
        <p className="text-sm">{cvData.email || "seu@email.com"}</p>
        <p className="text-sm">{cvData.phone || "(00) 00000-0000"}</p>
        <div>
          <h3 className="font-semibold text-lg mb-2">Skills</h3>
          <p className="text-sm">{cvData.skills || "JavaScript, React, TypeScript"}</p>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="w-2/3 p-10 flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-bold border-b border-gray-300 pb-2">🎓 Formação</h3>
          <p className="mt-2">{cvData.education || "Descreva sua formação aqui..."}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold border-b border-gray-300 pb-2">💼 Experiência</h3>
          <p className="mt-2">{cvData.experience || "Descreva sua experiência aqui..."}</p>
        </div>
      </div>
    </section>
  );
}
