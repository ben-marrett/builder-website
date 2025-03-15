import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceImages } from '../data/images';

// Define the type for service image keys
type ServiceImageKey = keyof typeof serviceImages;

// Define the type for a service
interface Service {
  title: string;
  imageKey: ServiceImageKey;
  description: string;
  features: string[];
}

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto">
            Professional construction and carpentry services tailored to your needs. Quality craftsmanship for every project.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-white">
        <div className="container mx-auto">
          {services.map((service, index) => (
            <motion.div 
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
                ></div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary self-start">
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Process */}
      <section className="section bg-accent bg-opacity-20">
        <div className="container mx-auto">
          <h2 className="section-title">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Connect steps with arrow (except last step) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
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
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4">
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
      <section className="section bg-background">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="section-title">Pricing Information</h2>
          <p className="text-gray-600 mb-8">
            Every project is unique and requires a custom quote. We provide transparent pricing based on your specific requirements, timeline, and materials.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4">Get a Personalized Quote</h3>
            <p className="text-gray-600 mb-6">
              Contact us today to schedule a free consultation. We'll discuss your project needs and provide a detailed estimate.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">Free Consultations</h4>
              <p className="text-gray-600">
                We provide free on-site consultations to assess your project needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">Detailed Estimates</h4>
              <p className="text-gray-600">
                Our quotes include a breakdown of labor, materials, and timeline.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2">Financing Available</h4>
              <p className="text-gray-600">
                Ask about our financing options for larger renovation projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your vision to life.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

// Sample data
const services: Service[] = [
  {
    title: 'Home Renovations',
    imageKey: 'renovations',
    description: 'Transform your existing space with our comprehensive renovation services. We handle everything from simple updates to complete home transformations.',
    features: [
      'Kitchen and bathroom remodels',
      'Basement finishing',
      'Interior and exterior renovations',
      'Structural modifications',
      'Aging-in-place modifications'
    ]
  },
  {
    title: 'New Construction',
    imageKey: 'newConstruction',
    description: 'Build your dream home from the ground up with our expert construction services. We manage the entire process from design to final walkthrough.',
    features: [
      'Custom home building',
      'Additions and extensions',
      'Garage construction',
      'Guest houses and ADUs',
      'Commercial construction'
    ]
  },
  {
    title: 'Custom Carpentry',
    imageKey: 'carpentry',
    description: 'Add character and functionality to your home with our custom carpentry services. Each piece is handcrafted to meet your specific needs and style preferences.',
    features: [
      'Built-in cabinetry and shelving',
      'Custom furniture',
      'Trim and molding installation',
      'Custom staircases and railings',
      'Architectural details'
    ]
  },
  {
    title: 'Kitchen Remodeling',
    imageKey: 'kitchenRemodeling',
    description: 'Create the kitchen of your dreams with our specialized kitchen remodeling services. We combine functionality with beautiful design for the heart of your home.',
    features: [
      'Custom cabinet installation',
      'Countertop replacement',
      'Island additions',
      'Lighting upgrades',
      'Complete kitchen redesigns'
    ]
  },
  {
    title: 'Bathroom Remodeling',
    imageKey: 'bathroomRemodeling',
    description: 'Transform your bathroom into a luxurious retreat with our bathroom remodeling services. From simple updates to complete renovations, we do it all.',
    features: [
      'Shower and tub replacement',
      'Vanity and fixture upgrades',
      'Tile installation',
      'Accessibility improvements',
      'Spa-like bathroom creations'
    ]
  },
  {
    title: 'Outdoor Living Spaces',
    imageKey: 'outdoorLiving',
    description: 'Extend your living space to the outdoors with our custom deck, patio, and outdoor kitchen services. Create the perfect space for relaxation and entertainment.',
    features: [
      'Custom deck construction',
      'Pergolas and gazebos',
      'Outdoor kitchens',
      'Fire pits and fireplaces',
      'Screened porches and sunrooms'
    ]
  }
];

const processSteps = [
  {
    title: 'Consultation',
    description: 'We meet to discuss your project goals, budget, and timeline. This allows us to understand your vision and needs.',
  },
  {
    title: 'Design & Planning',
    description: 'We create detailed plans and provide a comprehensive quote outlining all aspects of your project.',
  },
  {
    title: 'Construction',
    description: 'Our skilled team brings your project to life with quality craftsmanship and attention to detail.',
  },
  {
    title: 'Final Walkthrough',
    description: 'We review the completed project with you to ensure everything meets our high standards and your expectations.',
  },
];

const additionalServices = [
    {
      title: 'Interior Design Collaboration',
      description: 'We work with interior designers or can recommend trusted professionals to enhance your project.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    },
    {
      title: 'Project Management',
      description: 'Full-service project management ensuring your project stays on schedule and within budget.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />,
    },
    {
      title: 'Permit Handling',
      description: 'We navigate the permit process for you, ensuring all work is up to code and legally compliant.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
    },
  ];
  
  export default ServicesPage;