import { motion } from 'framer-motion'
import { FaRobot, FaBrain, FaComments, FaShieldAlt } from 'react-icons/fa'

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <svg className="trusty-inline-flex" width="25" height="30" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1204.7"><polygon fill="#0072ce" points="1024 -1.3 0 179.4 0 1203.4 755.5 1070.1 933.5 1206 933.5 1038.7 1024 1022.7 1024 -1.3"></polygon><path fill="#fff" d="M341.1,515.7c20.4,0,37.6-7.1,52-21.4s21.4-31.5,21.4-52-7.1-37.6-21.4-52c-14.2-14.2-31.5-21.4-52-21.4s-37.6,7.1-52,21.4-21.4,31.5-21.4,52,7.1,37.6,21.4,52c14.2,14.2,31.5,21.4,52,21.4Z"></path><path fill="#fff" d="M683,515.7c20.4,0,37.6-7.1,52-21.4s21.4-31.5,21.4-52-7.1-37.6-21.4-52c-14.2-14.2-31.5-21.4-52-21.4s-37.6,7.1-52,21.4-21.4,31.5-21.4,52,7.1,37.6,21.4,52c14.2,14.2,31.5,21.4,52,21.4Z"></path><path fill="#fff" d="M361.2,786.2c45.2,31.3,95.4,47,150.8,47h.1c55.3,0,105.6-15.7,150.8-47,45.2-31.3,78-72.7,98.3-124h-498.2c20.4,51.3,53.1,92.6,98.3,124h0Z"></path></svg>
              <span className="ml-2 text-xl font-bold">Trusty AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary">Caratteristiche</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary">Come Funziona</a>
              <a href="#contact" className="text-gray-600 hover:text-primary">Contatti</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgb(0 114 206) 0%, rgb(0 114 206 / 0.8) 50%, rgb(0 114 206 / 0.4) 100%)',
              'radial-gradient(circle at 100% 0%, rgb(0 114 206) 0%, rgb(0 114 206 / 0.8) 50%, rgb(0 114 206 / 0.4) 100%)',
              'radial-gradient(circle at 100% 100%, rgb(0 114 206) 0%, rgb(0 114 206 / 0.8) 50%, rgb(0 114 206 / 0.4) 100%)',
              'radial-gradient(circle at 0% 100%, rgb(0 114 206) 0%, rgb(0 114 206 / 0.8) 50%, rgb(0 114 206 / 0.4) 100%)',
              'radial-gradient(circle at 0% 0%, rgb(0 114 206) 0%, rgb(0 114 206 / 0.8) 50%, rgb(0 114 206 / 0.4) 100%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Animated Circles */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-bold text-white mb-6"
          >
            Il Tuo Assistente AI Intelligente
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Trusty AI ti aiuta nelle attività quotidiane, risponde alle tue domande e rende la tua vita più semplice grazie all'intelligenza artificiale avanzata.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Inizia Ora
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Caratteristiche Principali</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaBrain className="h-8 w-8" />}
              title="AI Avanzata"
              description="Alimentato da un'intelligenza artificiale all'avanguardia per risposte precise e utili."
            />
            <FeatureCard 
              icon={<FaComments className="h-8 w-8" />}
              title="Conversazioni Naturali"
              description="Interagisci con conversazioni naturali e simili a quelle umane grazie al nostro modello linguistico avanzato."
            />
            <FeatureCard 
              icon={<FaShieldAlt className="h-8 w-8" />}
              title="Sicuro e Privato"
              description="I tuoi dati sono protetti con misure di sicurezza e privacy di livello enterprise."
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Come Funziona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard 
              number="1"
              title="Fai una Domanda"
              description="Scrivi semplicemente la tua domanda o richiesta in linguaggio naturale."
            />
            <StepCard 
              number="2"
              title="Elaborazione AI"
              description="La nostra AI analizza la tua richiesta e genera la migliore risposta."
            />
            <StepCard 
              number="3"
              title="Ottieni Risultati"
              description="Ricevi risposte accurate e utili in pochi secondi."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto a Iniziare?</h2>
          <p className="text-gray-600 mb-8">Unisciti a migliaia di utenti che si affidano a Trusty AI per le loro attività quotidiane.</p>
          <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
            Contattaci
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <FaRobot className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Trusty AI</span>
            </div>
            <div className="text-gray-400">
              © 2024 Trusty AI. Tutti i diritti riservati.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

function StepCard({ number, title, description }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default App 