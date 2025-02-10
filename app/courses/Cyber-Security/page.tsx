import Navbar from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaShieldAlt, FaUserSecret, FaLock, FaBug } from "react-icons/fa";

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

const CyberSecurityPage = () => {
  const courseOverview = [
    "Understanding Cyber Security fundamentals and its importance.",
    "Exploring ethical hacking, penetration testing, and vulnerability assessment.",
    "Hands-on experience in network security and encryption techniques.",
    "Incident response, compliance, and securing enterprise systems."
  ];

  const keyHighlights = [
    { title: "Expert Training", icon: <FaShieldAlt />, description: "100+ hours of expert-led cyber security training." },
    { title: "Ethical Hacking", icon: <FaUserSecret />, description: "Hands-on ethical hacking and penetration testing." },
    { title: "Data Protection", icon: <FaLock />, description: "Learn encryption and secure data storage." },
    { title: "Threat Analysis", icon: <FaBug />, description: "Identify and mitigate cyber threats." }
  ];

  const curriculumItems = [
    "Introduction to Cyber Security",
    "Network Security Essentials",
    "Ethical Hacking and Penetration Testing",
    "Cryptography and Secure Communications",
    "Cloud Security and Compliance",
    "Incident Response and Digital Forensics",
    "Security in Web and Mobile Applications",
    "Threat Intelligence and Risk Management",
    "Malware Analysis and Reverse Engineering",
    "Cyber Security Best Practices and Policies",
    "Hands-on Cyber Security Projects",
    "Career Opportunities in Cyber Security"
  ];

  return (
    <main className="dark:bg-gradient-to-r from-gray-900 to-black min-h-screen flex flex-col">
      <Navbar />
      <section className="container mx-auto px-5 py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6 text-black dark:text-white">Cyber Security Training</h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image
            src="/cyber"
            alt="Cyber Security"
            width={400}
            height={300}
            className="rounded-lg shadow-xl"
          />
          <p className="text-lg text-black dark:text-white mt-6 md:mt-0 md:w-2/3">
            Cyber Security is essential for protecting sensitive information and digital assets. Learn about ethical hacking, encryption, and risk management through our comprehensive training program.
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
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Phone *</label>
              <input
                type="tel"
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email *</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Select Course *</label>
              <select className="w-full p-3 border rounded-lg" required>
                <option>Cyber Security</option>
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
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

export default CyberSecurityPage;
