'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  User,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function Insights() {
  const articles = [
    {
      id: 'future-ai-chip',
      title: 'The Future of AI Chip Design',
      author: 'Ravi Shankar R',
      role: 'CEO & Co-Founder',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      excerpt: 'Exploring how artificial intelligence is revolutionizing semiconductor design methodologies and what it means for the future of chip development.',
      content: [
        'AI-driven design automation tools are transforming how we approach complex chip architectures',
        'Machine learning algorithms optimize power consumption and performance parameters',
        'Neural networks assist in verification and validation processes',
        'The convergence of AI and hardware design presents new opportunities and challenges'
      ],
      image: 'ai-chip',
      featured: true
    },
    {
      id: 'advanced-node-challenges',
      title: 'Advanced Node Design Challenges',
      author: 'V Raghavendra Mohan',
      role: 'CTO & Co-Founder',
      date: 'March 10, 2024',
      readTime: '8 min read',
      category: 'Process Technology',
      excerpt: 'Key considerations and strategies for successful chip design at advanced process nodes below 7nm, including power optimization and signal integrity.',
      content: [
        'Design rules and constraints become increasingly complex at advanced nodes',
        'Power management requires innovative approaches to maintain efficiency',
        'Signal integrity challenges demand new verification methodologies',
        'Cost considerations and yield optimization strategies'
      ],
      image: 'advanced-node',
      featured: true
    },
    {
      id: 'verification-strategies',
      title: 'Modern Verification Strategies',
      author: 'Guruprasad Katte',
      role: 'COO & Co-Founder',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Design Verification',
      excerpt: 'Modern verification methodologies for complex SoCs, including UVM-based approaches and formal verification techniques for first-pass silicon success.',
      content: [
        'UVM methodology adoption across industry standards',
        'Formal verification for critical path analysis',
        'Coverage-driven verification approaches',
        'Emulation and prototyping strategies'
      ],
      image: 'verification',
      featured: true
    },
    {
      id: 'low-power-techniques',
      title: 'Low Power Design Techniques',
      author: 'Technical Team',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'Power Management',
      excerpt: 'Essential techniques and methodologies for low-power chip design, from clock gating to power gating and dynamic voltage scaling strategies.',
      content: [
        'Clock gating and power gating implementation',
        'Dynamic voltage and frequency scaling',
        'Multi-threshold CMOS design approaches',
        'Power-aware verification methodologies'
      ],
      image: 'low-power',
      featured: false
    },
    {
      id: 'automotive-trends-2024',
      title: 'Automotive Chip Trends 2024',
      author: 'Industry Insights',
      date: 'February 20, 2024',
      readTime: '9 min read',
      category: 'Automotive',
      excerpt: 'Key trends shaping the automotive semiconductor industry, from ADAS to electric vehicles and the impact on chip design requirements.',
      content: [
        'ADAS processor requirements and capabilities',
        'Electric vehicle power management solutions',
        'Automotive safety and security standards',
        'Connectivity and infotainment chip developments'
      ],
      image: 'automotive',
      featured: false
    },
    {
      id: 'quantum-impact',
      title: 'Quantum Computing Impact',
      author: 'Research Team',
      date: 'February 15, 2024',
      readTime: '10 min read',
      category: 'Emerging Technologies',
      excerpt: 'How quantum computing is poised to revolutionize semiconductor design and the implications for classical chip architectures.',
      content: [
        'Quantum-resistant classical chip design',
        'Hybrid quantum-classical computing approaches',
        'New design paradigms for quantum algorithms',
        'Timeline for practical quantum computing applications'
      ],
      image: 'quantum',
      featured: false
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Process Technology',
    'Design Verification',
    'Power Management',
    'Automotive',
    'Emerging Technologies'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Thought leadership and perspectives from our industry experts
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Subscribe to Newsletter
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep dives into emerging trends and technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => article.featured).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white transform hover:-translate-y-2">
                <CardHeader>
                  <div className={`h-48 bg-gradient-to-br ${
                    article.image === 'ai-chip' ? 'from-blue-500 to-purple-600' :
                    article.image === 'advanced-node' ? 'from-green-500 to-teal-600' :
                    article.image === 'verification' ? 'from-red-500 to-orange-600' :
                    article.image === 'low-power' ? 'from-yellow-500 to-green-600' :
                    article.image === 'automotive' ? 'from-indigo-500 to-purple-600' :
                    'from-pink-500 to-rose-600'
                  } relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-white/40 rounded-lg"></div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-black">Featured</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2">{article.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span className="font-medium">{article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{article.role}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">All Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our complete collection of technical insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white transform hover:-translate-y-2">
                <CardHeader>
                  <div className={`h-32 bg-gradient-to-br ${
                    article.image === 'ai-chip' ? 'from-blue-500 to-purple-600' :
                    article.image === 'advanced-node' ? 'from-green-500 to-teal-600' :
                    article.image === 'verification' ? 'from-red-500 to-orange-600' :
                    article.image === 'low-power' ? 'from-yellow-500 to-green-600' :
                    article.image === 'automotive' ? 'from-indigo-500 to-purple-600' :
                    'from-pink-500 to-rose-600'
                  } relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border-2 border-white/40 rounded-lg"></div>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 mb-2">{article.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <User className="w-4 h-4 mr-2" />
                    <span>{article.author}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get the latest insights and trends delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Subscribe to Newsletter
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/insights">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Browse All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}