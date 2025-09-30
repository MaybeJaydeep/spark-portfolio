import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, ArrowRight, X, Sparkles, Home, User, Code, Briefcase, Mail } from 'lucide-react'

// Lazy load components
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

// Enhanced loading spinner
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-32">
    <div className="relative">
      <motion.div
        className="text-6xl font-bold j-glow"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        J
      </motion.div>
      <motion.div
        className="absolute -top-2 -right-2"
        animate={{
          scale: [0, 1, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      >
        <Sparkles size={20} className="text-white/60" />
      </motion.div>
    </div>
  </div>
)

const App = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen text-white">
      {/* Enhanced Attractive Navigation */}
      <motion.nav
        className={`nav-fixed ${scrolled ? 'nav-scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container-custom">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
            {/* Enhanced Logo */}
            <motion.div
              className="nav-logo flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-12 h-12 glass rounded-2xl flex items-center justify-center pulse-glow relative overflow-hidden"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-xl j-glow relative z-10">J</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              <motion.span
                className="text-2xl font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                Jaydeep
              </motion.span>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'projects', label: 'Projects', icon: Briefcase },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-item flex items-center space-x-2 ${activeSection === item.id ? 'active' : ''}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={16} className="opacity-70" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="mobile-menu-btn lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 45 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main J with enhanced effects */}
            <motion.div
              className="text-9xl md:text-[12rem] font-bold j-glow mb-8 float"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              J
            </motion.div>

            {/* Name with enhanced gradient */}
            <motion.h1
              className="text-5xl md:text-7xl font-light mb-6 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Jaydeep
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Full Stack Developer
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Crafting digital experiences with clean code and modern technologies.
              Passionate about creating elegant solutions that make a difference.
            </motion.p>

            {/* Enhanced CTA Button */}
            <motion.button
              onClick={() => scrollToSection('about')}
              className="btn btn-primary group text-lg px-8 py-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore My Work</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mobile-menu-content">
              {/* Mobile Menu Header */}
              <motion.div
                className="absolute top-8 left-8 flex items-center space-x-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold j-glow">J</span>
                </div>
                <span className="text-xl font-bold gradient-text">Jaydeep</span>
              </motion.div>

              {/* Mobile Menu Items */}
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'projects', label: 'Projects', icon: Briefcase },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className="mobile-menu-item flex items-center justify-center space-x-3"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.8 }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={24} className="opacity-70" />
                  <span className="text-2xl font-light">{item.label}</span>
                </motion.button>
              ))}

              {/* Close Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-close"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              {/* Background Decoration */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Navigate to any section
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App