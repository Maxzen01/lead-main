import Navbar from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";

const GenAIPage = () => {
  return (
    <main className="dark:bg-black-100 min-h-screen flex flex-col">
      <Navbar />
      <section className="container mx-auto px-5 py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6">Generative AI</h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image
            src="/luxera.png"
            alt="Gen AI"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <p className="text-lg text-gray-700">
            Generative AI (Gen AI) is a branch of artificial intelligence that
            focuses on creating new content, such as text, images, audio, and
            videos, using deep learning models like GANs, transformers, and
            diffusion models.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Course Overview</h2>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
            <li>Introduction to Generative AI and its real-world applications.</li>
            <li>Understanding deep learning models like GPT, DALL·E, and Stable Diffusion.</li>
            <li>Hands-on projects to generate AI-driven text, images, and more.</li>
            <li>Ethical considerations and future of Generative AI.</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Enroll Now
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default GenAIPage;
