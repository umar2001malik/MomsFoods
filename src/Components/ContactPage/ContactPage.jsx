import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Heart } from "lucide-react";
import downloadimage from "../../assets/download.jpeg";
import { useAPI } from "../Context/AuthContext";


const ContactPage = () => {
  const {contactForm}=useAPI()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   await new Promise(resolve => setTimeout(resolve, 2000));
    
  //   setIsSubmitting(false);
  //   setIsSubmitted(true);
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     subject: "",
  //     message: ""
  //   });
    
  //   setTimeout(() => setIsSubmitted(false), 5000);
  // };



  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  // ✅ Prepare payload
  const payload = {
    full_name: formData.name,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
  };

  // ✅ Log the data before sending
  console.log("Form Submitted Data (Payload):", payload);

  try {
    // ✅ Call API from context
    const response = await contactForm(payload);

    console.log("API Response:", response);

    // ✅ Show success message
    setIsSubmitted(true);

    // ✅ Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // ✅ Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    setIsSubmitting(false);
  }
};



  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 40 
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5 + (i * 0.2)
      }
    }),
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(139, 94, 60, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const floatingShapeVariants = {
    floating: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      background: "linear-gradient(135deg, #8B5E3C 0%, #A67C52 50%, #D1A15D 100%)",
      boxShadow: "0 15px 30px -10px rgba(139, 94, 60, 0.4)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    submitting: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 1,
        repeat: Infinity
      }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const contactInfo = t('contact.contactInfo', { returnObjects: true });

  // Icon mapping function
  const getIcon = (iconName) => {
    const icons = {
      Phone,
      Mail,
      MapPin,
      Clock,
      MessageCircle,
      Heart
    };
    return icons[iconName] || MessageCircle;
  };

  // Google Maps embed URL for the specified address
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(t('contact.location.address'))}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-16 md:py-24 lg:py-32 2xl:py-40"
        style={{
          backgroundImage: `url(${downloadimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Enhanced Animated Overlays */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/70"
        />
        
        <motion.div 
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(25px)" }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute inset-0 bg-white/25 backdrop-blur-3xl"
        />

        {/* Animated Background Shapes */}
        <motion.div
          variants={floatingShapeVariants}
          animate="floating"
          className="absolute -top-20 -right-20 w-64 h-64 2xl:w-96 2xl:h-96 bg-gradient-to-br from-[#e8e4d9] to-[#f0ede5] organic-shape opacity-40"
        />
        
        <motion.div
          variants={floatingShapeVariants}
          animate="floating"
          initial={{ rotate: 180 }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-32 -left-32 w-80 h-80 2xl:w-120 2xl:h-120 bg-gradient-to-tr from-[#f0ede5] to-[#e8e4d9] organic-shape opacity-40"
        />

        <div className="container mx-auto px-6 2xl:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl 2xl:max-w-6xl mx-auto"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-serif font-bold text-[#8B5E3C] mb-6 2xl:mb-10"
            >
              {t('contact.hero.title')}
            </motion.h1>
            
            <motion.div
              variants={itemVariants}
              className="h-1 w-24 2xl:w-32 2xl:h-2 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto mb-8 2xl:mb-12 shadow-lg"
            />
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-[#6b4a2f] font-light leading-relaxed 2xl:leading-loose max-w-2xl 2xl:max-w-4xl mx-auto"
            >
              {t('contact.hero.subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information - UPDATED: Full width cards */}
      <section className="py-16 md:py-20 lg:py-24 2xl:py-32 bg-gradient-to-b from-white to-amber-50/30">
        <div className="w-full px-6 2xl:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 2xl:gap-12 w-full"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 2xl:p-12 shadow-lg border border-white/50 text-center group cursor-pointer h-full flex flex-col justify-between"
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className={`w-14 h-14 md:w-16 md:h-16 2xl:w-24 2xl:h-24 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 2xl:mb-8 shadow-lg`}
                  >
                    {React.createElement(getIcon(item.icon), { 
                      className: "w-6 h-6 md:w-8 md:h-8 2xl:w-12 2xl:h-12 text-white" 
                    })}
                  </motion.div>
                  
                  <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#8B5E3C] font-serif mb-3 md:mb-4 2xl:mb-6">
                    {item.title}
                  </h3>
                  
                  <p className="text-base md:text-lg 2xl:text-xl font-semibold text-[#6b4a2f] mb-2 2xl:mb-3">
                    {item.details}
                  </p>
                  
                  <p className="text-[#6b4a2f] leading-relaxed text-sm md:text-base 2xl:text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section - UPDATED: Full width */}
      <section className="py-16 md:py-20 lg:py-24 2xl:py-32 bg-white">
        <div className="w-full px-6 2xl:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid lg:grid-cols-2 gap-12 md:gap-16 2xl:gap-24 w-full max-w-none"
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8 2xl:space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#8B5E3C] mb-4 2xl:mb-6">
                  {t('contact.form.title')}
                </h2>
                <div className="h-1 w-16 md:w-20 2xl:w-24 2xl:h-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mb-4 md:mb-6 2xl:mb-8"></div>
                <p className="text-base md:text-lg 2xl:text-2xl text-[#6b4a2f] leading-relaxed 2xl:leading-loose">
                  {t('contact.form.description')}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center py-8 md:py-12 2xl:py-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-200"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        transition: { duration: 2, repeat: Infinity }
                      }}
                      className="w-16 h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 2xl:mb-8 shadow-lg"
                    >
                      <Heart className="w-8 h-8 md:w-10 md:h-10 2xl:w-14 2xl:h-14 text-white fill-white" />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl 2xl:text-4xl font-bold text-green-800 mb-2 2xl:mb-4">{t('contact.success.title')}</h3>
                    <p className="text-green-700 text-base md:text-lg 2xl:text-xl">{t('contact.success.message')}</p>
                    <p className="text-green-600 mt-2 2xl:mt-4 text-sm md:text-base 2xl:text-lg">{t('contact.success.details')}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6 2xl:space-y-8 bg-white/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 2xl:p-12 shadow-lg border border-white/50"
                  >
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 2xl:gap-8">
                      <motion.div whileHover={{ scale: 1.02 }} className="space-y-2 2xl:space-y-3">
                        <label className="block text-[#8B5E3C] font-semibold text-base md:text-lg 2xl:text-xl">{t('contact.form.labels.name')}</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 2xl:px-6 2xl:py-4 2xl:text-lg rounded-2xl bg-white border border-gray-300 text-[#6b4a2f] placeholder-gray-400 focus:outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-300"
                          placeholder={t('contact.form.placeholders.name')}
                        />
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} className="space-y-2 2xl:space-y-3">
                        <label className="block text-[#8B5E3C] font-semibold text-base md:text-lg 2xl:text-xl">{t('contact.form.labels.email')}</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 2xl:px-6 2xl:py-4 2xl:text-lg rounded-2xl bg-white border border-gray-300 text-[#6b4a2f] placeholder-gray-400 focus:outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-300"
                          placeholder={t('contact.form.placeholders.email')}
                        />
                      </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 2xl:gap-8">
                      <motion.div whileHover={{ scale: 1.02 }} className="space-y-2 2xl:space-y-3">
                        <label className="block text-[#8B5E3C] font-semibold text-base md:text-lg 2xl:text-xl">{t('contact.form.labels.phone')}</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 2xl:px-6 2xl:py-4 2xl:text-lg rounded-2xl bg-white border border-gray-300 text-[#6b4a2f] placeholder-gray-400 focus:outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-300"
                          placeholder={t('contact.form.placeholders.phone')}
                        />
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} className="space-y-2 2xl:space-y-3">
                        <label className="block text-[#8B5E3C] font-semibold text-base md:text-lg 2xl:text-xl">{t('contact.form.labels.subject')}</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 2xl:px-6 2xl:py-4 2xl:text-lg rounded-2xl bg-white border border-gray-300 text-[#6b4a2f] placeholder-gray-400 focus:outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-300"
                          placeholder={t('contact.form.placeholders.subject')}
                        />
                      </motion.div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} className="space-y-2 2xl:space-y-3">
                      <label className="block text-[#8B5E3C] font-semibold text-base md:text-lg 2xl:text-xl">{t('contact.form.labels.message')}</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 2xl:px-6 2xl:py-4 2xl:text-lg rounded-2xl bg-white border border-gray-300 text-[#6b4a2f] placeholder-gray-400 focus:outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all duration-300 resize-none"
                        placeholder={t('contact.form.placeholders.message')}
                      />
                    </motion.div>

                    <motion.button
                      variants={buttonVariants}
                      whileHover={isSubmitting ? "submitting" : "hover"}
                      whileTap="tap"
                      animate={isSubmitting ? "submitting" : "initial"}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] text-white font-bold py-3 md:py-4 2xl:py-6 px-8 2xl:text-xl rounded-2xl shadow-xl flex items-center justify-center space-x-2 md:space-x-3 2xl:space-x-4 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? t('contact.form.submitting') : t('contact.form.button')}
                      </span>
                      <motion.div
                        animate={isSubmitting ? { rotate: 360 } : {}}
                        transition={isSubmitting ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
                        className="relative z-10"
                      >
                        <Send className="w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6" />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8 2xl:space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#8B5E3C] mb-4 2xl:mb-6">
                  {t('contact.location.title')}
                </h2>
                <div className="h-1 w-16 md:w-20 2xl:w-24 2xl:h-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mb-4 md:mb-6 2xl:mb-8"></div>
              </div>

              {/* Google Map Embed */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl p-1 shadow-lg border border-[#8B5E3C]/20 h-80 md:h-96 2xl:h-120 overflow-hidden"
              >
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '24px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('contact.location.mapTitle')}
                  className="rounded-2xl"
                />
              </motion.div>

              {/* Address Details */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 2xl:p-12 shadow-lg border border-amber-200"
              >
                <div className="flex items-start space-x-3 md:space-x-4 2xl:space-x-6">
                  <MapPin className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 text-[#8B5E3C] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-[#8B5E3C] mb-2 2xl:mb-4">{t('contact.location.addressTitle')}</h3>
                    <p className="text-[#6b4a2f] leading-relaxed text-base md:text-lg 2xl:text-xl">
                      <strong>{t('contact.location.address')}</strong>
                    </p>
                    <p className="text-[#6b4a2f] mt-3 md:mt-4 2xl:mt-6 leading-relaxed text-sm md:text-base 2xl:text-lg">
                      {/* {t('contact.location.addressDescription')} */}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - UPDATED: Full width */}
      <section className="py-16 md:py-20 lg:py-24 2xl:py-32 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="w-full px-6 2xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 2xl:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-bold text-[#8B5E3C] mb-4 md:mb-6 2xl:mb-8">
              {t('contact.faq.title')}
            </h2>
            <div className="h-1 w-16 md:w-20 2xl:w-24 2xl:h-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#D1A15D] rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 2xl:gap-12 w-full max-w-none">
            {t('contact.faq.questions', { returnObjects: true }).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-5 md:p-6 2xl:p-8 shadow-lg border border-white/50"
              >
                <h3 className="text-lg md:text-xl 2xl:text-2xl font-bold text-[#8B5E3C] mb-2 md:mb-3 2xl:mb-4">{faq.question}</h3>
                <p className="text-[#6b4a2f] leading-relaxed text-sm md:text-base 2xl:text-lg">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .organic-shape {
          border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
        }
        
        .h-120 {
          height: 30rem;
        }
        
        .w-120 {
          width: 30rem;
        }
      `}</style>
      
      <style jsx global>{`
        @media (min-width: 2560px) {
          html {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;