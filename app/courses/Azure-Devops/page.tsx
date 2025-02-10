import Navbar from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaCloud, FaTools, FaCogs, FaCertificate } from "react-icons/fa";

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

const AzureDevOpsPage = () => {
  const courseOverview = [
    "Introduction to Azure DevOps and CI/CD pipelines.",
    "Infrastructure as Code (IaC) using Terraform and ARM templates.",
    "Azure Kubernetes Service (AKS) and containerization strategies.",
    "Monitoring, security, and compliance in Azure DevOps.",
    "Real-world projects and best practices."
  ];

  const keyHighlights = [
    { title: "Expert Learning", icon: <FaTools />, description: "Hands-on training with Azure DevOps tools." },
    { title: "CI/CD Pipelines", icon: <FaCogs />, description: "Build and deploy applications seamlessly." },
    { title: "Cloud Automation", icon: <FaCloud />, description: "Master automation in Azure environments." },
    { title: "Certification", icon: <FaCertificate />, description: "Get industry-recognized certification." }
  ];

  const curriculumItems = [
    "Introduction to Azure DevOps",
    "Setting Up CI/CD Pipelines",
    "Infrastructure as Code with Terraform",
    "Kubernetes and Docker in Azure",
    "Monitoring and Security Best Practices",
    "Automating Workflows with Azure DevOps",
    "Handling Secrets and Environment Variables",
    "Azure Boards and Agile Project Management",
    "Advanced DevOps Strategies",
    "Real-World Azure DevOps Projects"
  ];

  return (
    <main className="dark:bg-gradient-to-r from-gray-900 to-black min-h-screen flex flex-col">
      <Navbar />
      <section className="container mx-auto px-5 py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6 text-black dark:text-white">Azure DevOps Training</h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image
            src="/azure.jpeg"
            alt="Azure DevOps"
            width={400}
            height={300}
            className="rounded-lg shadow-xl"
          />
          <p className="text-lg text-black dark:text-white mt-6 md:mt-0 md:w-2/3">
            Learn Azure DevOps to streamline software development, automate infrastructure management, and enhance application delivery.
            Master CI/CD, Kubernetes, Terraform, and more in our expert-led training.
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
          <form className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name *</label>
              <input type="text" className="w-full p-3 border rounded-lg" required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Phone *</label>
              <input type="tel" className="w-full p-3 border rounded-lg" required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email *</label>
              <input type="email" className="w-full p-3 border rounded-lg" required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Select Course *</label>
              <select className="w-full p-3 border rounded-lg" required>
                <option>Azure DevOps</option>
              </select>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AzureDevOpsPage;
