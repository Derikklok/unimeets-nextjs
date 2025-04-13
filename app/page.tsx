import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, MessageSquare, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center">
        <Image
          src="https://images.pexels.com/photos/7683631/pexels-photo-7683631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Students collaborating"
          fill
          className="object-cover brightness-50 z-0"
          priority
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Connect, Share & Grow with Your University Community
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            The platform where university minds meet, share ideas, and create amazing things together.
          </p>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-lg py-6">
            Join Your Community <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose UniMeets?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-blue-400" />}
              title="Connect with Peers"
              description="Find and connect with students who share your interests and academic goals."
            />
            <FeatureCard 
              icon={<MessageSquare className="w-8 h-8 text-purple-400" />}
              title="Share Ideas"
              description="Exchange thoughts, projects, and get feedback from your university community."
            />
            <FeatureCard 
              icon={<Lightbulb className="w-8 h-8 text-pink-400" />}
              title="Collaborate"
              description="Turn ideas into reality by collaborating with talented peers on projects."
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://images.pexels.com/photos/7972975/pexels-photo-7972975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="University community"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Join a Thriving Community
            </h2>
            <p className="text-gray-300 mb-8">
              Connect with thousands of students from your university. Share your knowledge,
              find study partners, and collaborate on exciting projects.
            </p>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

// Feature Card Component
const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};
