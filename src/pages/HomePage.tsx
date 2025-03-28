import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroImage, featuredProjectImages, testimonialImages } from '../data/images';
import { projects } from '../data/projects';
import { Button } from '../components/Button';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  // Get the first three projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <SEO 
        title="Quality Construction & Carpentry Services"
        description="Expert construction and carpentry services with over 30 years of experience. Specializing in renovations, new builds, and custom carpentry in Auckland."
        image={heroImage}
      />

      <div className="home-page">
        {/* Hero Section */}
        <section className="relative bg-stone-900/20 text-white min-h-[80vh] flex items-center" aria-label="Welcome">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-85"
            style={{ backgroundImage: `url('${heroImage}')` }}
            role="img"
            aria-label="Construction site showcasing our craftsmanship"
          ></div>
          <div className="container mx-auto relative z-10 px-4 py-12 md:py-20">
            <div className="max-w-2xl">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Quality Craftsmanship & Construction Excellence
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Bringing over 30 years of experience to every project, big or small.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 max-w-sm sm:max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button 
                  variant="hero-primary"
                  to="/contact"
                >
                  Request a Quote
                </Button>
                <Button 
                  variant="hero-secondary"
                  to="/gallery"
                >
                  View Our Work
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section bg-white" aria-labelledby="services-title">
          <div className="container mx-auto">
            <h2 id="services-title" className="section-title">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-background p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  role="listitem"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4" aria-hidden="true">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      {service.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="primary" to="/services" aria-label="View all our construction and carpentry services">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="section bg-accent bg-opacity-30" aria-labelledby="projects-title">
          <div className="container mx-auto">
            <h2 id="projects-title" className="section-title">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  role="listitem"
                >
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${featuredProjectImages[index]}')` }}
                    role="img"
                    aria-label={`After photo of ${project.title}`}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                    <Link 
                      to="/gallery" 
                      className="text-primary font-medium hover:underline"
                      aria-label={`View details of ${project.title}`}
                    >
                      View Details
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="primary" to="/gallery" aria-label="View our complete project gallery">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-white">
          <div className="container mx-auto">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-background p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex-shrink-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${testimonialImages[index % testimonialImages.length]}')` }}
                    ></div>
                    <div className="ml-4">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. We're ready to bring your vision to life.
            </p>
            <Button variant="white" to="/contact">
              Get in Touch
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

// Sample data
const services = [
  {
    title: 'Custom Construction',
    description: 'Full-service construction from design to completion for residential and commercial projects.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Renovations & Extensions',
    description: 'Upgrade or expand your existing space with high-quality renovation services.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16V4a2 2 0 012-2h4a2 2 0 012 2v12m4 0V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8m16 0H4m6 0v4m4-4v4" />
      </svg>
    )
  },
  {
    title: 'Bespoke Furniture',
    description: 'Handcrafted, custom furniture designed to fit your space and style.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 21V10m-6 11h18m-6 0V10m6 0h-6m0 0V3" />
      </svg>
    )
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Hometown',
    text: 'Builder Co. transformed our outdated kitchen into a beautiful, functional space. Professional, on-time, and within budget. We couldn\'t be happier!',
    rating: 5
  },
  {
    name: 'Mark Williams',
    location: 'Neighboring City',
    text: 'We hired Builder Co. for our home addition, and they exceeded all expectations. Their attention to detail and craftsmanship is outstanding.',
    rating: 5
  },
];

export default HomePage;