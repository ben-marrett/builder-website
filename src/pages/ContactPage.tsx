import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with our team for a free consultation about your construction or carpentry project. We're here to help bring your vision to life."
      />

      <div>
        {/* Page Header */}
        <section className="bg-primary text-white py-12" aria-labelledby="page-title">
          <div className="container mx-auto text-center">
            <h1 id="page-title" className="text-4xl font-bold text-white">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto">
              Ready to start your project? Get in touch with our team for a free consultation.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section bg-background" aria-labelledby="contact-form-title">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 id="contact-form-title" className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        required
                        aria-required="true"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        required
                        aria-required="true"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        required
                        aria-required="true"
                      >
                        <option value="">Select a project type</option>
                        <option value="newConstruction">New Construction</option>
                        <option value="renovation">Renovation</option>
                        <option value="addition">Home Addition</option>
                        <option value="customCarpentry">Custom Carpentry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        required
                        aria-required="true"
                      ></textarea>
                    </div>

                    <Button 
                      variant="primary" 
                      type="submit"
                      aria-label="Submit contact form"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary rounded-full p-2 text-white mr-4" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Phone</h3>
                        <a 
                          href="tel:+1234567890" 
                          className="text-gray-600 hover:text-primary"
                          aria-label="Call us at (123) 456-7890"
                        >
                          (123) 456-7890
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Monday-Friday, 8am-6pm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary rounded-full p-2 text-white mr-4" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Email</h3>
                        <a 
                          href="mailto:info@builderco.example.com" 
                          className="text-gray-600 hover:text-primary"
                          aria-label="Email us at info@builderco.example.com"
                        >
                          info@builderco.example.com
                        </a>
                        <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary rounded-full p-2 text-white mr-4" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Office Location</h3>
                        <address className="text-gray-600 not-italic">
                          123 Builder Street<br />
                          Construction City, ST 12345
                        </address>
                        <p className="text-sm text-gray-500 mt-1">Open for appointments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section bg-white" aria-label="Office Location Map">
          <div className="container mx-auto">
            <div className="bg-gray-200 h-96 rounded-lg">
              {/* Add your map component here */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map placeholder - Add your preferred map service
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;