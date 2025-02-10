import Navbar from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaPaintBrush, FaUsers, FaLaptop, FaSearch } from "react-icons/fa";

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

const UIUXPage = () => {
  const courseOverview = [
    "Learn the fundamentals of UI/UX design, including user-centered design principles.",
    "Master the process of creating wireframes, prototypes, and high-fidelity designs.",
    "Understand how to conduct user research, usability testing, and user interviews.",
    "Get hands-on experience using tools like Figma, Adobe XD, and Sketch."
  ];

  const keyHighlights = [
    { title: "Design Thinking", icon: <FaSearch />, description: "Learn the human-centered approach to design through user research and testing." },
    { title: "UI/UX Tools", icon: <FaLaptop />, description: "Master design tools like Figma, Adobe XD, and Sketch for professional design work." },
    { title: "Prototyping", icon: <FaUsers />, description: "Create interactive prototypes to visualize user flows and design functionality." },
    { title: "User Experience", icon: <FaPaintBrush />, description: "Understand how to design with empathy and build experiences that engage users." }
  ];

  const curriculumItems = [
    "Introduction to UI/UX Design",
    "Design Thinking and Problem Solving",
    "User Research and Usability Testing",
    "Wireframing and Prototyping",
    "UI Design Principles and Tools",
    "Creating High-Fidelity Mockups",
    "Interaction Design and Microinteractions",
    "Designing for Mobile and Web Platforms",
    "User-Centered Design and Accessibility",
    "Building a UX Portfolio",
    "Job Search Tips for UI/UX Designers",
    "UI/UX Design Best Practices"
  ];

  return (
    <main className="dark:bg-gradient-to-r from-gray-900 to-black min-h-screen flex flex-col">
      <Navbar />
      <section className="container mx-auto px-5 py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6 text-black dark:text-white">UI/UX Design Training</h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image
            src="/ui.jpeg"
            alt="UI/UX Design"
            width={400}
            height={300}
            className="rounded-lg shadow-xl"
          />
          <p className="text-lg text-black dark:text-white mt-6 md:mt-0 md:w-2/3">
            Become a skilled UI/UX designer with a comprehensive understanding of design thinking, user research, prototyping, and high-fidelity design tools.
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
                <option>UI/UX Design</option>
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

export default UIUXPage;
