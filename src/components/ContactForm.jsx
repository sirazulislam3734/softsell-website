/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FiCheck, FiX, FiSend } from "react-icons/fi";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
        setIsLoading(false);
      setIsError(false);
    }, 1000);
  };

  if (isLoading) {
    return (
        <div className="flex items-center dark:bg-gray-800 justify-center h-screen">
            Loading...
            </div>
    )
  }

  const licenseTypes = [
    { value: "", label: "Select License Type" },
    { value: "enterprise", label: "Enterprise Software" },
    { value: "saas", label: "SaaS Subscription" },
    { value: "desktop", label: "Desktop Application" },
    { value: "server", label: "Server License" },
    { value: "other", label: "Other" },
  ];

  return (
    <section id="contact" className="py-16 bg-blue-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Sell Your Licenses?
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Fill out the form below and we'll get back to you with a valuation
              within 24 hours
            </motion.p>
          </div>

          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitted ? (
              <div className="p-8 text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900">
                  <FiCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
                  Thanks for reaching out!
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  We've received your message and will get back to you with a
                  valuation shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="p-8">
                {isError && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 rounded-md flex items-start">
                    <FiX className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <p>
                      There was a problem submitting your form. Please try
                      again.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`mt-1 p-3 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your full name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`mt-1 p-3 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="Enter Your Email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please enter a valid email",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        className={`mt-1 p-3 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
                          errors.company ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your company name"
                        {...register("company", {
                          required: "Company is required",
                        })}
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.company.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="licenseType"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        License Type
                      </label>
                      <select
                        id="licenseType"
                        className={`mt-1 p-3 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
                          errors.licenseType ? "border-red-500" : ""
                        }`}
                        {...register("licenseType", {
                          required: "Please select a license type",
                        })}
                      >
                        {licenseTypes.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.licenseType && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.licenseType.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`mt-1 p-3 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      placeholder="Tell us about your software licenses (quantity, software name, version, etc.)"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      <FiSend className="mr-2" />
                      Get a Valuation
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;
