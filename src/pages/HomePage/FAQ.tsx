import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click on the Sign Up button in the navigation bar, fill in your details, and verify your email to create your account.",
    },
    {
      question: "Can I sign in using Google?",
      answer:
        "Yes. We support Google Authentication through Supabase OAuth for a quick and secure login experience.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "Click on the 'Forgot Password?' link on the login page, enter your email address, and follow the instructions sent to your inbox.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use Supabase Authentication, secure database storage, encrypted connections, and industry best practices to keep your data protected.",
    },
    {
      question: "Is the website mobile friendly?",
      answer:
        "Yes. Our application is fully responsive and works smoothly on desktops, tablets, and mobile devices.",
    },
    {
      question: "Which technologies are used?",
      answer:
        "This project is built using React, TypeScript, Tailwind CSS, React Router, and Supabase.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Find answers to the most common questions about our platform.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold text-red-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 leading-7 border-t">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}