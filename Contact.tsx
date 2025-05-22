import  { FormEvent, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-red-100 rounded-full">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Call Us</h2>
              <p className="text-gray-600">+1 (323) 555-7890</p>
              <p className="text-gray-600">Mon-Fri: 9am - 7pm</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-red-100 rounded-full">
                <Mail className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Email Us</h2>
              <p className="text-gray-600">info@prestigemotors.com</p>
              <p className="text-gray-600">sales@prestigemotors.com</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-red-100 rounded-full">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Visit Us</h2>
              <p className="text-gray-600">123 Luxury Lane</p>
              <p className="text-gray-600">Beverly Hills, CA 90210</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </form>
              </div>
              
              <div className="bg-gray-900 text-white p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-6">Showroom Hours</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By appointment only</span>
                  </div>
                </div>
                
                <hr className="my-8 border-gray-700" />
                
                <h2 className="text-2xl font-bold mb-6">Need Immediate Assistance?</h2>
                <p className="mb-4">Our VIP concierge service is available for urgent inquiries:</p>
                <a href="tel:+13235558000" className="text-red-400 font-bold text-xl">+1 (323) 555-8000</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
  