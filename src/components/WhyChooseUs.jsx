/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

function WhyChooseUs() {
  const benefits = [
    {
      icon: <CurrencyDollarIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: 'Best Market Rates',
      description: 'We offer the highest payouts in the industry, with up to 85% of the market value returned to you.'
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: 'Secure Transactions',
      description: 'All license transfers are handled securely with full legal documentation and compliance.'
    },
    {
      icon: <ClockIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: 'Fast Processing',
      description: 'Get valuations within 24 hours and payment within 3 business days after approval.'
    },
    {
      icon: <UserGroupIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: 'Expert Support',
      description: 'Our team of licensing specialists is available to help you through every step of the process.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-blue-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            Why Choose SoftSell
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
          >
            The trusted partner for software license resale
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg px-6 py-8"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">{benefit.title}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;