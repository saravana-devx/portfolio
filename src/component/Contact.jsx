import React, { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";

const Contact = ({ contactRef }) => {
  const [state, handleSubmit] = useForm("mkgrjaay");

  // eslint-disable-next-line
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <motion.form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mkgrjaay"
      method="POST"
      ref={contactRef}
      className="max-w-5xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header */}
      <div>
        <h1 className="text-center text-green-400 text-5xl font-semibold">
          Contact Me
        </h1>
        <p className="text-center my-4 text-2xl text-gray-400">
          Feel free to reach out anytime!
        </p>
      </div>

      {/* Contact Details & Form */}
      <div className="flex flex-col justify-center md:flex-row mt-16 space-y-8 md:space-y-0 md:space-x-8">
        {/* Contact Info */}
        <motion.div
          className="flex flex-col w-full md:w-1/3 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {[
            {
              icon: <MapPin size={40} />,
              label: "Address",
              value: "Mumbai,India",
            },
            {
              icon: <Mail size={40} />,
              label: "Email",
              value: "saravana8261@gmail.com",
            },
            {
              icon: <Phone size={40} />,
              label: "Phone",
              value: "+91 86690 61864",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="text-green-400 mr-4">{item.icon}</div>
              <div>
                <h2 className="text-xl font-semibold">{item.label}</h2>
                <p className="text-gray-400">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="w-full md:w-2/3 bg-gray-900 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Write your message here"
              required
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl outline-none focus:ring-2 focus:ring-green-400 h-32"
              onChange={handleChange}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-xl text-white text-lg font-semibold"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
            {/* <textarea
              placeholder="Write your message here"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl outline-none focus:ring-2 focus:ring-green-400 h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-xl text-white text-lg font-semibold"
              disabled={state.submitting}
            >
              Send Message
            </button> */}
          </div>
        </motion.div>
      </div>
    </motion.form>
  );
};

export default Contact;
