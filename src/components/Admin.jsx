
import React, { useState } from 'react'
import { Plus, Edit, Trash2, Save, X } from 'lucide-react'

const Admin = () => {
  const [activeTab, setActiveTab] = useState('portfolio')
  const [isEditing, setIsEditing] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  // Mock data - in real app this would come from API
  const [portfolioItems, setPortfolioItems] = useState([
    { id: 1, title: "E-Commerce Platform", category: "Website Development", image: "/IMAGE.jpg", description: "Full-featured e-commerce solution" }
  ])

  const [reviews, setReviews] = useState([
    { id: 1, name: "Sarah Johnson", company: "TechStart Inc.", rating: 5, text: "DropTechify transformed our digital presence completely." }
  ])

  const [faqs, setFaqs] = useState([
    { id: 1, question: "What services does DropTechify offer?", answer: "We offer comprehensive digital services..." }
  ])

  const [contacts, setContacts] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", service: "Website Development", message: "Need a new website", date: "2025-01-01" }
  ])

  const tabs = [
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'reviews', name: 'Reviews' },
    { id: 'faqs', name: 'FAQs' },
    { id: 'contacts', name: 'Contacts' }
  ]

  const handleEdit = (item) => {
    setEditingItem(item)
    setIsEditing(true)
  }

  const handleDelete = (id, type) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      switch (type) {
        case 'portfolio':
          setPortfolioItems(portfolioItems.filter(item => item.id !== id))
          break
        case 'reviews':
          setReviews(reviews.filter(item => item.id !== id))
          break
        case 'faqs':
          setFaqs(faqs.filter(item => item.id !== id))
          break
        case 'contacts':
          setContacts(contacts.filter(item => item.id !== id))
          break
      }
    }
  }

  const renderPortfolio = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Portfolio Management</h3>
        <button className="bg-sky-400 text-black px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} /> Add Project
        </button>
      </div>
      
      <div className="grid gap-6">
        {portfolioItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.category}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(item)} className="text-blue-500 hover:text-blue-700">
                <Edit size={20} />
              </button>
              <button onClick={() => handleDelete(item.id, 'portfolio')} className="text-red-500 hover:text-red-700">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderReviews = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Reviews Management</h3>
        <button className="bg-sky-400 text-black px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} /> Add Review
        </button>
      </div>
      
      <div className="grid gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-gray-600">{review.company}</p>
                <p className="mt-2">{review.text}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(review)} className="text-blue-500 hover:text-blue-700">
                  <Edit size={20} />
                </button>
                <button onClick={() => handleDelete(review.id, 'reviews')} className="text-red-500 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderFAQs = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">FAQ Management</h3>
        <button className="bg-sky-400 text-black px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} /> Add FAQ
        </button>
      </div>
      
      <div className="grid gap-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{faq.question}</h4>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(faq)} className="text-blue-500 hover:text-blue-700">
                  <Edit size={20} />
                </button>
                <button onClick={() => handleDelete(faq.id, 'faqs')} className="text-red-500 hover:text-red-700">
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

      <div className="container-max section-padding py-8">
        {/* Tabs */}
        <div className="flex space-x-8 border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-sky-500 text-sky-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {activeTab === 'portfolio' && renderPortfolio()}
          {activeTab === 'reviews' && renderReviews()}
          {activeTab === 'faqs' && renderFAQs()}
          {activeTab === 'contacts' && renderContacts()}
        </div>
      </div>
    </div>
  )
}

export default Admin
