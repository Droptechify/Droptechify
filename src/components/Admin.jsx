import React, { useState } from 'react'
import { Settings, Users, FileText, Image, MessageSquare, BarChart, Plus, Edit, Trash2 } from 'lucide-react'

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [projects, setProjects] = useState([
    { id: 1, title: 'E-commerce Platform', status: 'Completed', client: 'Tech Corp' },
    { id: 2, title: 'Mobile App', status: 'In Progress', client: 'StartupXYZ' },
    { id: 3, title: 'Video Campaign', status: 'Planning', client: 'MediaCo' }
  ])

  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', service: 'Website Development', message: 'Need a new website for my business', date: '2025-01-15', phone: '+92 300 1234567' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', service: 'App Development', message: 'Looking for mobile app development', date: '2025-01-14', phone: '+92 301 7654321' }
  ])

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: <BarChart size={20} /> },
    { id: 'projects', name: 'Projects', icon: <FileText size={20} /> },
    { id: 'contacts', name: 'Contacts', icon: <MessageSquare size={20} /> },
    { id: 'media', name: 'Media', icon: <Image size={20} /> },
    { id: 'users', name: 'Users', icon: <Users size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={20} /> }
  ]

  const handleDelete = (id, type) => {
    if (type === 'projects') {
      setProjects(projects.filter(project => project.id !== id))
    } else if (type === 'contacts') {
      setContacts(contacts.filter(contact => contact.id !== id))
    }
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Dashboard Overview</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-700">Total Projects</h4>
          <p className="text-3xl font-bold text-sky-400">{projects.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-700">Active Projects</h4>
          <p className="text-3xl font-bold text-green-500">{projects.filter(p => p.status === 'In Progress').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-700">Contact Messages</h4>
          <p className="text-3xl font-bold text-blue-500">{contacts.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-700">Completed Projects</h4>
          <p className="text-3xl font-bold text-purple-500">{projects.filter(p => p.status === 'Completed').length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold mb-4">Recent Activity</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">New project "E-commerce Platform" completed</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">Contact message received from John Doe</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-600">Mobile App project status updated</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Projects</h3>
        <button className="bg-sky-400 hover:bg-sky-500 text-black px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2">
          <Plus size={20} /> Add Project
        </button>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="text-gray-600">Client: {project.client}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <Edit size={20} />
                </button>
                <button onClick={() => handleDelete(project.id, 'projects')} className="text-red-500 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderContacts = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Contact Submissions</h3>

      <div className="grid gap-6">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{contact.name}</h4>
                <p className="text-gray-600">{contact.email}</p>
                {contact.phone && <p className="text-gray-600">{contact.phone}</p>}
                <p className="text-sm text-gray-500">Service: {contact.service}</p>
                <p className="mt-2">{contact.message}</p>
                <p className="text-xs text-gray-400 mt-2">Received: {contact.date}</p>
              </div>
              <button onClick={() => handleDelete(contact.id, 'contacts')} className="text-red-500 hover:text-red-700">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max section-padding">
          <div className="py-4">
            <h1 className="text-3xl font-bold text-gray-900">DropTechify Admin Panel</h1>
            <p className="text-gray-600">Manage your website content</p>
          </div>
        </div>
      </div>

      <div className="container-max section-padding">
        <div className="py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-sky-400 text-black font-semibold'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {activeTab === 'dashboard' && renderDashboard()}
              {activeTab === 'projects' && renderProjects()}
              {activeTab === 'contacts' && renderContacts()}

              {activeTab === 'media' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Library</h2>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-gray-600">Media management functionality coming soon...</p>
                  </div>
                </div>
              )}

              {activeTab === 'users' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">User Management</h2>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-gray-600">User management functionality coming soon...</p>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Site Configuration</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
                        <input type="text" defaultValue="Droptechify" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                        <textarea defaultValue="We Build Digital Solutions That Build Your Brand" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
                      </div>
                      <button className="bg-sky-400 hover:bg-sky-500 text-black px-4 py-2 rounded-lg font-semibold">
                        Save Settings
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin