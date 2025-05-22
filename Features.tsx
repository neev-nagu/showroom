import  { Clock, Award, Shield } from 'lucide-react';

const features = [
  {
    icon: <Clock className="h-8 w-8 text-red-600" />,
    title: "Exclusive Test Drives",
    description: "Experience the thrill of driving these engineering marvels on our private track."
  },
  {
    icon: <Award className="h-8 w-8 text-red-600" />,
    title: "Certified Pre-Owned",
    description: "All our vehicles undergo rigorous 150-point inspections and come with extended warranties."
  },
  {
    icon: <Shield className="h-8 w-8 text-red-600" />,
    title: "Premium Service",
    description: "Our dedicated technicians provide maintenance and support throughout your ownership."
  }
];

export default function Features() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  