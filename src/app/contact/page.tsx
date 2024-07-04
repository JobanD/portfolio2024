import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="gap-5">
      {/* Hero Section */}
      <div className="text-center pt-5 px-1">
        <div className="bg-gradient-to-r from-primary-dark to-primary text-secondary-light text-center rounded-lg shadow-md mx-5 p-5">
          <h1 className="text-5xl font-bold mb-4">Contact Me!</h1>
          <p className="text-xl">I would love to hear from you.</p>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-3 py-5">
        <div className="bg-secondary text-primary-dark p-6 rounded-lg shadow-md">
          {/* Contact Information */}
          <h2 className="text-2xl font-bold mb-4">Header 2</h2>
          <p className="mb-2">Email: joban.d555@gmail.com</p>
          {/* Social Links */}
          <h3 className="text-xl font-bold mt-5 mb-2">Github</h3>
        </div>

        <div className="bg-secondary text-primary-dark p-6 rounded-lg shadow-md">
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
