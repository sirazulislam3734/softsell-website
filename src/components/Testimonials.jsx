/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { StarIcon } from "./Icons"

const Testimonials = () => {
    const testimonials = [
        {
          id: 1,
          name: "Alex Rock",
          role: "CEO",
          company: "TechVision Inc.",
          image: "https://i.ibb.co.com/nqwZVy7B/araf.jpg",
          rating: 4.5,
          companyDescription:
            "Lorem Ipsum is simly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since including versions of Lorem Ipsum....",
        },
        {
          id: 2,
          name: "Johnny Deep",
          role: "CEO",
          company: "InnovateLabs",
          image: "https://i.ibb.co.com/HLMX6LRQ/photo.jpg",
          rating: 4.5,
          companyDescription:
            "Lorem Ipsum is simly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since including versions of Lorem Ipsum....",
        },
      ]
    
      // Animation variants
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      }
    
      const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
          },
        },
      }
    
      const circleVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 200,
          },
        },
      }
    
      return (
        <motion.div
          className="flex flex-col md:flex-row gap-6 p-5 lg:p-24 bg-blue-50 dark:bg-gray-900 rounded-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="relative flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 border border-blue-100 dark:border-blue-700 shadow-sm"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
              }}
            >
              {/* PP Circle */}
              <motion.div
                className="absolute -top-3 -left-3 w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center border-2 border-blue-400 dark:border-blue-500 text-blue-500 dark:text-blue-400 font-semibold text-sm"
                variants={circleVariants}
              >
                pp
              </motion.div>
    
              {/* Profile Image */}
              <motion.div
                className="flex justify-center mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="relative w-24 h-24 rounded-full border-4 border-blue-500 dark:border-blue-400 overflow-hidden">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
    
              {/* Company Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{testimonial.companyDescription}</p>
    
              {/* Name, Role and Company */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
    
                {/* Rating */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <StarIcon
                        filled={
                          i < Math.floor(testimonial.rating) ||
                          (i === Math.floor(testimonial.rating) && testimonial.rating % 1 > 0)
                        }
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
    
              {/* DD Circle */}
              <motion.div
                className="absolute -bottom-3 -right-3 w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center border-2 border-blue-400 dark:border-blue-500 text-blue-500 dark:text-blue-400 font-semibold text-sm"
                variants={circleVariants}
              >
                dd
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )
    }

export default Testimonials
