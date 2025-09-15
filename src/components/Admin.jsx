
import React, { useState, useEffect } from 'react';
import { Settings, Users, FileText, MessageSquare, BarChart, Plus, Edit, Trash2, Save, Type, Eye, Calendar, DollarSign, TrendingUp, Lock, User } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Website content state
  const [websiteContent, setWebsiteContent] = useState({
    heroTitle: 'Smart Digital Solutions for Modern Brands',
    heroSubtitle: 'We craft innovative software solutions that drive growth, enhance user experience, and transform businesses in the digital age.',
    aboutTitle: 'About DropTechify',
    aboutDescription: 'We are a passionate team of developers and designers committed to transforming your digital vision into reality through innovative software solutions.',
    aboutStory: 'Founded with a vision to democratize technology, DropTechify started as a small team of passionate developers who believed that every business deserves access to high-quality software solutions.',
    aboutMission: 'Today, we have grown into a full-service software development company, but our core values remain the same: deliver exceptional results, maintain transparent communication, and build long-lasting partnerships with our clients.',
    servicesMainTitle: 'Our Services',
    servicesMainSubtitle: 'Comprehensive digital solutions to accelerate your business growth',
    contactEmail: 'droptechify@gmail.com',
    contactPhone: '+92 303 0273718',
    managerEmail: 'managerdroptechify@gmail.com',
    managerPhone: '+92 317 2664119'
  });

  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: 'https://linkedin.com/company/droptechify',
    clutch: '',
    upwork: ''
  });

  const [contactInfo, setContactInfo] = useState({
    companyEmail: 'droptechify@gmail.com',
    managerEmail: 'manager@droptechify.com',
    companyPhone: '+92 303 0273718',
    managerPhone: '+92 317 2664119',
    whatsappCompany: '923030273718',
    whatsappManager: '923172664119'
  });

  const [stats, setStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    totalContacts: 0,
    completedProjects: 0,
    revenue: '$5,000',
    growth: '0%',
    websiteViews: '0',
    clickRate: '0%',
    conversionRate: '0%'
  });

  const [adminSettings, setAdminSettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    adminEmail: 'admin@droptechify.com',
    adminName: 'DropTechify Admin',
    twoFactorEnabled: false,
    emailNotifications: true,
    systemNotifications: true
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

  const [caseStudies, setCaseStudies] = useState([]);
  const [showCaseStudyForm, setShowCaseStudyForm] = useState(false);
  const [newCaseStudy, setNewCaseStudy] = useState({
    title: '',
    category: '',
    client: '',
    description: '',
    date: '',
    link: '',
    imageFile: null
  });

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <BarChart size={20} /> },
    { id: 'content', name: 'Website Content', icon: <Type size={20} /> },
    { id: 'social', name: 'Social Media', icon: <Users size={20} /> },
    { id: 'images', name: 'Image Gallery', icon: <Eye size={20} /> },
    { id: 'about', name: 'About Page', icon: <FileText size={20} /> },
    { id: 'case-studies', name: 'Case Studies', icon: <Eye size={20} /> },
    { id: 'contacts', name: 'Contacts', icon: <MessageSquare size={20} /> },
    { id: 'services', name: 'Services Content', icon: <Settings size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={20} /> }
  ];

  // Load data from Firebase
  useEffect(() => {
    loadContacts();
    loadWebsiteContent();
    loadSocialLinks();
    loadContactInfo();
    loadCaseStudies();
  }, []);

  const loadContacts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const contactsData = [];
      querySnapshot.forEach((doc) => {
        contactsData.push({ id: doc.id, ...doc.data() });
      });
      setContacts(contactsData);
      updateStats(contactsData);
    } catch (error) {
      console.error('Error loading contacts:', error);
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
    }
  };

  const loadContactInfo = async () => {
    try {
      const docRef = doc(db, 'contactInfo', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContactInfo(docSnap.data());
      }
    } catch (error) {
      console.error('Error loading contact info:', error);
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

  const saveContactInfo = async () => {
    try {
      setLoading(true);
      await setDoc(doc(db, 'contactInfo', 'main'), contactInfo);
      alert('Contact information updated successfully!');
    } catch (error) {
      console.error('Error saving contact info:', error);
      alert('Error saving contact info. Please try again.');
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

  const updateStats = (contactsData) => {
    // Static project data with fixed revenue
    const staticProjectCount = 15; 
    const staticCompletedCount = 12;
    const staticActiveCount = 3;

    setStats({
      totalProjects: staticProjectCount,
      activeProjects: staticActiveCount,
      totalContacts: contactsData.length,
      completedProjects: staticCompletedCount,
      revenue: '$5,000',
      growth: '+25%',
      websiteViews: contactsData.length > 0 ? (contactsData.length * 50).toString() : '150',
      clickRate: '3.2%',
      conversionRate: contactsData.length > 0 ? 
        `${Math.round((staticProjectCount / Math.max(contactsData.length, 1)) * 100)}%` : '8%'
    });
  };

  const deleteContact = async (id) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      try {
        await deleteDoc(doc(db, 'contacts', id));
        loadContacts();
      } catch (error) {
        console.error('Error deleting contact:', error);
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

  const loadCaseStudies = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'caseStudies'));
      const studiesData = [];
      querySnapshot.forEach((doc) => {
        studiesData.push({ id: doc.id, ...doc.data() });
      });
      setCaseStudies(studiesData);
    } catch (error) {
      console.error('Error loading case studies:', error);
    }
  };

  const handleAddCaseStudy = async () => {
    if (!newCaseStudy.title || !newCaseStudy.category || !newCaseStudy.client) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);

      let imageUrl = '';
      if (newCaseStudy.imageFile) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          imageUrl = e.target.result;

          await addDoc(collection(db, 'caseStudies'), {
            ...newCaseStudy,
            image: imageUrl,
            createdAt: new Date(),
            timestamp: new Date()
          });

          setNewCaseStudy({
            title: '',
            category: '',
            client: '',
            description: '',
            date: '',
            link: '',
            imageFile: null
          });
          setShowCaseStudyForm(false);
          loadCaseStudies();
          alert('Case study added successfully!');
        };
        reader.readAsDataURL(newCaseStudy.imageFile);
      } else {
        await addDoc(collection(db, 'caseStudies'), {
          ...newCaseStudy,
          createdAt: new Date(),
          timestamp: new Date()
        });

        setNewCaseStudy({
          title: '',
          category: '',
          client: '',
          description: '',
          date: '',
          link: '',
          imageFile: null
        });
        setShowCaseStudyForm(false);
        loadCaseStudies();
        alert('Case study added successfully!');
      }
    } catch (error) {
      console.error('Error adding case study:', error);
      alert('Error adding case study. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const deleteCaseStudy = async (id) => {
    if (confirm('Are you sure you want to delete this case study?')) {
      try {
        await deleteDoc(doc(db, 'caseStudies', id));
        loadCaseStudies();
      } catch (error) {
        console.error('Error deleting case study:', error);
      }
    }
  };

  const handlePasswordChange = async () => {
    if (!adminSettings.currentPassword || !adminSettings.newPassword || !adminSettings.confirmPassword) {
      alert('Please fill in all password fields');
      return;
    }

    if (adminSettings.newPassword !== adminSettings.confirmPassword) {
      alert('New password and confirm password do not match');
      return;
    }

    if (adminSettings.newPassword.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    try {
      setLoading(true);
      // In a real app, you would verify current password and update it
      const currentCredentials = JSON.parse(localStorage.getItem('admin_credentials') || '{}');
      
      if (adminSettings.currentPassword !== currentCredentials.password) {
        alert('Current password is incorrect');
        return;
      }

      const newCredentials = {
        username: currentCredentials.username,
        password: adminSettings.newPassword
      };

      localStorage.setItem('admin_credentials', JSON.stringify(newCredentials));
      
      setAdminSettings({
        ...adminSettings,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      
      alert('Password changed successfully!');
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Error changing password. Please try again.');
    } finally {
      setLoading(false);
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
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">E-commerce Platform</p>
                <p className="text-sm text-gray-600">Client: TechCorp</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Completed
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">Mobile App Development</p>
                <p className="text-sm text-gray-600">Client: StartupXYZ</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                In Progress
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">SaaS Dashboard</p>
                <p className="text-sm text-gray-600">Client: DataFlow Inc</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Completed
              </span>
            </div>
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
        <h2 className="text-3xl font-bold text-gray-900">Website Content Management</h2>
        <div className="flex flex-col sm:flex-row gap-2">
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
        {/* Hero Section */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold mb-4">Hero Section</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>
              {editMode ? (
                <input
                  type="text"
                  value={websiteContent.heroTitle}
                  onChange={(e) => setWebsiteContent({...websiteContent, heroTitle: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Main headline"
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
                  placeholder="Supporting text"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.heroSubtitle}</p>
              )}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold mb-4">Services Section</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Services Title</label>
              {editMode ? (
                <input
                  type="text"
                  value={websiteContent.servicesMainTitle}
                  onChange={(e) => setWebsiteContent({...websiteContent, servicesMainTitle: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Services section title"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.servicesMainTitle}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Services Subtitle</label>
              {editMode ? (
                <textarea
                  value={websiteContent.servicesMainSubtitle}
                  onChange={(e) => setWebsiteContent({...websiteContent, servicesMainSubtitle: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                  rows="2"
                  placeholder="Services section subtitle"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.servicesMainSubtitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAboutPage = () => (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">About Page Content Management</h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <button
            onClick={() => setEditMode(!editMode)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all"
          >
            <Edit size={20} />
            {editMode ? 'Cancel Edit' : 'Edit About Content'}
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
        {/* About Title */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold mb-4">About Page Title</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Main Title</label>
            {editMode ? (
              <input
                type="text"
                value={websiteContent.aboutTitle}
                onChange={(e) => setWebsiteContent({...websiteContent, aboutTitle: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="About DropTechify"
              />
            ) : (
              <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.aboutTitle}</p>
            )}
          </div>
        </div>

        {/* About Description */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold mb-4">About Description</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Main Description</label>
            {editMode ? (
              <textarea
                value={websiteContent.aboutDescription}
                onChange={(e) => setWebsiteContent({...websiteContent, aboutDescription: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                rows="4"
                placeholder="Company description..."
              />
            ) : (
              <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.aboutDescription}</p>
            )}
          </div>
        </div>

        {/* About Story */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold mb-4">Our Story Section</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Story Content</label>
            {editMode ? (
              <textarea
                value={websiteContent.aboutStory}
                onChange={(e) => setWebsiteContent({...websiteContent, aboutStory: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                rows="4"
                placeholder="Company story..."
              />
            ) : (
              <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.aboutStory}</p>
            )}
          </div>
        </div>

        {/* About Mission */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold mb-4">Mission Statement</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mission Content</label>
            {editMode ? (
              <textarea
                value={websiteContent.aboutMission}
                onChange={(e) => setWebsiteContent({...websiteContent, aboutMission: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                rows="4"
                placeholder="Company mission..."
              />
            ) : (
              <p className="p-3 bg-gray-50 rounded-lg">{websiteContent.aboutMission}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderServicesPage = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Services Management</h2>
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold mb-4">Services Page Content</h3>
        <p className="text-gray-600">Services management features will be added here.</p>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Contact Inquiries</h2>
        <div className="text-sm text-gray-500">
          Total: {contacts.length} contacts
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{contact.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{contact.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{contact.phone || 'N/A'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {contact.service}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-600 max-w-xs truncate">{contact.message}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {contact.date ? new Date(contact.date).toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => deleteContact(contact.id)} 
                      className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {contacts.length === 0 && (
          <div className="p-12 text-center">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 mb-2">No Contact Inquiries</h3>
            <p className="text-gray-400">Contact submissions will appear here</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Admin Settings</h2>
      
      {/* Password Change */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold mb-4">Change Password</h3>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <input
              type="password"
              value={adminSettings.currentPassword}
              onChange={(e) => setAdminSettings({...adminSettings, currentPassword: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter current password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <input
              type="password"
              value={adminSettings.newPassword}
              onChange={(e) => setAdminSettings({...adminSettings, newPassword: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <input
              type="password"
              value={adminSettings.confirmPassword}
              onChange={(e) => setAdminSettings({...adminSettings, confirmPassword: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Confirm new password"
            />
          </div>
          <button
            onClick={handlePasswordChange}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold"
          >
            {loading ? 'Changing...' : 'Change Password'}
          </button>
        </div>
      </div>

      {/* Admin Profile */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold mb-4">Admin Profile</h3>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Admin Name</label>
            <input
              type="text"
              value={adminSettings.adminName}
              onChange={(e) => setAdminSettings({...adminSettings, adminName: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Admin Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
            <input
              type="email"
              value={adminSettings.adminEmail}
              onChange={(e) => setAdminSettings({...adminSettings, adminEmail: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="admin@droptechify.com"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Email Notifications</h4>
              <p className="text-sm text-gray-500">Receive email alerts for new contacts</p>
            </div>
            <button
              onClick={() => setAdminSettings({...adminSettings, emailNotifications: !adminSettings.emailNotifications})}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                adminSettings.emailNotifications ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  adminSettings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">System Notifications</h4>
              <p className="text-sm text-gray-500">Receive system alerts and updates</p>
            </div>
            <button
              onClick={() => setAdminSettings({...adminSettings, systemNotifications: !adminSettings.systemNotifications})}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                adminSettings.systemNotifications ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  adminSettings.systemNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-600 to-blue-800 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-blue-700">
          <h1 className="text-white text-xl font-bold">Admin Panel</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden absolute right-4 text-white hover:bg-blue-600 p-1 rounded"
          >
            ×
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4 space-y-2 overflow-y-auto h-full pb-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-200 rounded-lg ${
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
              onClick={() => window.open('/', '_blank')}
              className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              View Website
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-0 p-4 lg:p-8">
        {/* Mobile header */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-blue-600 text-white p-2 rounded-lg"
          >
            ☰
          </button>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your website content and contacts from here.</p>
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
          {activeTab === 'about' && renderAboutPage()}
          {activeTab === 'services' && renderServicesPage()}
          {activeTab === 'case-studies' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-900">Case Studies Management</h2>
                <button 
                  onClick={() => setShowCaseStudyForm(!showCaseStudyForm)}
                  className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2"
                >
                  <Plus size={20} />
                  Add Case Study
                </button>
              </div>

              {showCaseStudyForm && (
                <div className="bg-white p-6 rounded-lg shadow border">
                  <h3 className="text-xl font-semibold mb-4">Add New Case Study</h3>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
                      <input
                        type="text"
                        value={newCaseStudy.title}
                        onChange={(e) => setNewCaseStudy({...newCaseStudy, title: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        placeholder="Enter project title"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select
                          value={newCaseStudy.category}
                          onChange={(e) => setNewCaseStudy({...newCaseStudy, category: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg"
                        >
                          <option value="">Select Category</option>
                          <option value="Web">Website Development</option>
                          <option value="App">Mobile App</option>
                          <option value="SaaS">SaaS Platform</option>
                          <option value="Custom">Custom Software</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                        <input
                          type="text"
                          value={newCaseStudy.client}
                          onChange={(e) => setNewCaseStudy({...newCaseStudy, client: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg"
                          placeholder="Client name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        value={newCaseStudy.description}
                        onChange={(e) => setNewCaseStudy({...newCaseStudy, description: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        rows="4"
                        placeholder="Project description"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Date</label>
                        <input
                          type="date"
                          value={newCaseStudy.date}
                          onChange={(e) => setNewCaseStudy({...newCaseStudy, date: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Link (Optional)</label>
                        <input
                          type="url"
                          value={newCaseStudy.link}
                          onChange={(e) => setNewCaseStudy({...newCaseStudy, link: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg"
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setNewCaseStudy({...newCaseStudy, imageFile: e.target.files[0]})}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={handleAddCaseStudy}
                        disabled={loading}
                        className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold"
                      >
                        {loading ? 'Adding...' : 'Add Case Study'}
                      </button>
                      <button
                        onClick={() => setShowCaseStudyForm(false)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid gap-4">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-white p-6 rounded-lg shadow border hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h4 className="font-semibold text-gray-900 text-lg">{study.title}</h4>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {study.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">Client: {study.client}</p>
                        <p className="text-gray-500 text-sm mb-3">{study.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span>Date: {study.date}</span>
                          {study.link && (
                            <a href={study.link} target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600">
                              View Project
                            </a>
                          )}
                        </div>
                      </div>
                      <button 
                        onClick={() => deleteCaseStudy(study.id)} 
                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}

                {caseStudies.length === 0 && (
                  <div className="bg-white p-12 rounded-lg shadow border text-center">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-500 mb-2">No Case Studies Yet</h3>
                    <p className="text-gray-400">Add your first case study to showcase your work</p>
                  </div>
                )}
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

          {activeTab === 'social' && (
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <h2 className="text-3xl font-bold text-gray-900">Social Media & Contact Management</h2>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={saveSocialLinks}
                    disabled={loading}
                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all"
                  >
                    <Save size={20} />
                    {loading ? 'Saving...' : 'Save Social Links'}
                  </button>
                  <button
                    onClick={saveContactInfo}
                    disabled={loading}
                    className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all"
                  >
                    <Save size={20} />
                    {loading ? 'Saving...' : 'Save Contact Info'}
                  </button>
                </div>
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
              </div>

              {/* Contact Information Management */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-6">Manage contact details used across the website</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Email</label>
                    <input
                      type="email"
                      value={contactInfo.companyEmail}
                      onChange={(e) => setContactInfo({...contactInfo, companyEmail: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="company@droptechify.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Manager Email</label>
                    <input
                      type="email"
                      value={contactInfo.managerEmail}
                      onChange={(e) => setContactInfo({...contactInfo, managerEmail: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="manager@droptechify.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Phone</label>
                    <input
                      type="tel"
                      value={contactInfo.companyPhone}
                      onChange={(e) => setContactInfo({...contactInfo, companyPhone: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="+92 XXX XXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Manager Phone</label>
                    <input
                      type="tel"
                      value={contactInfo.managerPhone}
                      onChange={(e) => setContactInfo({...contactInfo, managerPhone: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="+92 XXX XXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Company</label>
                    <input
                      type="tel"
                      value={contactInfo.whatsappCompany}
                      onChange={(e) => setContactInfo({...contactInfo, whatsappCompany: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="923030273718"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Manager</label>
                    <input
                      type="tel"
                      value={contactInfo.whatsappManager}
                      onChange={(e) => setContactInfo({...contactInfo, whatsappManager: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="923172664119"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'settings' && renderSettings()}
        </div>
      </div>
    </div>
  );
};

export default Admin;
