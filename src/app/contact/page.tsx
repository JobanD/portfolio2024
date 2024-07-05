import ContactForm from "@/components/ContactForm";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Let&apos;s Connect!
        </h1>
        <p className="text-xl text-gray-600">
          I&apos;m always excited to collaborate on new projects and ideas.
        </p>
      </div>

      {/* Contact Information and Form */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Contact Information */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="text-blue-600 mr-3" size={24} />
              <a
                href="mailto:joban.d555@gmail.com"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                joban.d555@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Github className="text-gray-700 mr-3" size={24} />
              <a
                href="https://github.com/JobanD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                My GitHub Profile
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="text-blue-600 mr-3" size={24} />
              <a
                href="https://www.linkedin.com/in/jobandhindsa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                My LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Contact Form */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Send Me an Email Directly!
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
