import Image from "next/image";
import luffy from "../../public/kidLuffy.jpeg";

export function Hero() {
  const projects = [
    {
      title: "Event Management System",
      description: "",
      link: "https://task-manager-snowy-pi.vercel.app/",
      tech: ["React", "Next.js", "Tailwind"],
    },
    {
      title: "Digital Marketplace",
      description: "",
      link: "https://maslanui.vercel.app/",
      tech: ["Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-1 h-full lg:col-span-2 bg-gray-100 min-h-[500px] lg:min-h-[300px] rounded-2xl p-8">
        <h1 className="text-4xl lg:text-6xl font-medium">
          Hey I am Henry Maslan Iddirisu 🚀
        </h1>
        <h1 className="text-4xl font-normal lg:text-6xl mt-3">
          I am a web developer working and living in Ghana 🇬🇭
        </h1>

        <a
          href="mailto:henrycoffie22@gmail.com"
          className="relative inline-block text-lg group mt-5"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Get in touch</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>

      {/* Projects Section */}
      <div className="col-span-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Featured Links
        </h2>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* External link icon */}
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* View all projects link */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <a
            href="/projects" 
            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors"
          >
            View all projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
