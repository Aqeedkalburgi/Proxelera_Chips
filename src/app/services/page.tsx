'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Cpu, 
  Zap, 
  Target,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'digital-design',
      title: 'Digital Design & Verification',
      description: 'End-to-end digital design services including RTL design, verification, synthesis, and timing closure for complex ASICs and FPGAs.',
      features: [
        'RTL Design & Development',
        'Functional Verification',
        'Synthesis & Optimization',
        'Static Timing Analysis',
        'Formal Verification',
        'Testbench Development'
      ],
      technologies: ['Verilog', 'SystemVerilog', 'UVM', 'SystemC', 'Perl', 'Python'],
      icon: Cpu,
      color: 'blue'
    },
    {
      id: 'analog-design',
      title: 'Analog / Mixed-Signal Design',
      description: 'Expert analog and mixed-signal design services including PLLs, ADCs/DACs, and high-speed interface design.',
      features: [
        'Analog Circuit Design',
        'Mixed-Signal Integration',
        'PLL & Clock Design',
        'ADC/DAC Design',
        'High-Speed Interfaces',
        'Layout & Parasitic Extraction'
      ],
      technologies: ['Cadence Virtuoso', 'Spectre', 'HSPICE', 'Calibre', 'MATLAB'],
      icon: Zap,
      color: 'green'
    },
    {
      id: 'system-integration',
      title: 'System-Level & SoC Integration',
      description: 'Complete system-on-chip integration services including architecture design, IP integration, and system validation.',
      features: [
        'SoC Architecture Design',
        'IP Integration & Verification',
        'Bus Architecture',
        'Memory System Design',
        'Power Management',
        'System Validation'
      ],
      technologies: ['ARM', 'RISC-V', 'AMBA', 'DDR', 'PCIe', 'Ethernet'],
      icon: Target,
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive chip design services from concept to silicon
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white transform hover:-translate-y-2">
                <CardHeader>
                  <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Get Quote
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful chip design projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Requirements Analysis</h3>
              <p className="text-gray-600">Understanding specifications and constraints</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Architecture Design</h3>
              <p className="text-gray-600">Creating optimal system architecture</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Implementation</h3>
              <p className="text-gray-600">Design, verification, and optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Validation & Delivery</h3>
              <p className="text-gray-600">Testing and final project delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to discuss your semiconductor design requirements
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}