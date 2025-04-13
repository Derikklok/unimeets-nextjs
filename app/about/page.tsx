import Image from 'next/image';
import { Users, Target, Shield } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
          alt="University campus"
          fill
          className="object-cover brightness-50 z-0"
          priority
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About UniMeets
          </h1>
          <p className="text-xl text-gray-200">
            Building bridges between university minds
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              UniMeets was founded with a simple yet powerful vision: to create a digital space where university students can connect, collaborate, and grow together. We believe that the best ideas emerge when bright minds come together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <ValueCard
              icon={<Users className="w-8 h-8 text-blue-400" />}
              title="Community First"
              description="We prioritize building a supportive and inclusive community where every student feels welcome."
            />
            <ValueCard
              icon={<Target className="w-8 h-8 text-purple-400" />}
              title="Innovation Driven"
              description="We encourage creative thinking and provide tools for students to bring their ideas to life."
            />
            <ValueCard
              icon={<Shield className="w-8 h-8 text-pink-400" />}
              title="Safe & Secure"
              description="Your privacy and security are our top priorities, ensuring a safe environment for all."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard number="10K+" label="Active Users" />
            <StatCard number="50+" label="Universities" />
            <StatCard number="1000+" label="Projects Created" />
          </div>
        </div>
      </section>
    </main>
  );
}

const ValueCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const TeamCard = ({ image, name, role }: {
  image: string;
  name: string;
  role: string;
}) => (
  <div className="text-center">
    <div className="relative w-48 h-48 mx-auto mb-4">
      <Image
        src={image}
        alt={name}
        fill
        className="rounded-full object-cover"
      />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
    <p className="text-gray-400">{role}</p>
  </div>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="p-6">
    <div className="text-4xl font-bold text-blue-400 mb-2">{number}</div>
    <div className="text-gray-300">{label}</div>
  </div>
);

const teamMembers = [
  {
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    name: "Sarah Johnson",
    role: "Founder & CEO"
  },
  {
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    name: "Mike Chen",
    role: "Head of Product"
  },
  {
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
    name: "Emma Davis",
    role: "Community Lead"
  }
];