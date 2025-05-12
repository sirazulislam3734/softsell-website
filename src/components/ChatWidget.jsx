/* eslint-disable no-unused-vars */

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi"

function ChatWidget({ isOpen: propIsOpen, setIsOpen: propSetIsOpen }) {
  // Allow both prop-controlled and internal state
  const [isOpenInternal, setIsOpenInternal] = useState(false)
  const isOpen = propIsOpen !== undefined ? propIsOpen : isOpenInternal
  const setIsOpen = propSetIsOpen || setIsOpenInternal

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you with software license resale today?",
      sender: "bot",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  // Example predefined questions
  const quickQuestions = [
    "How do I sell my license?",
    "What licenses do you accept?",
    "How long does the process take?",
    "How much is my license worth?",
  ]

  const botResponses = {
    "how do i sell my license?":
      "To sell your license, simply fill out the contact form with your license details. We'll send you a valuation within 24 hours, and if you accept, you'll get paid within 48 hours after verification!",
    "what licenses do you accept?":
      "We accept licenses from major enterprise software providers including Microsoft, Adobe, Oracle, SAP, Salesforce, Autodesk and many others. Both perpetual and subscription licenses can be resold.",
    "how long does the process take?":
      "Our process is fast! After submitting your license info, you'll receive a valuation within 24 hours. If you accept, payment is processed within 48 hours of license verification.",
    "how much is my license worth?":
      "License values vary based on software type, remaining term, and market demand. Enterprise solutions like SAP or Oracle typically fetch higher values. Submit your details for a free, no-obligation quote!",
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = (e) => {
    e?.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot "typing"
    setIsTyping(true)

    // Find appropriate response or use fallback
    setTimeout(() => {
      setIsTyping(false)
      const lowercaseInput = input.toLowerCase()
      let responseText = ""

      // Check for matches in our predefined responses
      for (const [key, value] of Object.entries(botResponses)) {
        if (lowercaseInput.includes(key)) {
          responseText = value
          break
        }
      }

      // Fallback response if no match found
      if (!responseText) {
        responseText =
          "Thanks for your question! To get specific information about your software licenses, please fill out our contact form and one of our specialists will assist you shortly."
      }

      const botMessage = {
        id: messages.length + 2,
        text: responseText,
        sender: "bot",
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleQuickQuestion = (question) => {
    setInput(question)
    // Pass an empty event to handleSendMessage
    handleSendMessage({ preventDefault: () => {} })
  }

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors z-50"
        aria-label="Toggle chat widget"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </button>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-full max-w-sm bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
          >
            {/* Chat header */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold">SoftSell Assistant</h3>
                <p className="text-blue-100 text-sm">We typically reply in minutes</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-blue-100 hover:text-white"
                aria-label="Close chat"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800">
              {messages.map((message) => (
                <div key={message.id} className={`mb-3 ${message.sender === "user" ? "text-right" : ""}`}>
                  <div
                    className={`inline-block p-3 rounded-lg max-w-[85%] ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm rounded-bl-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="mb-3">
                  <div className="inline-block p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm rounded-bl-none max-w-[85%]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 flex overflow-x-auto space-x-2 hide-scrollbar">
              {quickQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickQuestion(question)}
                  className="flex-shrink-0 px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 whitespace-nowrap"
                >
                  {question}
                </button>
              ))}
            </div>

            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700 flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-l-lg focus:outline-none text-gray-900 dark:text-white"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                disabled={!input.trim()}
              >
                <FiSend size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget
