import ContactContent from '@/components/contact/ContactContent';

export default function ContactPage() {
  return (
    <main className="bg-[#EBEAE5] min-h-screen selection:bg-black selection:text-white">
      {/* Note: We use the Light Theme (#EBEAE5) for Contact to make it feel 
         like "Paperwork" or a fresh start, contrasting the dark heavy home page.
      */}
      <div className="pt-32 md:pt-48 pb-20">
        <ContactContent />
      </div>
    </main>
  );
}