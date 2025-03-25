import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BeforeAfterModal from '../components/BeforeAfterModal';
import { projects, categories, getCategoryLabel } from '../data/projects';
import { Button } from '../components/Button';

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Filter projects based on selected category
  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

  // Open modal with selected project
  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const closeProjectModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Our Work</h1>
          <p className="mt-4 max-w-2xl mx-auto">
            Browse through our portfolio of completed projects showcasing our craftsmanship and attention to detail.
          </p>
        </div>
      </section>
      
      {/* Filter Categories */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCategory === category.value ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="section bg-background py-12">
        <div className="container mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  id={`project-${project.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="h-64 bg-cover bg-center cursor-pointer relative group"
                    style={{ backgroundImage: `url('${project.afterImage}')` }}
                    onClick={() => openProjectModal(project)}
                  >
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white text-primary font-bold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Before & After
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="px-3 py-1 bg-accent text-primary text-sm rounded-full">
                        {getCategoryLabel(project.category)}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <button 
                      className="text-primary font-medium hover:underline"
                      onClick={() => openProjectModal(project)}
                    >
                      View Before & After
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation.
          </p>
          <Button variant="white" to="/contact">
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Before/After Modal */}
      {selectedProject && (
        <BeforeAfterModal
          isOpen={isModalOpen}
          onClose={closeProjectModal}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default GalleryPage;