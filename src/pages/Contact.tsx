import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-96px)] pt-24 pb-12 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Get in <span className='text-red-600'>Touch</span>
          </h1>
          <p className="text-gray-600 text-lg">Have questions? We're here to help you 24/7.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-100 hover:border-red-200 transition-colors">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:border-red-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:border-red-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:border-red-200"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-lg font-medium hover:bg-red-700 transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-100 hover:border-red-200 transition-all duration-200 transform hover:translate-y-[-2px]">
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Visit Us</h3>
                  <p className="text-gray-600">2, Kelimel street, Lekshmipuram, Ganapathy, Coimbatore</p>
                  <p className="text-gray-600">Tamil Nadu 641006</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-100 hover:border-red-200 transition-all duration-200 transform hover:translate-y-[-2px]">
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Call Us</h3>
                  <p className="text-gray-600">+91 9345253890</p>
                  
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-100 hover:border-red-200 transition-all duration-200 transform hover:translate-y-[-2px]">
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Email Us</h3>
                  <p className="text-gray-600">aimuniversse@gmail.com</p>
                  {/* <p className="text-gray-600">Available 24/7</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;