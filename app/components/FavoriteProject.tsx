import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "../lib/interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == 'project'] | order(_createdAt desc) [0...2] {
        title,
          _id,
          link,
          description,
          tags,
          "imageUrl": image.asset->url
    }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });
  return data;
}

export async function FavoriteProjects() {
  const data: ProjectCard[] = await getData();

  return (
    <section id="projects" className="py-16">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Here are some of my recent projects that showcase my skills in web development, 
          from frontend interfaces to full-stack applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {data.map((project, index) => (
          <a
            href={project.link}
            key={project._id}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                 className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {project.description}
              </p>
              
              {project.tags && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Want to see more of my work?</p>
        <Link
          href="/projects"
          className="relative inline-block text-lg group"
        >
           <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">View All Projects</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
    </section>
  );
}