'use client';
import { useState } from 'react';
import axios from 'axios';
import Navbar from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaBrain, FaRobot, FaCode, FaCogs, FaCertificate, FaHandsHelping } from "react-icons/fa";

const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-semibold text-center mb-6 text-black dark:text-white">{title}</h2>
);

const Card = ({ title, icon, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 transition-all hover:scale-105 hover:shadow-2xl">
    <div className="flex items-center space-x-4 mb-4">
      <div className="bg-blue-500 text-white p-3 rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ListItem = ({ items }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-gray-700">
    {items.map((item, index) => (
      <li key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
        {item}
      </li>
    ))}
  </ul>
);

const GenAIPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Generative AI',
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await axios.post('/api/sentry-example-api', formData);
      setMessage(response.data.message);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const courseOverview = [
    "Introduction to Generative AI, deep learning, and neural networks.",
    "Hands-on experience with models like GPT, DALL·E, and StyleGAN.",
    "Learn the theory behind generative models and their applications.",
    "Explore ethical considerations and future trends in AI technology."
  ];

  const keyHighlights = [
    { title: "AI Fundamentals", icon: <FaBrain />, description: "Learn the fundamentals of artificial intelligence and machine learning." },
    { title: "Generative Models", icon: <FaRobot />, description: "Explore powerful generative models like GPT and DALL·E." },
    { title: "Certifications", icon: <FaCertificate />, description: "Prepare for certifications in AI and machine learning." },
    { title: "Job Assistance", icon: <FaHandsHelping />, description: "Internship and placement support in AI and tech companies." }
  ];

  const curriculumItems = [
    "Introduction to AI and Machine Learning",
    "Deep Learning and Neural Networks",
    "Generative Models: GANs, GPT, and StyleGAN",
    "Applications of Generative AI in Content Creation",
    "Ethics of AI and Bias in Machine Learning",
    "Natural Language Processing (NLP)",
    "AI for Art, Music, and Video Generation",
    "Building AI Models with TensorFlow and PyTorch",
    "AI in Healthcare, Business, and Marketing",
    "Future of AI: Trends and Opportunities",
    "AI Deployment and Integration in Real-World Applications"
  ];

  return (
    <main className="dark:bg-gradient-to-r from-gray-900 to-black min-h-screen flex flex-col">
      <Navbar />
      <section className="container mx-auto px-5 py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6 text-black dark:text-white">Generative AI</h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image
            src="/gen-ai.jpeg"
            alt="Generative AI"
            width={400}
            height={300}
            className="rounded-lg shadow-xl"
          />
          <p className="text-lg text-black dark:text-white mt-6 md:mt-0 md:w-2/3">
            Generative AI is transforming industries through innovative solutions. Learn how to create and deploy advanced AI models that generate new content, data, and ideas.
          </p>
        </div>

        <div className="mt-12">
          <SectionTitle title="Course Overview" />
          <ListItem items={courseOverview} />
        </div>

        <div className="mt-12">
          <SectionTitle title="Key Highlights" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((highlight, index) => (
              <Card
                key={index}
                title={highlight.title}
                icon={highlight.icon}
                description={highlight.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle title="Curriculum" />
          <ListItem items={curriculumItems} />
        </div>

        <div className="mt-12">
          <h1 className="text-4xl font-bold text-center mb-6 text-black dark:text-white">Enrollment</h1>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {message && <p className="text-green-500 text-center">{message}</p>}
            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Enroll Now</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default GenAIPage;
