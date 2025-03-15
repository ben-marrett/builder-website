import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { aboutStoryImage, teamMemberImages, testimonialImages } from '../data/images';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">About Our Company</h1>
          <p className="mt-4 max-w-2xl mx-auto">
            A team of skilled craftsmen dedicated to quality workmanship and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="flex flex-col lg:flex-row gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2">
              <div 
                className="h-64 lg:h-full bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url('${aboutStoryImage}')` }}
              ></div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, our company began with a simple mission: to provide exceptional craftsmanship and honest service to homeowners in our community. What started as a small operation has grown into a trusted name in construction and carpentry.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, James Miller, began his career as an apprentice carpenter and spent years mastering his craft before establishing our company. His dedication to quality and attention to detail remain at the core of our business philosophy today.
              </p>
              <p className="text-gray-600">
                Over the years, we've assembled a team of skilled professionals who share our passion for quality workmanship and customer satisfaction. Together, we've completed hundreds of projects, from small custom carpentry works to full-scale home constructions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-accent bg-opacity-20">
        <div className="container mx-auto">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  className="w-32 h-32 rounded-full mx-auto mb-4 bg-cover bg-center"
                  style={{ backgroundImage: `url('${teamMemberImages[index % teamMemberImages.length]}')` }}
                ></div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section bg-background">
        <div className="container mx-auto">
          <h2 className="section-title">Our Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Licenses & Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Professional Memberships</h3>
              <ul className="space-y-3">
                {memberships.map((membership, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{membership}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div 
                    className="w-10 h-10 rounded-full mr-3 bg-cover bg-center"
                    style={{ backgroundImage: `url('${testimonialImages[index % testimonialImages.length]}')` }}
                  ></div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.project}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can bring your vision to life with our craftsmanship and expertise.
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
const values = [
  {
    title: 'Quality Craftsmanship',
    description: 'We take pride in our work and are committed to delivering the highest quality construction and carpentry for every project, no matter the size.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: 'Integrity & Transparency',
    description: 'We believe in honest communication, fair pricing, and delivering on our promises. We keep you informed throughout your project.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our top priority. We work closely with you to ensure your vision becomes reality and exceed your expectations.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
];

const teamMembers = [
  {
    name: 'James Miller',
    position: 'Founder & Master Carpenter',
    bio: 'With over 25 years of experience, James leads our team with expertise in all aspects of construction and fine carpentry.',
  },
  {
    name: 'Sarah Johnson',
    position: 'Project Manager',
    bio: 'Sarah ensures your project runs smoothly from start to finish, with meticulous attention to timelines and budgets.',
  },
  {
    name: 'Michael Chen',
    position: 'Lead Carpenter',
    bio: 'Michael specializes in custom woodworking and cabinetry, bringing precision and artistry to every piece he creates.',
  },
  {
    name: 'David Rodriguez',
    position: 'Construction Foreman',
    bio: 'David oversees our construction crews, bringing 15 years of experience in residential and commercial building.',
  },
];

const certifications = [
  'Licensed Building Practitioner (LBP# 12345)',
  'Certified Master Builder',
  'SiteSafe Construction Health and Safety Certified',
  'Licensed Electrical Worker (LEW# 98765)',
  'Energy Efficiency and Conservation Authority (EECA) Certified',
  'Building Compliance Certified'
];

const memberships = [
  'New Zealand Certified Builders (NZCB)',
  'Master Builders New Zealand',
  'Building and Construction Industry Training Organisation (BCITO)',
  'New Zealand Green Building Council (NZGBC)',
  'Concrete NZ',
  'Plumbing, Gasfitting and Drainlaying New Zealand (PGDB)',
  'SiteSafe New Zealand'
];

const testimonials = [
  {
    name: 'Jennifer L.',
    quote: 'We couldn\'t be happier with our kitchen renovation. The craftsmanship is exceptional, and the team was professional from start to finish.',
    project: 'Kitchen Remodel',
  },
  {
    name: 'Mark T.',
    quote: 'Their attention to detail on our custom built-ins was impressive. They transformed our living room exactly as we had envisioned.',
    project: 'Custom Built-ins',
  },
  {
    name: 'Amanda & John S.',
    quote: 'Building our custom home was a dream come true, and this team made the process smooth and stress-free. We highly recommend them!',
    project: 'Custom Home Build',
  },
];

export default AboutPage;