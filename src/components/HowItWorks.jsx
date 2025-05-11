/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { CheckCircleIcon, CurrencyDollarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

function HowItWorks() {
  const steps = [
    {
      icon: <DocumentTextIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: 'Upload License',
      description: 'Submit your software license details through our secure platform. We accept all major enterprise software licenses.'
    },
    {
      icon: <CheckCircleIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: 'Get Valuation',
      description: 'Our experts review your license and provide a fair market valuation within 24 hours based on current market demand.'
    },
    {
      icon: <CurrencyDollarIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: 'Get Paid',
      description: 'Accept our offer and receive payment via bank transfer, PayPal, or cryptocurrency. Quick and hassle-free.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
          >
            Our simple 3-step process to turn your unused software licenses into cash
          </motion.p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-6 py-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;