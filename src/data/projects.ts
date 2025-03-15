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
    description: 'Complete kitchen redesign with custom cabinetry, quartz countertops, and hardwood flooring. This project transformed an outdated kitchen into a modern cooking and entertaining space with improved functionality and aesthetics.',
    // Comically outdated kitchen with appliances from the 70s
    beforeImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop',
    // Modern kitchen image
    afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Custom Deck Construction',
    category: 'outdoor',
    description: 'Multi-level cedar deck with built-in seating and pergola for optimal outdoor entertaining. This project extended the living space of the home and created a beautiful outdoor area for relaxation and gatherings.',
    // Hilariously overgrown and neglected backyard
    beforeImage: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop',
    // Beautiful deck image
    afterImage: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Master Bathroom Remodel',
    category: 'renovations',
    description: 'Luxury bathroom renovation featuring a walk-in shower, freestanding tub, and heated floors. This project transformed an outdated bathroom into a spa-like retreat with modern fixtures and elegant finishes.',
    // Extremely outdated and grimy bathroom
    beforeImage: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800&h=600&fit=crop',
    // Modern bathroom image
    afterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Custom Home Build',
    category: 'new-construction',
    description: 'New 2,500 sq ft home with open concept design, featuring high-end finishes throughout. This project was built from the ground up, creating a beautiful and functional living space tailored to the client\'s specific needs and preferences.',
    // Comically barren lot with debris
    beforeImage: 'https://images.unsplash.com/photo-1504197832061-98356e3dcdcf?w=800&h=600&fit=crop',
    // Finished home image
    afterImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Built-in Bookcase',
    category: 'carpentry',
    description: 'Floor-to-ceiling custom bookcase with integrated lighting and ladder system. This project maximized storage space while adding a stunning architectural feature to the room.',
    // Hilariously cluttered wall with makeshift shelving
    beforeImage: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&h=600&fit=crop',
    // Built-in bookcase image
    afterImage: 'https://images.unsplash.com/photo-1594125674956-61a9b49c8ecc?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Outdoor Kitchen',
    category: 'outdoor',
    description: 'Complete outdoor kitchen with built-in grill, countertops, and dining area. This project created an ideal space for outdoor cooking and entertaining, extending the home\'s living area into the backyard.',
    // Comically sad grill on a cracked concrete slab
    beforeImage: 'https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?w=800&h=600&fit=crop',
    // Outdoor kitchen image
    afterImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Basement Finishing',
    category: 'renovations',
    description: 'Transformation of unfinished basement into entertainment area with bar and home theater. This project converted unused space into a functional and stylish area for relaxation and entertaining guests.',
    // Creepy, dark unfinished basement
    beforeImage: 'https://images.unsplash.com/photo-1635774855317-edf3ee4463db?w=800&h=600&fit=crop',
    // Finished basement image
    afterImage: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop',
  },
  {
    id: 8,
    title: 'Custom Staircase',
    category: 'carpentry',
    description: 'Handcrafted wood and metal staircase with glass railings, becoming the home\'s focal point. This project combined functionality with artistic design to create a stunning architectural feature.',
    // Dangerously rickety old staircase
    beforeImage: 'https://images.unsplash.com/photo-1555443805-658637491dd4?w=800&h=600&fit=crop',
    // Modern staircase image
    afterImage: 'https://images.unsplash.com/photo-1597218868981-1b68e15f0065?w=800&h=600&fit=crop',
  },
  {
    id: 9,
    title: 'Backyard Pergola',
    category: 'outdoor',
    description: 'Cedar pergola with integrated seating areas and landscaping for a private garden retreat. This project created a beautiful outdoor living space that provides shade and defines the outdoor entertainment area.',
    // Comically desolate backyard with dead plants
    beforeImage: 'https://images.unsplash.com/photo-1571465703918-7d9f4d5cc2ce?w=800&h=600&fit=crop',
    // Pergola image
    afterImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop',
  },
]; 