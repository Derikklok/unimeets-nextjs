import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-900 ">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          alt="Contact Us"
          fill
          className="object-cover brightness-50 z-0"
          priority
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-200">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <ContactCard
              icon={<Mail className="w-8 h-8 text-blue-400" />}
              title="Email Us"
              detail="support@unimeets.com"
              description="We'll respond within 24 hours"
            />
            <ContactCard
              icon={<Phone className="w-8 h-8 text-purple-400" />}
              title="Call Us"
              detail="+1 (555) 123-4567"
              description="Monday to Friday, 9am-5pm"
            />
            <ContactCard
              icon={<MapPin className="w-8 h-8 text-pink-400" />}
              title="Visit Us"
              detail="123 University Ave"
              description="Silicon Valley, CA 94025"
            />
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Connect With Us</h2>
          <div className="flex justify-center gap-8">
            <SocialLink icon={<Github />} label="GitHub" />
            <SocialLink icon={<Linkedin />} label="LinkedIn" />
            <SocialLink icon={<Twitter />} label="Twitter" />
          </div>
        </div>
      </section>

      {/* Map Image Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg"
              alt="Our Location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Our Campus</h3>
                <p className="text-gray-200">Visit us at our main office</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const ContactCard = ({ icon, title, detail, description }: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  description: string;
}) => (
  <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all text-center">
    <div className="inline-flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-blue-400 mb-2">{detail}</p>
    <p className="text-gray-400">{description}</p>
  </div>
);

const SocialLink = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
    <span className="p-3 rounded-full border border-gray-700 group-hover:border-blue-500 transition-colors">
      {icon}
    </span>
    <span className="font-medium">{label}</span>
    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </a>
);