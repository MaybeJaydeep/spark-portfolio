import { motion, AnimatePresence } from 'framer-motion'
import { X, Home, User, Code, Briefcase, Mail } from 'lucide-react'

const MobileNav = ({ isOpen, onClose, onNavigate }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 bg-black border-l border-gray-800 z-50 p-6"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-900 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <motion.nav className="space-y-4">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    onNavigate(item.id)
                    onClose()
                  }}
                  className="flex items-center space-x-4 w-full text-left p-4 rounded-lg hover:bg-gray-900/50 hover:text-white transition-all duration-300 group"
                >
                  <item.icon size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="text-xl font-light">{item.label}</span>
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileNav