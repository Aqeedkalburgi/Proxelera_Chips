'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Handshake,
  Award,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Building,
  Cpu,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export default function Partners() {
  const strategicPartners = [
    {
      id: 'eda-tools',
      name: 'EDA Tool Partners',
      description: 'Strategic partnerships with leading EDA tool providers including Cadence, Synopsys, and Mentor Graphics to ensure access to latest design tools and methodologies.',
      partners: ['Cadence Design Systems', 'Synopsys', 'Siemens EDA', 'Ansys'],
      category: 'Technology',
      icon: Cpu
    },
    {
      id: 'foundry-partners',
      name: 'Foundry Partners',
      description: 'Close collaboration with major foundries including TSMC, Samsung, and GlobalFoundries for advanced process technologies and manufacturing support.',
      partners: ['TSMC', 'Samsung Foundry', 'GlobalFoundries', 'UMC'],
      category: 'Manufacturing',
      icon: Zap
    },
    {
      id: 'ip-providers',
      name: 'IP Providers',
      description: 'Partnerships with leading IP providers to offer comprehensive solutions for complex SoC designs and system integration.',
      partners: ['ARM', 'RISC-V International', 'CEVA', 'Synopsys DesignWare'],
      category: 'Intellectual Property',
      icon: Building
    }
  ];

  const industryMemberships = [
    {
      id: 'ieee',
      name: 'IEEE Membership',
      description: 'Active members of IEEE and various technical committees contributing to industry standards and best practices.',
      benefits: ['Technical Committee Participation', 'Standards Development', 'Industry Networking', 'Access to Research'],
      icon: Award,
      level: 'Global'
    },
    {
      id: 'vsi-alliance',
      name: 'VSI Alliance',
      description: 'Member of VSI Alliance promoting standardization and interoperability in the semiconductor industry.',
      benefits: ['Standardization Work', 'Interoperability Testing', 'Industry Collaboration', 'Technical Resources'],
      icon: Globe,
      level: 'Industry'
    },
    {
      id: 'isa-membership',
      name: 'ISA Membership',
      description: 'Active participation in India Semiconductor Association contributing to industry growth and policy advocacy.',
      benefits: ['Policy Advocacy', 'Industry Growth', 'Skill Development', 'Market Intelligence'],
      icon: Users,
      level: 'Regional'
    }
  ];

  const clientSuccess = [
    {
      id: 'fortune-500',
      title: '15+ Fortune 500 Clients',
      description: 'Trusted by industry leaders worldwide',
      icon: '🏆'
    },
    {
      id: 'global-reach',
      title: '30+ Countries Served',
      description: 'Global presence and delivery capability',
      icon: '🌍'
    },
    {
      id: 'long-term',
      title: '10+ Year Partnerships',
      description: 'Enduring client relationships',
      icon: '🤝'
    },
    {
      id: 'projects-delivered',
      title: '75+ Projects Delivered',
      description: 'Proven track record of success',
      icon: '✅'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partnerships & Memberships</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Collaborating with industry leaders to drive innovation and excellence
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Strategic Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with leading technology providers to deliver comprehensive solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {strategicPartners.map((partner) => (
              <Card key={partner.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <partner.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2">{partner.name}</CardTitle>
                  <Badge variant="secondary" className="mb-4">{partner.category}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {partner.description}
                  </CardDescription>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Partners:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {partner.partners.map((partnerName, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded text-center">
                          <div className="w-12 h-12 bg-gray-200 rounded mx-auto mb-2"></div>
                          <span className="text-sm text-gray-700">{partnerName}</span>
                        </div>
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

      {/* Industry Memberships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industry Memberships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Active participation in leading industry organizations and associations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industryMemberships.map((membership) => (
              <Card key={membership.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <membership.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2">{membership.name}</CardTitle>
                  <Badge variant="outline" className="mb-4">{membership.level}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {membership.description}
                  </CardDescription>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Membership Benefits:</h4>
                    <ul className="space-y-2">
                      {membership.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
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

      {/* Client Success */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our success is measured by the success of our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientSuccess.map((metric) => (
              <Card key={metric.id} className="text-center border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{metric.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{metric.title}</h3>
                  <p className="text-gray-600">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Trusted Partners</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Companies that choose Proxelera for their semiconductor design needs
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-200 rounded mx-auto mb-3"></div>
                <div className="text-sm text-gray-600 text-center">Partner {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our ecosystem of innovation and excellence in semiconductor design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Discuss Partnership
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}