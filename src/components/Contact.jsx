import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Let's Connect</h2>
            <div className="w-20 h-px bg-white mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations. 
              Let's connect and create something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card">
                <h3 className="text-xl font-medium mb-6">Send a Message</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="px-4 py-3 bg-transparent border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="px-4 py-3 bg-transparent border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="btn btn-primary w-full group"
                  >
                    <Send size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Direct Contact */}
              <div className="card">
                <h3 className="text-xl font-medium mb-4">Get in touch directly</h3>
                <a 
                  href="mailto:your.email@example.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  <span>your.email@example.com</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="card">
                <h3 className="text-xl font-medium mb-4">Follow me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                    >
                      <social.icon size={18} />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-800 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm">
              © 2024 Jaydeep. Built with React & Framer Motion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact