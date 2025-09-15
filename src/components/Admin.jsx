
import React, { useState, useEffect } from 'react';
import { Settings, Users, FileText, MessageSquare, BarChart, Plus, Edit, Trash2, Save, Type, Eye, Calendar, DollarSign, TrendingUp, Lock, User, Bell, UserCheck, BarChart3, PieChart, Activity } from 'lucide-react';
import { db, auth } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider, updateEmail } from 'firebase/auth';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

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
    facebook: 'https://facebook.com/droptechify',
    twitter: 'https://twitter.com/droptechify',
    instagram: 'https://instagram.com/droptechify',
    linkedin: 'https://linkedin.com/company/droptechify',
    clutch: 'https://clutch.co/profile/droptechify',
    upwork: 'https://upwork.com/agencies/droptechify',
    github: 'https://github.com/droptechify',
    youtube: 'https://youtube.com/@droptechify'
  });

  const [iconVisibility, setIconVisibility] = useState({
    facebook: true,
    twitter: true,
    instagram: true,
    linkedin: true,
    clutch: true,
    upwork: true,
    github: true,
    youtube: true
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
    adminEmail: auth.currentUser?.email || 'admin@droptechify.com',
    newEmail: '',
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

  const [analyticsData, setAnalyticsData] = useState({
    monthlyVisits: [420, 580, 890, 1230, 1560, 1890, 2100, 2400, 2800, 3200, 3600, 4000],
    projectsCompleted: [2, 4, 3, 6, 8, 5, 7, 9, 6, 8, 10, 12],
    revenueData: [1200, 1800, 2400, 3200, 2800, 3600, 4200, 4800, 5200, 5800, 6200, 6800]
  });

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <BarChart size={20} /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart3 size={20} /> },
    { id: 'content', name: 'Website Content', icon: <Type size={20} /> },
    { id: 'social', name: 'Social Media', icon: <Users size={20} /> },
    { id: 'images', name: 'Image Gallery', icon: <Eye size={20} /> },
    { id: 'about', name: 'About Page', icon: <FileText size={20} /> },
    { id: 'case-studies', name: 'Case Studies', icon: <Eye size={20} /> },
    { id: 'contacts', name: 'Contacts', icon: <MessageSquare size={20} /> },
    { id: 'services', name: 'Services Content', icon: <Settings size={20} /> },
    { id: 'notifications', name: 'Notifications', icon: <Bell size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={20} /> }
  ];

  // Load data from Firebase with proper error handling
  useEffect(() => {
    initializeData();
    setupRealtimeListeners();
  }, []);

  const initializeData = async () => {
    try {
      await Promise.all([
        loadContacts(),
        loadWebsiteContent(),
        loadSocialLinks(),
        loadContactInfo(),
        loadCaseStudies(),
        loadNotifications()
      ]);
    } catch (error) {
      console.error('Error initializing data:', error);
      showNotification('Some features may not work due to connection issues', 'warning');
    }
  };

  const setupRealtimeListeners = () => {
    if (!db) return;

    try {
      // Listen for new contacts in real-time
      const unsubscribe = onSnapshot(collection(db, 'contacts'), (snapshot) => {
        const contactsData = [];
        snapshot.forEach((doc) => {
          contactsData.push({ id: doc.id, ...doc.data() });
        });
        setContacts(contactsData);
        updateStats(contactsData);
        
        // Check for new contacts and create notifications
        if (contactsData.length > contacts.length) {
          const newContact = contactsData[contactsData.length - 1];
          showNotification(`New contact from ${newContact.name}`, 'info');
        }
      });

      return () => unsubscribe();
    } catch (error) {
      console.error('Error setting up realtime listeners:', error);
    }
  };

  const showNotification = (message, type = 'info') => {
    const notification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date().toISOString(),
      read: false
    };
    
    setNotifications(prev => [notification, ...prev.slice(0, 49)]); // Keep last 50 notifications
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== notification.id));
    }, 5000);
  };

  const loadContacts = async () => {
    try {
      if (!db) {
        console.log('Firebase not available, using local storage');
        const localContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        setContacts(localContacts);
        updateStats(localContacts);
        return;
      }

      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const contactsData = [];
      querySnapshot.forEach((doc) => {
        contactsData.push({ id: doc.id, ...doc.data() });
      });
      setContacts(contactsData);
      updateStats(contactsData);
    } catch (error) {
      console.error('Error loading contacts:', error);
      showNotification('Failed to load contacts', 'error');
    }
  };

  const loadWebsiteContent = async () => {
    try {
      if (!db) {
        const localContent = JSON.parse(localStorage.getItem('websiteContent') || '{}');
        if (Object.keys(localContent).length > 0) {
          setWebsiteContent(prev => ({ ...prev, ...localContent }));
        }
        return;
      }

      const docRef = doc(db, 'websiteContent', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setWebsiteContent(docSnap.data());
      }
    } catch (error) {
      console.error('Error loading website content:', error);
      showNotification('Failed to load website content', 'error');
    }
  };

  const loadSocialLinks = async () => {
    try {
      if (!db) {
        const localSocialLinks = JSON.parse(localStorage.getItem('socialLinks') || '{}');
        if (Object.keys(localSocialLinks).length > 0) {
          setSocialLinks(prev => ({ ...prev, ...localSocialLinks }));
        }
        const localIconVisibility = JSON.parse(localStorage.getItem('iconVisibility') || '{}');
        if (Object.keys(localIconVisibility).length > 0) {
          setIconVisibility(prev => ({ ...prev, ...localIconVisibility }));
        }
        return;
      }

      const docRef = doc(db, 'socialLinks', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSocialLinks(docSnap.data());
      }

      const iconDocRef = doc(db, 'iconVisibility', 'main');
      const iconDocSnap = await getDoc(iconDocRef);
      if (iconDocSnap.exists()) {
        setIconVisibility(iconDocSnap.data());
      }
    } catch (error) {
      console.error('Error loading social links:', error);
      showNotification('Failed to load social links', 'error');
    }
  };

  const loadContactInfo = async () => {
    try {
      if (!db) {
        const localContactInfo = JSON.parse(localStorage.getItem('contactInfo') || '{}');
        if (Object.keys(localContactInfo).length > 0) {
          setContactInfo(prev => ({ ...prev, ...localContactInfo }));
        }
        return;
      }

      const docRef = doc(db, 'contactInfo', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContactInfo(docSnap.data());
      }
    } catch (error) {
      console.error('Error loading contact info:', error);
      showNotification('Failed to load contact info', 'error');
    }
  };

  const loadNotifications = async () => {
    try {
      const localNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
      setNotifications(localNotifications);
    } catch (error) {
      console.error('Error loading notifications:', error);
    }
  };

  const saveSocialLinks = async () => {
    try {
      setLoading(true);
      
      if (db) {
        await setDoc(doc(db, 'socialLinks', 'main'), socialLinks);
        await setDoc(doc(db, 'iconVisibility', 'main'), iconVisibility);
        showNotification('Social media links and visibility updated successfully!', 'success');
      } else {
        localStorage.setItem('socialLinks', JSON.stringify(socialLinks));
        localStorage.setItem('iconVisibility', JSON.stringify(iconVisibility));
        showNotification('Social media links and visibility saved locally!', 'success');
      }
      
    } catch (error) {
      console.error('Error saving social links:', error);
      localStorage.setItem('socialLinks', JSON.stringify(socialLinks));
      localStorage.setItem('iconVisibility', JSON.stringify(iconVisibility));
      showNotification('Error saving settings. Saved locally as backup.', 'warning');
    } finally {
      setLoading(false);
    }
  };

  const saveContactInfo = async () => {
    try {
      setLoading(true);
      
      if (db) {
        await setDoc(doc(db, 'contactInfo', 'main'), contactInfo);
        showNotification('Contact information updated successfully!', 'success');
      } else {
        localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
        showNotification('Contact information saved locally!', 'success');
      }
      
    } catch (error) {
      console.error('Error saving contact info:', error);
      localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
      showNotification('Error saving contact info. Saved locally as backup.', 'warning');
    } finally {
      setLoading(false);
    }
  };

  const saveWebsiteContent = async () => {
    try {
      setLoading(true);
      
      if (db) {
        await setDoc(doc(db, 'websiteContent', 'main'), websiteContent);
        showNotification('Website content updated successfully!', 'success');
      } else {
        localStorage.setItem('websiteContent', JSON.stringify(websiteContent));
        showNotification('Website content saved locally!', 'success');
      }
      
      setEditMode(false);
    } catch (error) {
      console.error('Error saving website content:', error);
      localStorage.setItem('websiteContent', JSON.stringify(websiteContent));
      showNotification('Error saving content. Saved locally as backup.', 'warning');
    } finally {
      setLoading(false);
    }
  };

  const updateStats = (contactsData) => {
    const staticProjectCount = 25; 
    const staticCompletedCount = 20;
    const staticActiveCount = 5;

    setStats({
      totalProjects: staticProjectCount,
      activeProjects: staticActiveCount,
      totalContacts: contactsData.length,
      completedProjects: staticCompletedCount,
      revenue: '$5,000',
      growth: '+35%',
      websiteViews: contactsData.length > 0 ? (contactsData.length * 50).toString() : '250',
      clickRate: '4.2%',
      conversionRate: contactsData.length > 0 ? 
        `${Math.round((staticProjectCount / Math.max(contactsData.length, 1)) * 100)}%` : '12%'
    });
  };

  const deleteContact = async (id) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      try {
        if (db) {
          await deleteDoc(doc(db, 'contacts', id));
        } else {
          const localContacts = contacts.filter(c => c.id !== id);
          setContacts(localContacts);
          localStorage.setItem('contacts', JSON.stringify(localContacts));
        }
        showNotification('Contact deleted successfully', 'success');
        loadContacts();
      } catch (error) {
        console.error('Error deleting contact:', error);
        showNotification('Error deleting contact', 'error');
      }
    }
  };

  const handleImageUpload = async () => {
    if (!newImage.file || !newImage.name) {
      showNotification('Please provide both a name and select a file', 'warning');
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
        showNotification('Image uploaded successfully!', 'success');
      };
      reader.readAsDataURL(newImage.file);
    } catch (error) {
      console.error('Error uploading image:', error);
      showNotification('Error uploading image. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = (id) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setImages(images.filter(img => img.id !== id));
      showNotification('Image deleted successfully', 'success');
    }
  };

  const loadCaseStudies = async () => {
    try {
      if (!db) {
        const localCaseStudies = JSON.parse(localStorage.getItem('caseStudies') || '[]');
        if (localCaseStudies.length === 0) {
          const defaultCaseStudies = [
            {
              id: '1',
              title: 'E-commerce Platform Development',
              category: 'Web',
              client: 'TechCorp Solutions',
              description: 'Built a complete e-commerce platform with payment integration, admin panel, and inventory management system.',
              date: '2024-01-15',
              link: '',
              createdAt: new Date().toISOString()
            },
            {
              id: '2',
              title: 'Mobile Banking Application',
              category: 'App',
              client: 'FinanceFlow Bank',
              description: 'Developed a secure mobile banking application with biometric authentication and real-time transaction monitoring.',
              date: '2024-02-20',
              link: '',
              createdAt: new Date().toISOString()
            },
            {
              id: '3',
              title: 'SaaS Dashboard Platform',
              category: 'SaaS',
              client: 'DataFlow Analytics',
              description: 'Created a comprehensive SaaS platform with multi-tenant architecture, analytics dashboard, and subscription management.',
              date: '2024-03-10',
              link: '',
              createdAt: new Date().toISOString()
            }
          ];
          setCaseStudies(defaultCaseStudies);
          localStorage.setItem('caseStudies', JSON.stringify(defaultCaseStudies));
        } else {
          setCaseStudies(localCaseStudies);
        }
        return;
      }

      const querySnapshot = await getDocs(collection(db, 'caseStudies'));
      const studiesData = [];
      querySnapshot.forEach((doc) => {
        studiesData.push({ id: doc.id, ...doc.data() });
      });
      setCaseStudies(studiesData);
    } catch (error) {
      console.error('Error loading case studies:', error);
      showNotification('Failed to load case studies', 'error');
    }
  };

  const handleAddCaseStudy = async () => {
    if (!newCaseStudy.title || !newCaseStudy.category || !newCaseStudy.client) {
      showNotification('Please fill in all required fields (Title, Category, Client)', 'warning');
      return;
    }

    try {
      setLoading(true);

      const caseStudyData = {
        ...newCaseStudy,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        timestamp: Date.now()
      };

      if (newCaseStudy.imageFile) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          caseStudyData.image = e.target.result;
          
          try {
            if (db) {
              await addDoc(collection(db, 'caseStudies'), caseStudyData);
              showNotification('Case study added successfully!', 'success');
            } else {
              const existingStudies = JSON.parse(localStorage.getItem('caseStudies') || '[]');
              existingStudies.push(caseStudyData);
              localStorage.setItem('caseStudies', JSON.stringify(existingStudies));
              showNotification('Case study added locally!', 'success');
            }

            resetCaseStudyForm();
            loadCaseStudies();
          } catch (error) {
            console.error('Error adding case study:', error);
            showNotification('Error adding case study', 'error');
          }
        };
        reader.readAsDataURL(newCaseStudy.imageFile);
      } else {
        try {
          if (db) {
            await addDoc(collection(db, 'caseStudies'), caseStudyData);
            showNotification('Case study added successfully!', 'success');
          } else {
            const existingStudies = JSON.parse(localStorage.getItem('caseStudies') || '[]');
            existingStudies.push(caseStudyData);
            localStorage.setItem('caseStudies', JSON.stringify(existingStudies));
            showNotification('Case study added locally!', 'success');
          }

          resetCaseStudyForm();
          loadCaseStudies();
        } catch (error) {
          console.error('Error adding case study:', error);
          showNotification('Error adding case study', 'error');
        }
      }
    } catch (error) {
      console.error('Error adding case study:', error);
      showNotification('Error adding case study: ' + error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const resetCaseStudyForm = () => {
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
  };

  const deleteCaseStudy = async (id) => {
    if (confirm('Are you sure you want to delete this case study?')) {
      try {
        if (db) {
          await deleteDoc(doc(db, 'caseStudies', id));
        } else {
          const localStudies = caseStudies.filter(c => c.id !== id);
          setCaseStudies(localStudies);
          localStorage.setItem('caseStudies', JSON.stringify(localStudies));
        }
        showNotification('Case study deleted successfully', 'success');
        loadCaseStudies();
      } catch (error) {
        console.error('Error deleting case study:', error);
        showNotification('Error deleting case study', 'error');
      }
    }
  };

  const handlePasswordChange = async () => {
    if (!adminSettings.currentPassword || !adminSettings.newPassword || !adminSettings.confirmPassword) {
      showNotification('Please fill in all password fields', 'warning');
      return;
    }

    if (adminSettings.newPassword !== adminSettings.confirmPassword) {
      showNotification('New password and confirm password do not match', 'warning');
      return;
    }

    if (adminSettings.newPassword.length < 6) {
      showNotification('Password must be at least 6 characters long', 'warning');
      return;
    }

    try {
      setLoading(true);
      
      if (!auth.currentUser) {
        showNotification('User not authenticated', 'error');
        return;
      }

      // Re-authenticate user with current password
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        adminSettings.currentPassword
      );
      
      await reauthenticateWithCredential(auth.currentUser, credential);
      
      // Update password
      await updatePassword(auth.currentUser, adminSettings.newPassword);
      
      // Save to Firestore if available
      if (db) {
        await setDoc(doc(db, 'adminSettings', 'main'), {
          lastPasswordChange: new Date(),
          adminName: adminSettings.adminName,
          adminEmail: auth.currentUser.email
        });
      }
      
      setAdminSettings({
        ...adminSettings,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      
      showNotification('Password changed successfully!', 'success');
      
    } catch (error) {
      console.error('Error changing password:', error);
      
      let errorMessage = 'Error changing password. Please try again.';
      
      switch (error.code) {
        case 'auth/wrong-password':
          errorMessage = 'Current password is incorrect';
          break;
        case 'auth/requires-recent-login':
          errorMessage = 'Please logout and login again before changing password';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password is too weak. Please use a stronger password.';
          break;
        default:
          errorMessage = 'Failed to change password. Please try again.';
      }
      
      showNotification(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = async () => {
    if (!adminSettings.newEmail || !adminSettings.currentPassword) {
      showNotification('Please enter new email and current password', 'warning');
      return;
    }

    if (adminSettings.newEmail === auth.currentUser?.email) {
      showNotification('New email must be different from current email', 'warning');
      return;
    }

    try {
      setLoading(true);
      
      if (!auth.currentUser) {
        showNotification('User not authenticated', 'error');
        return;
      }

      // Re-authenticate user with current password
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        adminSettings.currentPassword
      );
      
      await reauthenticateWithCredential(auth.currentUser, credential);
      
      // Update email
      await updateEmail(auth.currentUser, adminSettings.newEmail);
      
      setAdminSettings({
        ...adminSettings,
        adminEmail: adminSettings.newEmail,
        newEmail: '',
        currentPassword: ''
      });
      
      showNotification('Email changed successfully!', 'success');
      
    } catch (error) {
      console.error('Error changing email:', error);
      
      let errorMessage = 'Error changing email. Please try again.';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already in use by another account';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Please enter a valid email address';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Current password is incorrect';
          break;
        case 'auth/requires-recent-login':
          errorMessage = 'Please logout and login again before changing email';
          break;
        default:
          errorMessage = 'Failed to change email. Please try again.';
      }
      
      showNotification(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  const markNotificationAsRead = (id) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    localStorage.removeItem('notifications');
  };

  // Simple chart component
  const SimpleLineChart = ({ data, title, color = '#0EA5E9' }) => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-64 flex items-end justify-between">
        {data.map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="bg-sky-400 w-6 rounded-t"
              style={{ 
                height: `${(value / Math.max(...data)) * 200}px`,
                backgroundColor: color 
              }}
            ></div>
            <span className="text-xs text-gray-500 mt-2">{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );

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

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SimpleLineChart 
          data={analyticsData.monthlyVisits} 
          title="Monthly Website Visits" 
          color="#0EA5E9" 
        />
        <SimpleLineChart 
          data={analyticsData.projectsCompleted} 
          title="Projects Completed per Month" 
          color="#10B981" 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SimpleLineChart 
          data={analyticsData.revenueData} 
          title="Monthly Revenue ($)" 
          color="#F59E0B" 
        />
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Conversion Rate</span>
              <span className="font-semibold text-green-600">{stats.conversionRate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Click Rate</span>
              <span className="font-semibold text-blue-600">{stats.clickRate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Website Views</span>
              <span className="font-semibold text-purple-600">{stats.websiteViews}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Growth Rate</span>
              <span className="font-semibold text-yellow-600">{stats.growth}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Notifications</h2>
        <button
          onClick={clearAllNotifications}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {notifications.length === 0 ? (
          <div className="bg-white p-12 rounded-lg shadow text-center">
            <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 mb-2">No Notifications</h3>
            <p className="text-gray-400">You're all caught up!</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div 
              key={notification.id}
              className={`bg-white p-4 rounded-lg shadow border-l-4 ${
                notification.type === 'success' ? 'border-green-500' :
                notification.type === 'warning' ? 'border-yellow-500' :
                notification.type === 'error' ? 'border-red-500' :
                'border-blue-500'
              } ${notification.read ? 'opacity-60' : ''}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-900 font-medium">{notification.message}</p>
                  <p className="text-gray-500 text-sm">{new Date(notification.timestamp).toLocaleString()}</p>
                </div>
                {!notification.read && (
                  <button
                    onClick={() => markNotificationAsRead(notification.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Eye size={16} />
                  </button>
                )}
              </div>
            </div>
          ))
        )}
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

      {/* Email Change */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold mb-4">Change Email Address</h3>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Email</label>
            <input
              type="email"
              value={adminSettings.adminEmail}
              disabled
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Email</label>
            <input
              type="email"
              value={adminSettings.newEmail}
              onChange={(e) => setAdminSettings({...adminSettings, newEmail: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter new email address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password (for verification)</label>
            <input
              type="password"
              value={adminSettings.currentPassword}
              onChange={(e) => setAdminSettings({...adminSettings, currentPassword: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter current password"
            />
          </div>
          <button
            onClick={handleEmailChange}
            disabled={loading || !adminSettings.newEmail || !adminSettings.currentPassword}
            className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold"
          >
            {loading ? 'Changing...' : 'Change Email'}
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
              {tab.id === 'notifications' && notifications.filter(n => !n.read).length > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {notifications.filter(n => !n.read).length}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-blue-800 rounded-lg p-4 text-center space-y-2">
            <p className="text-blue-200 text-sm mb-2">Quick Access</p>
            <button 
              onClick={() => window.open('/', '_blank')}
              className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors mb-2"
            >
              View Website
            </button>
            <button 
              onClick={async () => {
                try {
                  await auth.signOut();
                  sessionStorage.removeItem('admin_authenticated');
                  localStorage.removeItem('admin_authenticated');
                  window.location.reload();
                } catch (error) {
                  console.error('Error signing out:', error);
                  window.location.reload();
                }
              }}
              className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold text-sm hover:bg-red-600 transition-colors"
            >
              Logout
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

        {/* Notifications Toast */}
        {notifications.length > 0 && (
          <div className="fixed top-4 right-4 z-50 space-y-2">
            {notifications.slice(0, 3).map((notification) => (
              <div 
                key={notification.id}
                className={`max-w-sm p-4 rounded-lg shadow-lg border-l-4 ${
                  notification.type === 'success' ? 'bg-green-50 border-green-500 text-green-800' :
                  notification.type === 'warning' ? 'bg-yellow-50 border-yellow-500 text-yellow-800' :
                  notification.type === 'error' ? 'bg-red-50 border-red-500 text-red-800' :
                  'bg-blue-50 border-blue-500 text-blue-800'
                }`}
              >
                <p className="font-medium">{notification.message}</p>
              </div>
            ))}
          </div>
        )}

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
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell size={20} />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.filter(n => !n.read).length}
                  </span>
                )}
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'analytics' && renderAnalytics()}
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">GitHub URL</label>
                    <input
                      type="url"
                      value={socialLinks.github || ''}
                      onChange={(e) => setSocialLinks({...socialLinks, github: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="https://github.com/droptechify"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">YouTube URL</label>
                    <input
                      type="url"
                      value={socialLinks.youtube || ''}
                      onChange={(e) => setSocialLinks({...socialLinks, youtube: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="https://youtube.com/@droptechify"
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

              {/* Icon Visibility Controls */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <h3 className="text-xl font-semibold mb-4">Social Media Icons Visibility</h3>
                <p className="text-gray-600 mb-6">Control which social media icons are displayed in the footer</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.keys(iconVisibility).map((platform) => (
                    <div key={platform} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700 capitalize">
                          {platform === 'youtube' ? 'YouTube' : platform}
                        </span>
                      </div>
                      <button
                        onClick={() => setIconVisibility({
                          ...iconVisibility,
                          [platform]: !iconVisibility[platform]
                        })}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          iconVisibility[platform] ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            iconVisibility[platform] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Quick Actions:</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setIconVisibility(Object.keys(iconVisibility).reduce((acc, key) => ({ ...acc, [key]: true }), {}))}
                      className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Show All
                    </button>
                    <button
                      onClick={() => setIconVisibility(Object.keys(iconVisibility).reduce((acc, key) => ({ ...acc, [key]: false }), {}))}
                      className="px-3 py-1 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Hide All
                    </button>
                    <button
                      onClick={() => setIconVisibility({
                        facebook: true,
                        twitter: true,
                        instagram: true,
                        linkedin: true,
                        clutch: false,
                        upwork: false,
                        github: false,
                        youtube: false
                      })}
                      className="px-3 py-1 bg-purple-500 text-white text-sm rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      Show Main Only
                    </button>
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
          {activeTab === 'notifications' && renderNotifications()}
          {activeTab === 'settings' && renderSettings()}
        </div>
      </div>
    </div>
  );
};

export default Admin;
