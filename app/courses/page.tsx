import React from "react";
import Navbar from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";

const courses = [
  {
    title: "Gen AI",
    img: "/luxera.png",
    description: "Explore the world of Generative AI and its real-world applications in various fields.",
    link: "/gen-ai.js",
  },
  {
    title: "Prompt Engineering",
    img: "/blogify.jpg",
    description: "Master the art of crafting precise prompts to optimize AI model performance.",
    link: "#",
  },
  {
    title: "Cybersecurity Basics",
    img: "/cyber",
    description: "Understand the fundamentals of cybersecurity and how to protect digital assets.",
    link: "#",
  },
  {
    title: "Digital Marketing",
    img: "/camplore.jpg",
    description: "Learn the strategies and tools to create successful digital marketing campaigns.",
    link: "#",
  },
  {
    title: "AWS & Devops",
    img: "/gallerysync.jpg",
    description: "Gain expertise in AWS cloud services and DevOps practices for modern application deployment.",
    link: "#",
  },
  
  {
    title: "Mean Stack",
    img: "/mean.jpeg",
    description: "Learn MongoDB, Express.js, Angular, and Node.js (MEAN Stack) to build modern, full-stack web applications. ",
    link: "#",
  },
  {
    title: "Python Full Stack",
    img: "/carhub.jpg",
    description: "Learn Python Full Stack Development by building dynamic web applications using Python, Django/Flask for backend, and HTML, CSS, JavaScript, React for frontend.",
    link: "#",
  },
  {
    title: "Automation Testing",
    img: "/automation.jpeg",
    description: "Learn Automation Testing using tools like Selenium, Cypress, and Playwright to improve software quality and efficiency. ",
    link: "#",
  },
  {
    title: "UI/UX",
    img: "/ui.jpeg",
    description: "Learn UI/UX design principles to create engaging and user-friendly interfaces. Gain expertise in user research, wireframing, prototyping, visual design, and usability testing using tools like Figma, Adobe XD, and Sketch.",
    link: "#",
  },
  {
    title: "Azure & Devops",
    img: "/azure.jpeg",
    description: "Understand Azure & DevOps methodologies and automate development workflows.",
    link: "#",
  }
];

const MoreCourses = () => {
  return (
    <main className="dark:bg-black-100 min-h-screen flex flex-col">
      <Navbar />
      <section className="container mx-auto px-5 py-10 flex-grow pt-25">
        <h1 className="text-3xl font-bold text-center mb-6">More Courses</h1>

        {/* Grid Layout for Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              
              {/* Image Section */}
              <div className="w-full flex justify-center">
                <Image
                  src={course.img}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Description Section */}
              <div className="w-full text-center mt-4 px-4">
                <h2 className="text-2xl font-semibold text-gray-800">{course.title}</h2>
                <p className="text-gray-600 mt-2">{course.description}</p>
                <a href={course.link} className="mt-4 inline-block text-blue-500 font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>
      <br></br>
      <br></br>
      <br></br>
     
      <Footer />
    </main>
  );
};

export default MoreCourses;
