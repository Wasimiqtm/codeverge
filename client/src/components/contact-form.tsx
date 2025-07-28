import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
// Custom schema for validation
const contactSchema = z.object({
  name: z.string().min(2, "Full Name is required"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().min(2, "Company is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters")
});
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    }
  });

  const submitContact = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    submitContact.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-heading-1 gradient-text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-body-large text-muted max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our innovative solutions can drive your success.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="gradient-bg-dark rounded-2xl p-8">
              <h3 className="text-heading-3 gradient-text-primary mb-6">Let's Start a Conversation</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 mr-4">
                    <Mail className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-medium">contact@codeverge.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 mr-4">
                    <Phone className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 mr-4">
                    <MapPin className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400">Address</p>
                    <p className="text-white font-medium">123 Tech Street, Silicon Valley, CA 94000</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="gradient-bg-dark rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Facebook, href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-blue-500/20 hover:bg-blue-500/40 backdrop-blur-sm rounded-lg p-3 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="text-blue-400 w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            className="gradient-bg-dark rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-slate-800 border-slate-600 text-white focus:border-blue-400 w-full px-3 py-2 md:px-4 md:py-3"
                            placeholder="Your full name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="bg-slate-800 border-slate-600 text-white focus:border-blue-400 w-full px-3 py-2 md:px-4 md:py-3"
                            placeholder="your.email@example.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Company</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-slate-800 border-slate-600 text-white focus:border-blue-400 w-full px-3 py-2 md:px-4 md:py-3"
                          placeholder="Your company name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Service Interest</FormLabel>
                        <FormControl>
                        <div className="relative">
                          <select
                            {...field}
                            className="bg-slate-800 border border-slate-600 w-full px-3 py-2 md:px-4 md:py-3 text-white focus:border-blue-400 placeholder-gray-400 rounded-lg pr-10 appearance-none"
                            style={{ color: field.value ? '#fff' : '#9FA2AB' }}
                          >
                            <option value="" disabled hidden style={{ color: '#9FA2AB' }}>
                              Select a service
                            </option>
                            <option value="ai" style={{ color: '#fff' }}>Generative AI</option>
                            <option value="web" style={{ color: '#fff' }}>Web Development</option>
                            <option value="app" style={{ color: '#fff' }}>App Development</option>
                            <option value="pentest" style={{ color: '#fff' }}>PEN Testing</option>
                            <option value="graphic" style={{ color: '#fff' }}>Graphic Designing</option>
                            <option value="uiux" style={{ color: '#fff' }}>UI/UX Designing</option>
                            <option value="staff" style={{ color: '#fff' }}>Staff Augmentation</option>
                            <option value="d365" style={{ color: '#fff' }}>Dynamics 365</option>
                          </select>
                          {/* Custom caret icon absolutely positioned to match right padding */}
                          <svg className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                        </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={6}
                          className="bg-slate-800 border-slate-600 text-white focus:border-blue-400 resize-none w-full px-3 py-2 md:px-4 md:py-3"
                          placeholder="Tell us about your project..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={submitContact.isPending}
                    className="w-full text-white py-3 md:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl border-2 border-[#9FA2AB] bg-transparent hover:bg-[#232B36] hover:border-white transition-all duration-300"
                    style={{ borderColor: '#9FA2AB' }}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {submitContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
