
import { useState, useEffect } from "react"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import WhyChooseUs from "./components/WhyChooseUs"
import Testimonials from "./components/Testimonials"
import ContactForm from "./components/ContactForm"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ChatWidget from "./components/ChatWidget"

function App() {
  // Initialize dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem("darkMode")
    if (savedMode !== null) {
      return savedMode === "true"
    }
    // If no localStorage value, check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    // Update class on document element
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Save preference to localStorage
    localStorage.setItem("darkMode", darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />

      {/* Chat widget component that handles both button and chat window */}
      <ChatWidget isOpen={chatOpen} setIsOpen={setChatOpen} />
    </div>
  )
}

export default App
