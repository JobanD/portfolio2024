"use client";
import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FormEvent,
} from "react";
import { useFormStatus } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

interface FormData {
  email: string;
  subject: string;
  name: string;
  message: string;
  honeypot: string; // honeypot field
}

interface Errors {
  email?: string;
  subject?: string;
  name?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { pending } = useFormStatus();
  const { toast } = useToast();
  const isFirstRender = useRef(true);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    subject: "",
    name: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject) {
      newErrors.subject = "Please enter a subject.";
    }
    if (!formData.name) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.message) {
      newErrors.message = "Please enter a message.";
    }
    return newErrors;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendEmail = async (e: FormEvent): Promise<void> => {
    e.preventDefault(); // Ensure default form submission is prevented
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (formData.honeypot) {
      console.log("Bot detected!");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setOpen(true);
        setFormData({
          email: "",
          subject: "",
          name: "",
          message: "",
          honeypot: "",
        });
      } else {
        setOpen(true);
      }
    } catch (error) {
      setOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (open) {
      toast({
        title: "Message sent successfully!",
        description:
          "We have received your message and will get back to you shortly.",
        status: "success",
        duration: 6000,
      });
      handleClose();
    }
  }, [open, toast]);

  return (
    <form onSubmit={handleSendEmail} noValidate className="mt-3 space-y-4">
      <div className="flex flex-col space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="p-2 border border-gray-300 rounded-md w-full bg-white"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="p-2 border border-gray-300 rounded-md w-full bg-white"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject}</p>
        )}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="p-2 border border-gray-300 rounded-md w-full bg-white"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="p-2 border border-gray-300 rounded-md w-full bg-white"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleInputChange}
          className="hidden"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-primary text-white font-bold rounded-md hover:bg-secondary-dark transition flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Sending...
            </>
          ) : (
            "Send"
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
