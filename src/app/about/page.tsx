'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Trophy, 
  Users, 
  Rocket, 
  Shield,
  Award,
  TrendingUp,
  Globe,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const metrics = [
    {
      id: 'experience',
      title: '20+ Years Experience',
      description: 'Proven track record in chip design excellence',
      icon: Trophy,
      color: 'blue'
    },
    {
      id: 'team',
      title: '200+ Combined Team Experience',
      description: 'Industry veterans and domain experts',
      icon: Users,
      color: 'green'
    },
    {
      id: 'projects',
      title: '75+ Projects Delivered',
      description: 'Successful tape-outs and deployments',
      icon: Rocket,
      color: 'purple'
    },
    {
      id: 'quality',
      title: 'ISO Certified Processes',
      description: 'Quality and reliability assurance',
      icon: Shield,
      color: 'orange'
    },
    {
      id: 'clients',
      title: '15+ Fortune 500 Clients',
      description: 'Trusted by industry leaders',
      icon: Award,
      color: 'red'
    },
    {
      id: 'success',
      title: '98% First Pass Success',
      description: 'Exceptional design quality',
      icon: TrendingUp,
      color: 'teal'
    },
    {
      id: 'support',
      title: '24/7 Global Support',
      description: 'Round-the-clock assistance',
      icon: Globe,
      color: 'indigo'
    },
    {
      id: 'innovation',
      title: '50+ Patents Filed',
      description: 'Innovation and thought leadership',
      icon: Award,
      color: 'pink'
    }
  ];

  const leadership = [
    {
      id: 'ravi',
      name: 'Ravi Shankar R',
      title: 'Co-Founder & CEO',
      bio: '20+ years in VLSI design and semiconductor industry leadership. Proven track record in building successful design teams and delivering complex chip solutions.',
      expertise: ['VLSI Design', 'Team Leadership', 'Business Strategy', 'Client Relations']
    },
    {
      id: 'raghavendra',
      name: 'V Raghavendra Mohan',
      title: 'Co-Founder & CTO',
      bio: 'Expert in analog design and mixed-signal chip architecture. Deep technical knowledge with extensive experience in delivering innovative analog solutions.',
      expertise: ['Analog Design', 'Mixed-Signal', 'Circuit Architecture', 'Technical Innovation']
    },
    {
      id: 'guruprasad',
      name: 'Guruprasad Katte',
      title: 'Co-Founder & COO',
      bio: 'Specialist in design verification and project delivery excellence. Expertise in ensuring first-pass silicon success and efficient project management.',
      expertise: ['Design Verification', 'Project Management', 'Quality Assurance', 'Process Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Proxelera</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Two decades of excellence in semiconductor design engineering, delivering innovative chip solutions globally
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Meet Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Proxelera</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our numbers speak for themselves - two decades of delivering excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric) => (
              <Card key={metric.id} className="text-center border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-${metric.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <metric.icon className={`w-8 h-8 text-${metric.color}-600`} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">{metric.title}</h3>
                  <p className="text-gray-600">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-16" />

          {/* Additional Metrics */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">500M+</div>
                <p className="text-gray-600 text-sm">Units Shipped</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
                <p className="text-gray-600 text-sm">Technology Nodes</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">30+</div>
                <p className="text-gray-600 text-sm">Countries Served</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
                <p className="text-gray-600 text-sm">Design Engineers</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">25+</div>
                <p className="text-gray-600 text-sm">Patent Families</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">99.9%</div>
                <p className="text-gray-600 text-sm">On-Time Delivery</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the founders behind Proxelera's success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <Card key={leader.id} className="text-center border-0 shadow-sm">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-1">{leader.name}</CardTitle>
                  <Badge variant="secondary" className="mb-4">{leader.title}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{leader.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {leader.expertise.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Connect
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2003, Proxelera emerged from a vision to bridge the gap between 
                complex semiconductor requirements and innovative design solutions. What started as a small 
                team of passionate engineers has grown into a trusted partner for global technology leaders.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey has been marked by continuous innovation, adapting to new technologies 
                while maintaining our core commitment to quality, reliability, and customer success. 
                Today, we stand at the forefront of semiconductor design, enabling breakthroughs 
                in AI, automotive, consumer electronics, and beyond.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the world's most trusted partner in semiconductor design engineering, 
                delivering innovative solutions that push the boundaries of what's possible while maintaining 
                unwavering commitment to quality and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner with Excellence?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our growing list of satisfied clients who trust Proxelera for their semiconductor design needs
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