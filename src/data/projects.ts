// Project categories
export const categories = [
  { value: 'renovations', label: 'Renovations' },
  { value: 'new-construction', label: 'New Construction' },
  { value: 'carpentry', label: 'Carpentry' },
  { value: 'outdoor', label: 'Outdoor' },
];

// Helper function to get category label
export const getCategoryLabel = (categoryValue: string) => {
  const category = categories.find(cat => cat.value === categoryValue);
  return category ? category.label : categoryValue;
};

// Project data with before/after images
export const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    category: 'renovations',
    shortDescription: 'Custom cabinetry, quartz countertops, and modern appliances transform this kitchen.',
    description: 'Complete kitchen redesign with custom cabinetry, quartz countertops, and hardwood flooring. This project transformed an outdated kitchen into a modern cooking and entertaining space with improved functionality and aesthetics.',
    // Comically outdated kitchen with appliances from the 70s
    beforeImage: 'https://images.unsplash.com/photo-1446712146541-843e336d8154?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Modern kitchen image
    afterImage: 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?q=80&w=3478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Custom Deck Construction',
    category: 'outdoor',
    shortDescription: 'Multi-level cedar deck with built-in seating and pergola for outdoor living.',
    description: 'Multi-level cedar deck with built-in seating and pergola for optimal outdoor entertaining. This project extended the living space of the home and created a beautiful outdoor area for relaxation and gatherings.',
    // Hilariously overgrown and neglected backyard
    beforeImage: 'https://images.unsplash.com/photo-1634829036082-a8935ec22a02?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Beautiful deck image
    afterImage: 'https://plus.unsplash.com/premium_photo-1671228941105-3b2bf6918fea?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Master Bathroom Remodel',
    category: 'renovations',
    shortDescription: 'Luxury spa-like retreat with walk-in shower and freestanding tub.',
    description: 'Luxury bathroom renovation featuring a walk-in shower, freestanding tub, and heated floors. This project transformed an outdated bathroom into a spa-like retreat with modern fixtures and elegant finishes.',
    // Extremely outdated and grimy bathroom
    beforeImage: 'https://images.unsplash.com/photo-1542229336-fcba447980f9?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?fit=crop',
    // Modern bathroom image
    afterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Custom Home Build',
    category: 'new-construction',
    description: 'New 2,500 sq ft home with open concept design, featuring high-end finishes throughout. This project was built from the ground up, creating a beautiful and functional living space tailored to the client\'s specific needs and preferences.',
    // Comically barren lot with debris
    beforeImage: 'https://images.unsplash.com/photo-1740344109534-926227ad9e79?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
    // Finished home image
    afterImage: 'https://images.unsplash.com/photo-1565024144485-d0076966fe6d?q=80&w=3228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
  },
  {
    id: 5,
    title: 'Built-in Bookcase',
    category: 'carpentry',
    description: 'Floor-to-ceiling custom bookcase with integrated lighting and ladder system. This project maximized storage space while adding a stunning architectural feature to the room.',
    // Hilariously cluttered wall with makeshift shelving
    beforeImage: 'https://images.unsplash.com/photo-1653585001006-ab496f33f62f?q=80&w=3448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
    // Built-in bookcase image
    afterImage: 'https://images.unsplash.com/photo-1593173945705-d6451ed5909a?q=80&w=3658&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
  },
  {
    id: 6,
    title: 'Outdoor Kitchen',
    category: 'outdoor',
    description: 'Complete outdoor kitchen with built-in grill, countertops, and dining area. This project created an ideal space for outdoor cooking and entertaining, extending the home\'s living area into the backyard.',
    // Comically sad grill on a cracked concrete slab
    beforeImage: 'https://images.unsplash.com/photo-1708601084858-7104d2da256b?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
    // Outdoor kitchen image
    afterImage: 'https://images.unsplash.com/photo-1644232139100-c0320ff0c2fe?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
  },
  {
    id: 7,
    title: 'Basement Finishing',
    category: 'renovations',
    description: 'Transformation of unfinished basement into entertainment area with bar and home theater. This project converted unused space into a functional and stylish area for relaxation and entertaining guests.',
    // Creepy, dark unfinished basement
    beforeImage: 'https://images.unsplash.com/photo-1691920999588-6d9261e15e27?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
    // Finished basement image
    afterImage: 'https://plus.unsplash.com/premium_photo-1673014201826-ebf421d193fc?q=80&w=3562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
  },
  {
    id: 8,
    title: 'Custom Staircase',
    category: 'carpentry',
    description: 'Handcrafted wood and metal staircase with glass railings, becoming the home\'s focal point. This project combined functionality with artistic design to create a stunning architectural feature.',
    // Dangerously rickety old staircase
    beforeImage: 'https://plus.unsplash.com/premium_photo-1661378747584-7f223cc85680?q=80&w=3602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
    // Modern staircase image
    afterImage: 'https://images.unsplash.com/photo-1656733911006-fcad49fa0d52?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
  },
  {
    id: 9,
    title: 'Backyard Pergola',
    category: 'outdoor',
    description: 'Cedar pergola with integrated seating areas and landscaping for a private garden retreat. This project created a beautiful outdoor living space that provides shade and defines the outdoor entertainment area.',
    // Comically desolate backyard with dead plants
    beforeImage: 'https://images.unsplash.com/photo-1597244090309-948ca13d007f?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
    // Pergola image
    afterImage: 'https://images.unsplash.com/photo-1527359443443-84a48aec73d2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop',
  },
]; 