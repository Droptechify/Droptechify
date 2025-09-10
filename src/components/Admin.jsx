import React, { useState, useEffect } from 'react';
import { Settings, Users, FileText, MessageSquare, BarChart, Plus, Edit, Trash2, Save, Type, Eye, Calendar, DollarSign, TrendingUp } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('connected');


  // Website content state
  const [websiteContent, setWebsiteContent] = useState({
    heroTitle: 'Smart Digital Solutions for Modern Brands',
    heroSubtitle: 'We craft innovative software solutions that drive growth, enhance user experience, and transform businesses in the digital age.',
    aboutTitle: 'About DropTechify',
    aboutDescription: 'We are a leading software development company...',
    contactEmail: 'droptechify@gmail.com',
    contactPhone: '+92 XXX XXXXXXX'
  });

  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: 'https://linkedin.com/company/droptechify'
  });

  const [stats, setStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    totalContacts: 0,
    completedProjects: 0,
    revenue: '$0',
    growth: '0%',
    websiteViews: '0',
    clickRate: '0%',
    conversionRate: '0%'
  });

  const [images, setImages] = useState([
    { id: 1, name: 'SaaS Development', url: '/attached_assets/Developer activity-rafiki_1754317120912.png', category: 'services' },
    { id: 2, name: 'Website Development', url: '/attached_assets/Programmer-cuate_1754317120909.png', category: 'services' },
    { id: 3, name: 'WordPress Development', url: '/attached_assets/Programmer-amico_1754317120910.png', category: 'services' },
    { id: 4, name: 'Video Editing', url: '/attached_assets/Programmer-pana_1754317120910.png', category: 'services' }
  ]);

  const [showImageUpload, setShowImageUpload] = useState(false);
  const [newImage, setNewImage] = useState({
    name: '',
    category: 'services',
    file: null
  });

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <BarChart size={20} /> },
    { id: 'content', name: 'Website Content', icon: <Type size={20} /> },
    { id: 'social', name: 'Social Media', icon: <Users size={20} /> },
    { id: 'images', name: 'Image Gallery', icon: <Eye size={20} /> },
    { id: 'projects', name: 'Projects', icon: <FileText size={20} /> },
    { id: 'case-studies', name: 'Case Studies', icon: <Eye size={20} /> },
    { id: 'contacts', name: 'Contacts', icon: <MessageSquare size={20} /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={20} /> }
  ];

  // Load data from Firebase
  useEffect(() => {
    loadProjects();
    loadContacts();
    loadWebsiteContent();
    loadSocialLinks();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectsData = [];
      querySnapshot.forEach((doc) => {
        projectsData.push({ id: doc.id, ...doc.data() });
      });
      setProjects(projectsData);
      updateStats(projectsData, contacts);
    } catch (error) {
      console.error('Error loading projects:', error);
      // Show user-friendly error message
      alert('Failed to load projects. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadContacts = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const contactsData = [];
      querySnapshot.forEach((doc) => {
        contactsData.push({ id: doc.id, ...doc.data() });
      });
      setContacts(contactsData);
      updateStats(projects, contactsData);
    } catch (error) {
      console.error('Error loading contacts:', error);
      // Show user-friendly error message
      alert('Failed to load contacts. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadWebsiteContent = async () => {
    try {
      const docRef = doc(db, 'websiteContent', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setWebsiteContent(docSnap.data());
      }
    } catch (error) {
      console.error('Error loading website content:', error);
      alert('Failed to load website content. Please check your connection and try again.');
    }
  };

  const loadSocialLinks = async () => {
    try {
      const docRef = doc(db, 'socialLinks', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSocialLinks(docSnap.data());
      }
    } catch (error) {
      console.error('Error loading social links:', error);
      alert('Failed to load social links. Please check your connection and try again.');
    }
  };

  const saveSocialLinks = async () => {
    try {
      setLoading(true);
      await setDoc(doc(db, 'socialLinks', 'main'), socialLinks);
      alert('Social media links updated successfully!');
    } catch (error) {
      console.error('Error saving social links:', error);
      alert('Error saving social links. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const saveWebsiteContent = async () => {
    try {
      setLoading(true);
      await setDoc(doc(db, 'websiteContent', 'main'), websiteContent);
      setEditMode(false);
      alert('Website content updated successfully!');
    } catch (error) {
      console.error('Error saving website content:', error);
      alert('Error saving content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const updateStats = (projectsData, contactsData) => {
    // Calculate real revenue from completed projects
    const totalRevenue = projectsData
      .filter(p => p.status === 'Completed' && p.amount)
      .reduce((sum, project) => sum + (parseFloat(project.amount) || 0), 0);

    // Calculate growth based on recent vs older projects
    const recentProjects = projectsData.filter(p => {
      const projectDate = new Date(p.createdAt || Date.now());
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      return projectDate > oneMonthAgo;
    });

    const growthRate = projectsData.length > 0 ? 
      Math.round((recentProjects.length / projectsData.length) * 100) : 0;

    setStats({
      totalProjects: projectsData.length,
      activeProjects: projectsData.filter(p => p.status === 'In Progress').length,
      totalContacts: contactsData.length,
      completedProjects: projectsData.filter(p => p.status === 'Completed').length,
      revenue: totalRevenue > 0 ? `$${totalRevenue.toLocaleString()}` : '$0',
      growth: growthRate > 0 ? `+${growthRate}%` : '0%',
      websiteViews: '0', // This will be updated when analytics are implemented
      clickRate: '0%', // This will be updated when analytics are implemented
      conversionRate: contactsData.length > 0 && projectsData.length > 0 ? 
        `${Math.round((projectsData.length / contactsData.length) * 100)}%` : '0%'
    });
  };

  const deleteProject = async (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteDoc(doc(db, 'projects', id));
        loadProjects();
      } catch (error) {
        console.error('Error deleting project:', error);
        alert('Failed to delete project. Please check your connection and try again.');
      }
    }
  };

  const deleteContact = async (id) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      try {
        await deleteDoc(doc(db, 'contacts', id));
        loadContacts();
      } catch (error) {
        console.error('Error deleting contact:', error);
        alert('Failed to delete contact. Please check your connection and try again.');
      }
    }
  };

  const handleImageUpload = async () => {
    if (!newImage.file || !newImage.name) {
      alert('Please provide both a name and select a file');
      return;
    }

    try {
      setLoading(true);

      // For demo purposes, create a URL for the uploaded file
      // In production, you'd upload to a service like Firebase Storage
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImageData = {
          id: Date.now(),
          name: newImage.name,
          url: e.target.result,
          category: newImage.category
        };

        setImages([...images, newImageData]);
        setNewImage({ name: '', category: 'services', file: null });
        setShowImageUpload(false);
        alert('Image uploaded successfully!');
      };
      reader.readAsDataURL(newImage.file);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = (id) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setImages(images.filter(img => img.id !== id));
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm font-medium">Total Projects</h3>
              <p className="text-3xl font-bold text-gray-900">{stats.totalProjects}</p>
              <p className="text-blue-500 text-sm">Active: {stats.activeProjects}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <FileText className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-200 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm font-medium">Completed Projects</h3>
              <p className="text-3xl font-bold text-gray-900">{stats.completedProjects}</p>
              <p className="text-green-500 text-sm">Success Rate: 100%</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <TrendingUp className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm font-medium">Contact Inquiries</h3>
              <p className="text-3xl font-bold text-gray-900">{stats.totalContacts}</p>
              <p className="text-purple-500 text-sm">This month</p>
            </div>
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
              <MessageSquare className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-200 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm font-medium">Revenue</h3>
              <p className="text-3xl font-bold text-gray-900">{stats.revenue}</p>
              <p className="text-yellow-600 text-sm">Growth: {stats.growth}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <DollarSign className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-200 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm font-medium">Website Views</h3>
              <p className="text-3xl font-bold text-gray-900">{stats.websiteViews}</p>
              <p className="text-indigo-500 text-sm">Click Rate: {stats.clickRate}</p>
            </div>
            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
              <Eye className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-600 text-sm font-medium">Conversion Rate</h3>
              <p className="text-3xl font-bold text-gray-900">{stats.conversionRate}</p>
              <p className="text-pink-500 text-sm">This month</p>
            </div>
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
              <TrendingUp className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">Recent Projects</h3>
          <div className="space-y-3">
            {projects.slice(0, 5).map((project, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">{project.title}</p>
                  <p className="text-sm text-gray-600">Client: {project.client}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">Recent Contacts</h3>
          <div className="space-y-3">
            {contacts.slice(0, 5).map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">{contact.name}</p>
                  <p className="text-sm text-gray-600">{contact.email}</p>
                </div>
                <p className="text-xs text-gray-500">{contact.service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContentManagement = () => (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Website Content Management</h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button
              onClick={() => setEditMode(!editMode)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all"
            >
              <Edit size={20} />
              {editMode ? 'Cancel Edit' : 'Edit Content'}
            </button>
            {editMode && (
              <button
                onClick={saveWebsiteContent}
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all"
              >
                <Save size={20} />
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            )}
          </div>
        </div>

      <div className="grid gap-6">
        {/* Hero Section Content */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold mb-4">Hero Section</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>
              {editMode ? (
                <textarea
                  value={websiteContent.heroTitle}
                  onChange={(e) => setWebsiteContent({...websiteContent, heroTitle: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                  rows="2"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.heroTitle}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Subtitle</label>
              {editMode ? (
                <textarea
                  value={websiteContent.heroSubtitle}
                  onChange={(e) => setWebsiteContent({...websiteContent, heroSubtitle: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                  rows="3"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.heroSubtitle}</p>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Email</label>
              {editMode ? (
                <input
                  type="email"
                  value={websiteContent.contactEmail || 'droptechify@gmail.com'}
                  onChange={(e) => setWebsiteContent({...websiteContent, contactEmail: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.contactEmail || 'droptechify@gmail.com'}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Phone</label>
              {editMode ? (
                <input
                  type="tel"
                  value={websiteContent.contactPhone || '+92 303 0273718'}
                  onChange={(e) => setWebsiteContent({...websiteContent, contactPhone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.contactPhone || '+92 303 0273718'}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Manager Email</label>
              {editMode ? (
                <input
                  type="email"
                  value={websiteContent.managerEmail || 'manager@droptechify.com'}
                  onChange={(e) => setWebsiteContent({...websiteContent, managerEmail: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.managerEmail || 'manager@droptechify.com'}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Manager Phone</label>
              {editMode ? (
                <input
                  type="tel"
                  value={websiteContent.managerPhone || '+92 317 2664119'}
                  onChange={(e) => setWebsiteContent({...websiteContent, managerPhone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.managerPhone || '+92 317 2664119'}</p>
              )}
            </div>
          </div>
        </div>

        {/* Image Management */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold mb-4">Image Management</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/attached_assets/Developer activity-rafiki_1754317120912.png',
              '/attached_assets/Programmer-cuate_1754317120909.png',
              '/attached_assets/Programmer-amico_1754317120910.png',
              '/attached_assets/Programmer-bro_1754317120912.png'
            ].map((image, index) => (
              <div key={index} className="relative group">
                <img 
                  src={image} 
                  alt={`Service ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg border border-gray-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-3 py-1 rounded text-sm">
                    Replace
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Project Management</h3>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2">
          <Plus size={20} /> Add Project
        </button>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                <p className="text-gray-600 mt-1">Client: {project.client}</p>
                <p className="text-gray-500 text-sm mt-2">{project.description || 'No description provided'}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-3 ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <button className="text-blue-500 hover:text-blue-700 p-2 hover:bg-blue-50 rounded">
                  <Edit size={20} />
                </button>
                <button 
                  onClick={() => deleteProject(project.id)} 
                  className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="bg-white p-12 rounded-lg shadow border text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 mb-2">No Projects Yet</h3>
            <p className="text-gray-400">Add your first project to get started</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Contact Submissions</h3>

      <div className="grid gap-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <h4 className="font-semibold text-gray-900 text-lg">{contact.name}</h4>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {contact.service}
                  </span>
                </div>
                <p className="text-gray-600">{contact.email}</p>
                {contact.phone && <p className="text-gray-600">{contact.phone}</p>}
                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">{contact.message}</p>
                </div>
                <p className="text-xs text-gray-400 mt-3">Received: {contact.date}</p>
              </div>
              <button 
                onClick={() => deleteContact(contact.id)} 
                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}

        {contacts.length === 0 && (
          <div className="bg-white p-12 rounded-lg shadow border text-center">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 mb-2">No Contact Submissions</h3>
            <p className="text-gray-400">Contact submissions will appear here</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setActiveTab(activeTab)} 
          className="bg-blue-600 text-white p-2 sm:p-3 rounded-lg shadow-lg"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-56 sm:w-64 bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-2xl z-40 transform lg:translate-x-0 -translate-x-full transition-transform lg:block">
        <div className="p-6 border-b border-blue-500">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-600 font-bold text-lg">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">DropTechify</h1>
              <p className="text-blue-200 text-sm">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="mt-8">
          <div className="px-4 mb-4">
            <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">MENU</p>
          </div>

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white font-medium border-r-4 border-white'
                  : 'text-blue-100 hover:bg-blue-500 hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-blue-800 rounded-lg p-4 text-center">
            <p className="text-blue-200 text-sm mb-2">Quick Access</p>
            <button 
              onClick={() => window.open('/?admin=true', '_blank')}
              className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              View Website
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 p-4 lg:p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your website content, projects, and contacts from here.</p>
            </div>
            <div className="flex items-center gap-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'content' && renderContentManagement()}
          {activeTab === 'projects' && renderProjects()}
          {activeTab === 'case-studies' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Case Studies Management</h2>
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-500 mb-2">Case Studies Management</h3>
                <p className="text-gray-400">Add, edit, and manage your project case studies</p>
                <button className="mt-4 bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold">
                  Add Case Study
                </button>
              </div>
            </div>
          )}
          {activeTab === 'contacts' && renderContacts()}

          {activeTab === 'images' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-900">Image Gallery Management</h2>
                <button 
                  onClick={() => setShowImageUpload(!showImageUpload)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2"
                >
                  <Plus size={20} />
                  Upload New Image
                </button>
              </div>

              {showImageUpload && (
                <div className="bg-white p-6 rounded-lg shadow border">
                  <h3 className="text-xl font-semibold mb-4">Upload New Image</h3>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Image Name</label>
                      <input
                        type="text"
                        value={newImage.name}
                        onChange={(e) => setNewImage({...newImage, name: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        placeholder="Enter image name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        value={newImage.category}
                        onChange={(e) => setNewImage({...newImage, category: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      >
                        <option value="services">Services</option>
                        <option value="portfolio">Portfolio</option>
                        <option value="team">Team</option>
                        <option value="general">General</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setNewImage({...newImage, file: e.target.files[0]})}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={handleImageUpload}
                        disabled={loading}
                        className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold"
                      >
                        {loading ? 'Uploading...' : 'Upload Image'}
                      </button>
                      <button
                        onClick={() => setShowImageUpload(false)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image) => (
                  <div key={image.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img 
                      src={image.url} 
                      alt={image.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 text-sm">{image.name}</h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{image.category}</span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button className="bg-white text-gray-900 px-3 py-1 rounded text-sm hover:bg-gray-100">
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteImage(image.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Analytics</h2>

              {/* Analytics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Page Views</h3>
                  <p className="text-3xl font-bold text-blue-600">{stats.websiteViews}</p>
                  <p className="text-sm text-gray-500">This month</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Click Through Rate</h3>
                  <p className="text-3xl font-bold text-green-600">{stats.clickRate}</p>
                  <p className="text-sm text-gray-500">Average CTR</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversion Rate</h3>
                  <p className="text-3xl font-bold text-purple-600">{stats.conversionRate}</p>
                  <p className="text-sm text-gray-500">Contacts to clients</p>
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Traffic Sources</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Direct Traffic</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">45%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Search Engines</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">35%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Social Media</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">20%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-900">Social Media Management</h2>
                <button
                  onClick={saveSocialLinks}
                  disabled={loading}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2 transition-all"
                >
                  <Save size={20} />
                  {loading ? 'Saving...' : 'Save Social Links'}
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border">
                <h3 className="text-xl font-semibold mb-4">Social Media Links</h3>
                <p className="text-gray-600 mb-6">Manage your social media links that appear in the footer</p>

                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
                    <input
                      type="url"
                      value={socialLinks.facebook || ''}
                      onChange={(e) => setSocialLinks({...socialLinks, facebook: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="https://facebook.com/droptechify"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Twitter URL</label>
                    <input
                      type="url"
                      value={socialLinks.twitter || ''}
                      onChange={(e) => setSocialLinks({...socialLinks, twitter: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="https://twitter.com/droptechify"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
                    <input
                      type="url"
                      value={socialLinks.instagram || ''}
                      onChange={(e) => setSocialLinks({...socialLinks, instagram: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="https://instagram.com/droptechify"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                    <input
                      type="url"
                      value={socialLinks.linkedin || 'https://linkedin.com/company/droptechify'}
                      onChange={(e) => setSocialLinks({...socialLinks, linkedin: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="https://linkedin.com/company/droptechify"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Clutch URL</label>
                    <input
                      type="url"
                      value={socialLinks.clutch || ''}
                      onChange={(e) => setSocialLinks({...socialLinks, clutch: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="https://clutch.co/profile/droptechify"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upwork URL</label>
                    <input
                      type="url"
                      value={socialLinks.upwork || ''}
                      onChange={(e) => setSocialLinks({...socialLinks, upwork: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="https://upwork.com/agencies/droptechify"
                    />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> Leave any field empty to hide that social media icon from the footer.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
              <div className="space-y-6">
                {/* Admin Credentials */}
                <div className="bg-white p-8 rounded-lg shadow">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Admin Credentials</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Admin Username/Email</label>
                          <input 
                            type="text" 
                            id="admin-username"
                            className="w-full p-3 border border-gray-300 rounded-lg" 
                            defaultValue={JSON.parse(localStorage.getItem('admin_credentials') || '{"username":"admin@droptechify.com"}').username}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Admin Password</label>
                          <input 
                            type="password" 
                            id="admin-password"
                            className="w-full p-3 border border-gray-300 rounded-lg" 
                            defaultValue={JSON.parse(localStorage.getItem('admin_credentials') || '{"password":"DropTech2024@Secure!"}').password}
                          />
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          const username = document.getElementById('admin-username').value;
                          const password = document.getElementById('admin-password').value;
                          localStorage.setItem('admin_credentials', JSON.stringify({username, password}));
                          alert('Admin credentials updated successfully!');
                        }}
                        className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
                      >
                        Update Admin Credentials
                      </button>
                    </div>
                  </div>
                </div>

                {/* Website Settings */}
                <div className="bg-white p-8 rounded-lg shadow">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Website Settings</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" defaultValue="DropTechify" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" defaultValue="Software Development Company" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                        Save Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
