import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Your WhatsApp number in international format (without + or leading 0)
    const phoneNumber = "917087880063";

    const text = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="contact" className="bg-black text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-heading mb-12 text-center tracking-wide">
        Contact Us
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="peer w-full bg-transparent appearance-none border-b-2 border-gray-700 focus:border-red-600 text-lg text-white px-2 py-3 focus:outline-none"
          />
          <label
            className="absolute left-2 top-3 text-gray-400 text-lg transition-all
            peer-focus:-top-4 peer-focus:text-sm peer-focus:text-red-500
            peer-valid:-top-4 peer-valid:text-sm peer-valid:text-red-500"
          >
            Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="peer w-full bg-transparent appearance-none border-b-2 border-gray-700 focus:border-red-600 text-lg text-white px-2 py-3 focus:outline-none"
          />
          <label
            className="absolute left-2 top-3 text-gray-400 text-lg transition-all
            peer-focus:-top-4 peer-focus:text-sm peer-focus:text-red-500
            peer-valid:-top-4 peer-valid:text-sm peer-valid:text-red-500"
          >
            Email
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="peer w-full bg-transparent appearance-none border-b-2 border-gray-700 focus:border-red-600 text-lg text-white px-2 py-3 h-32 resize-none focus:outline-none"
          />
          <label
            className="absolute left-2 top-3 text-gray-400 text-lg transition-all
            peer-focus:-top-4 peer-focus:text-sm peer-focus:text-red-500
            peer-valid:-top-4 peer-valid:text-sm peer-valid:text-red-500"
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-all"
        >
          Send via WhatsApp
        </button>
      </form>

      {/* Trademark */}
      <div className="mt-16 text-center text-sm text-gray-500">
        © 2025 Arc Music Studios. All Rights Reserved.
      </div>
    </div>
  );
};
