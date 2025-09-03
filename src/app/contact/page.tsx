import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-6">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <p className="text-center max-w-xl mb-8">
        Have questions, feedback, or just want to say hello? Fill out the form below.
      </p>
      <ContactForm />
    </main>
  );
}
