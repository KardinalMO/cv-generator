import Header from "@/components/Header";
import FormSection from "@/components/FormSection";
import CVPreview from "@/components/CVPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10 gap-10">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">
        <FormSection />
        <CVPreview />
      </div>
    </main>
  );
}
