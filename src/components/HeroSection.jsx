/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import BannerImg from '../assets/image.jpg';

function HeroSection() {
  return (
    <section id='home' className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Turn Unused Software Into
              <span className="text-blue-600 dark:text-blue-400"> Cash</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              SoftSell helps businesses resell their unused software licenses quickly, securely, and for the best price on the market.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-md text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Sell Your Licenses
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-3 rounded-md text-lg font-medium text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                How It Works
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 lg:mt-0 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-50 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative">
                  <div className="flex items-center justify-center h-50 mb-4">
                    <img src={BannerImg} alt="SoftSell Hero" className="rounded-lg max-h-full w-full" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">TRUSTED BY INDUSTRY LEADERS</div>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                      <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;