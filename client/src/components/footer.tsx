import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 gradient-bg-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CV</span>
              </div>
              <span className="text-2xl font-bold gradient-text">CodeVerge</span>
            </motion.div>
            <p className="text-gray-400 max-w-md">
              Transforming businesses through innovative software solutions, AI-powered technologies, and expert development services.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Generative AI",
                "App Development", 
                "Staff Augmentation",
                "Dynamics 365"
              ].map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Careers",
                "Contact",
                "Privacy Policy"
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400">
            © {currentYear} CodeVerge. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
