import { motion } from 'framer-motion'
import { Heart, Code, Coffee, Lightbulb } from 'lucide-react'

const About = () => {
  const highlights = [
    { icon: Heart, text: "Passionate about elegant solutions", color: "text-red-400" },
    { icon: Code, text: "Clean code advocate", color: "text-blue-400" },
    { icon: Coffee, text: "Always learning", color: "text-amber-400" },
    { icon: Lightbulb, text: "Innovation driven", color: "text-yellow-400" }
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 gradient-text">About Me</h2>
            <motion.div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-300">
                  I'm a passionate full-stack developer who thrives on creating 
                  elegant solutions to complex problems. With a keen eye for detail 
                  and a love for clean, efficient code, I transform ideas into 
                  digital experiences that make a difference.
                </p>
                <p className="text-gray-300">
                  My journey in tech has been driven by curiosity and the constant 
                  desire to learn. I believe in the power of technology to transform 
                  ideas into reality, and I'm always exploring new ways to push 
                  the boundaries of what's possible.
                </p>
                <p className="text-gray-300">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-12">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="glass-hover rounded-2xl p-4 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon size={20} className={item.color} />
                      <span className="text-sm text-gray-300">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Visual Element */}
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div 
                  className="w-80 h-80 glass rounded-3xl flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="border border-white/20"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.02 }}
                          viewport={{ once: true }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Center J */}
                  <motion.div 
                    className="text-8xl font-bold j-glow relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    J
                  </motion.div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 glass rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 glass rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About