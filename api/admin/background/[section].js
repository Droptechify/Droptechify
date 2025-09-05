// Background image API for admin panel management
export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { section } = req.query;

  // Default background images for different sections
  const defaultBackgrounds = {
    hero: '/background.mp4',
    about: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    services: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80',
    contact: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80'
  };

  if (req.method === 'GET') {
    // Return background image for the requested section
    const backgroundUrl = defaultBackgrounds[section] || defaultBackgrounds.hero;
    
    // For now, redirect to the default background
    // In a real application, you would fetch from database
    return res.redirect(302, backgroundUrl);
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    // Handle background image upload/update
    // In a real application, you would save to cloud storage and database
    try {
      const { imageUrl } = req.body;
      
      if (!imageUrl) {
        return res.status(400).json({ error: 'Image URL is required' });
      }

      // Simulate saving to database
      console.log(`Updating background for ${section}:`, imageUrl);

      return res.status(200).json({ 
        success: true, 
        message: `Background for ${section} updated successfully`,
        imageUrl 
      });

    } catch (error) {
      console.error('Background update error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}