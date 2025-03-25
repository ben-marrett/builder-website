import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BeforeAfterModal from '../components/BeforeAfterModal';
import { projects, categories, getCategoryLabel } from '../data/projects';
import { Button } from '../components/Button';
import SEO from '../components/SEO';

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
    <>
      <SEO 
        title="Our Project Gallery"
        description="Browse our portfolio of completed construction and carpentry projects. View before and after transformations of homes, renovations, and custom builds."
        type="article"
      />

      <div>
        {/* Page Header */}
        <section className="bg-primary text-white py-12" aria-labelledby="page-title">
          <div className="container mx-auto text-center">
            <h1 id="page-title" className="text-4xl font-bold text-white">Our Work</h1>
            <p className="mt-4 max-w-2xl mx-auto">
              Browse through our portfolio of completed projects showcasing our craftsmanship and attention to detail.
            </p>
          </div>
        </section>
        
        {/* Filter Categories */}
        <section className="bg-white py-8 border-b" aria-labelledby="filter-heading">
          <div className="container mx-auto">
            <h2 id="filter-heading" className="sr-only">Filter projects by category</h2>
            <div className="flex flex-wrap justify-center gap-4" role="radiogroup" aria-label="Project categories">
              <button
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedCategory('all')}
                role="radio"
                aria-checked={selectedCategory === 'all'}
                name="category-filter"
              >
                All Projects
              </button>
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category.value
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  role="radio"
                  aria-checked={selectedCategory === category.value}
                  name="category-filter"
                >
                  {getCategoryLabel(category.value)}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="section bg-background" aria-labelledby="projects-heading">
          <div className="container mx-auto">
            <h2 id="projects-heading" className="sr-only">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
                  onClick={() => openProjectModal(project)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  role="listitem"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openProjectModal(project);
                    }
                  }}
                  aria-label={`View details of ${project.title}`}
                >
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.afterImage}')` }}
                    role="img"
                    aria-label={`After photo of ${project.title}`}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      <span 
                        key={project.category} 
                        className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600"
                      >
                        {getCategoryLabel(project.category)}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white" aria-labelledby="cta-heading">
          <div className="container mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your vision and get a free quote.
            </p>
            <Button 
              variant="white" 
              to="/contact"
              aria-label="Contact us to discuss your project"
            >
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
    </>
  );
};

export default GalleryPage;