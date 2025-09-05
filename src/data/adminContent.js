// Admin Panel Content Management
// This structure allows for dynamic content management

export const adminContent = {
  // Website texts that can be managed via admin panel
  texts: {
    heroTitle: "DropTechify - Your Digital Growth Partner",
    heroSubtitle1: "From smart web development to intelligent Python automation, DropTechify is your one-stop partner for building future-ready digital solutions that actually work for your business.",
    heroSubtitle2: "At DropTechify, we don't just create websites—we craft digital experiences that drive growth, engage users, and bring your vision to life with clean design and powerful functionality",
    contactButtonText: "Contact",
    exploreServicesText: "Explore Services"
  },

  // Services list for dropdown and services pages
  services: [
    { id: 'website-development', label: 'Website Development', icon: 'Globe' },
    { id: 'wordpress-development', label: 'WordPress Development', icon: 'Code' },
    { id: 'app-development', label: 'App Development', icon: 'Smartphone' },
    { id: 'saas-development', label: 'SaaS Development', icon: 'Palette' },
    { id: 'custom-software', label: 'Custom Software', icon: 'Database' },
    { id: 'python-automation', label: 'Python Automation', icon: 'Cog' },
    { id: 'video-editing', label: 'Video Editing', icon: 'Video' },
    { id: 'seo-services', label: 'SEO Services', icon: 'Zap' }
  ],

  // Footer icons and social links (manageable via admin)
  socialLinks: [
    { id: 'linkedin', url: 'https://linkedin.com/company/droptechify', icon: 'Linkedin', active: true },
    { id: 'github', url: 'https://github.com/droptechify', icon: 'Github', active: true },
    { id: 'twitter', url: '', icon: 'Twitter', active: false },
    { id: 'instagram', url: '', icon: 'Instagram', active: false },
    { id: 'facebook', url: '', icon: 'Facebook', active: false }
  ],

  // Features section content
  features: [
    { icon: 'Target', title: 'Peace of mind' },
    { icon: 'Settings', title: 'Maintenance & support' },
    { icon: 'Clock', title: 'Save time' },
    { icon: 'TrendingUp', title: 'Maximize revenue' }
  ],

  // Contact information
  contact: {
    email: 'droptechify@gmail.com',
    managerEmail: 'managerdroptechify@gmail.com',
    companyPhone: '+92 303 0273718',
    managerPhone: '+92 317 2664119',
    whatsappCompany: '923030273718',
    whatsappManager: '923172664119',
    wechatId: 'wxid_jm4v6epbgzls22',
    address: 'Pakistan',
    businessHours: '24/7 Available'
  },

  // SEO and meta information
  seo: {
    title: "DropTechify - Leading Software Development Company | Web & App Development",
    description: "DropTechify is a leading software development company in Pakistan specializing in website development, WordPress development, mobile app development, video editing, and custom software solutions.",
    keywords: "software development company Pakistan, website development, WordPress development, mobile app development, video editing services, custom software solutions"
  }
};

// Function to update content (for admin panel integration)
export const updateContent = (section, key, value) => {
  if (adminContent[section] && adminContent[section][key] !== undefined) {
    adminContent[section][key] = value;
    return true;
  }
  return false;
};

// Function to get content (for components to use)
export const getContent = (section, key = null) => {
  if (key) {
    return adminContent[section]?.[key] || '';
  }
  return adminContent[section] || {};
};