import React from 'react';
import { motion } from 'framer-motion';
import { serviceImages } from '../data/images';
import { services } from '../data/services';
import { processSteps, additionalServicesData } from '../data/service-content';
import { Button } from '../components/Button';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  // Define icons here since they need to be JSX elements
  const additionalServices = additionalServicesData.map((service, index) => {
    let icon;
    switch (index) {
      case 0: // Interior Design
        icon = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />;
        break;
      case 1: // Project Management
        icon = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />;
        break;
      case 2: // Permit Handling
        icon = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />;
        break;
      default:
        icon = null;
    }
    return { ...service, icon };
  });

  return (
    <>
      <SEO 
        title="Professional Construction & Carpentry Services"
        description="Expert construction, renovation, and carpentry services. From custom builds to home extensions, we deliver quality craftsmanship for every project."
        image={serviceImages['newConstruction']}
      />

      <div>
        {/* Page Header */}
        <section className="bg-primary text-white py-12" aria-labelledby="page-title">
          <div className="container mx-auto text-center">
            <h1 id="page-title" className="text-4xl font-bold text-white">Our Services</h1>
            <p className="mt-4 max-w-2xl mx-auto">
              Professional construction and carpentry services tailored to your needs. Quality craftsmanship for every project.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="section bg-white" aria-label="Main Services">
          <div className="container mx-auto">
            {services.map((service, index) => (
              <motion.article 
                key={index} 
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 mb-16 last:mb-0`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="lg:w-1/2">
                  <div 
                    className="h-64 lg:h-full bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url('${serviceImages[service.imageKey]}')` }}
                    role="img"
                    aria-label={`Image showcasing our ${service.title.toLowerCase()} service`}
                  ></div>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="primary" 
                    to="/contact" 
                    className="self-start"
                    aria-label={`Request a quote for ${service.title}`}
                  >
                    Request a Quote
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Service Process */}
        <section className="section bg-accent bg-opacity-20" aria-labelledby="process-title">
          <div className="container mx-auto">
            <h2 id="process-title" className="section-title">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  role="listitem"
                >
                  <div 
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {/* Connect steps with arrow (except last step) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section bg-white" aria-labelledby="additional-services-title">
          <div className="container mx-auto">
            <h2 id="additional-services-title" className="section-title">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-background p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  role="listitem"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {service.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Information */}
        <section className="section bg-background" aria-labelledby="pricing-title">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 id="pricing-title" className="section-title">Pricing Information</h2>
            <p className="text-gray-600 mb-8">
              Every project is unique and requires a custom quote. We provide transparent pricing based on your specific requirements, timeline, and materials.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-4">Get a Personalized Quote</h3>
              <p className="text-gray-600 mb-6">
                Contact us today to schedule a free consultation. We'll discuss your project needs and provide a detailed estimate.
              </p>
              <Button 
                variant="primary" 
                to="/contact"
                aria-label="Schedule a free consultation for a personalized quote"
              >
                Request a Quote
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left" role="list">
              <div className="bg-white p-6 rounded-lg shadow-md" role="listitem">
                <h4 className="font-bold text-lg mb-2">Free Consultations</h4>
                <p className="text-gray-600">
                  We provide free on-site consultations to assess your project needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md" role="listitem">
                <h4 className="font-bold text-lg mb-2">Detailed Estimates</h4>
                <p className="text-gray-600">
                  Our quotes include a breakdown of labor, materials, and timeline.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md" role="listitem">
                <h4 className="font-bold text-lg mb-2">Financing Available</h4>
                <p className="text-gray-600">
                  Ask about our financing options for larger renovation projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white" aria-labelledby="cta-title">
          <div className="container mx-auto text-center">
            <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let's bring your vision to life.
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
      </div>
    </>
  );
};

export default ServicesPage;