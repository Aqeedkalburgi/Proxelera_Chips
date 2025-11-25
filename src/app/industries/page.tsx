'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cpu, 
  Zap, 
  Car, 
  Battery, 
  Factory,
  Target,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function Industries() {
  const industries = [
    {
      id: 'semiconductors',
      title: 'Semiconductors',
      description: 'Advanced chip design solutions for semiconductor manufacturers, from concept to silicon, enabling next-generation technology.',
      applications: [
        'ASIC Design & Development',
        'Foundry Partnerships',
        'IP Development',
        'Process Technology Consulting',
        'Yield Optimization'
      ],
      clients: ['Leading Foundries', 'IDM Companies', 'Fabless Companies'],
      icon: Cpu,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'consumer-electronics',
      title: 'Consumer Electronics',
      description: 'Powering the next generation of smart devices, wearables, and consumer technology with innovative chip solutions.',
      applications: [
        'Mobile Device Chips',
        'Wearable Technology',
        'Smart Home Devices',
        'Audio/Video Processing',
        'IoT Solutions'
      ],
      clients: ['Consumer Brands', 'Smart Device Manufacturers', 'IoT Companies'],
      icon: Zap,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'automotive',
      title: 'Automotive',
      description: 'Driving innovation in automotive electronics with ADAS, infotainment, and electric vehicle chip solutions.',
      applications: [
        'Advanced Driver Assistance',
        'Infotainment Systems',
        'Electric Vehicle Controllers',
        'Power Management ICs',
        'Sensor Fusion'
      ],
      clients: ['Automotive OEMs', 'Tier 1 Suppliers', 'EV Companies'],
      icon: Car,
      gradient: 'from-red-500 to-orange-600'
    },
    {
      id: 'energy-utilities',
      title: 'Energy & Utilities',
      description: 'Enabling smart grid solutions and renewable energy systems with efficient power management and control chips.',
      applications: [
        'Smart Grid Controllers',
        'Renewable Energy Systems',
        'Power Management ICs',
        'Energy Monitoring',
        'Grid Automation'
      ],
      clients: ['Energy Companies', 'Utility Providers', 'Green Tech Firms'],
      icon: Battery,
      gradient: 'from-yellow-500 to-green-600'
    },
    {
      id: 'industrial-iot',
      title: 'Industrial IoT',
      description: 'Powering Industry 4.0 with connected sensor networks, automation controllers, and edge computing solutions.',
      applications: [
        'Industrial Automation',
        'Edge Computing',
        'Sensor Networks',
        'Machine Learning Chips',
        'Real-time Control Systems'
      ],
      clients: ['Industrial Companies', 'Automation Providers', 'IIoT Platforms'],
      icon: Factory,
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'healthcare-tech',
      title: 'Healthcare Tech',
      description: 'Enabling medical devices and diagnostic equipment with reliable, high-precision semiconductor solutions.',
      applications: [
        'Medical Imaging',
        'Diagnostic Equipment',
        'Wearable Health Devices',
        'Patient Monitoring',
        'Lab-on-Chip Solutions'
      ],
      clients: ['Medical Device Companies', 'Healthcare Providers', 'Biotech Firms'],
      icon: Target,
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Partnering with leaders across multiple technology sectors to deliver innovative chip solutions
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Discuss Your Industry
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Card key={industry.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white transform hover:-translate-y-2">
                <div className={`h-48 bg-gradient-to-br ${industry.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 border-2 border-white/40 rounded-lg"></div>
                      <div className="absolute inset-2 flex items-center justify-center">
                        <industry.icon className="w-12 h-12 text-white opacity-80" />
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {industry.applications.map((app, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Client Types:</h4>
                    <div className="flex flex-wrap gap-1">
                      {industry.clients.map((client, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {client}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Cross-Industry Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans multiple domains with proven success across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Multi-Process Support</h3>
              <p className="text-gray-600">7nm to 28nm process nodes</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Global Delivery</h3>
              <p className="text-gray-600">Worldwide project deployment</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">Industry standard certifications</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our semiconductor expertise can drive innovation in your sector
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start the Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}