'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: '5nm-vs-3nm',
      title: '5nm vs 3nm: The Next Frontier',
      author: 'Technical Team',
      date: 'March 15, 2024',
      readTime: '7 min read',
      category: 'Technology',
      excerpt: 'A comprehensive comparison of 5nm and 3nm process technologies, examining benefits, challenges, and use cases for modern semiconductor design.',
      image: 'tech-nodes',
      tags: ['Process Technology', '5nm', '3nm', 'Comparison'],
      featured: true
    },
    {
      id: 'low-power-design',
      title: 'Low Power Design Techniques',
      author: 'Design Team',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Design',
      excerpt: 'Essential techniques and methodologies for low-power chip design, from clock gating to power gating and dynamic voltage scaling strategies.',
      image: 'low-power',
      tags: ['Power Management', 'Design Techniques', 'Optimization'],
      featured: true
    },
    {
      id: 'uvm-best-practices',
      title: 'UVM Best Practices',
      author: 'Verification Team',
      date: 'March 5, 2024',
      readTime: '8 min read',
      category: 'Verification',
      excerpt: 'Industry best practices for implementing Universal Verification Methodology (UVM) in complex SoC verification environments.',
      image: 'verification',
      tags: ['UVM', 'Verification', 'Best Practices', 'Methodology'],
      featured: false
    },
    {
      id: 'automotive-chip-trends',
      title: 'Automotive Chip Trends 2024',
      author: 'Industry Insights',
      date: 'February 28, 2024',
      readTime: '9 min read',
      category: 'Automotive',
      excerpt: 'Key trends shaping the automotive semiconductor industry, from ADAS to electric vehicles and the impact on chip design requirements.',
      image: 'automotive',
      tags: ['Automotive', 'ADAS', 'Electric Vehicles', 'Trends'],
      featured: false
    },
    {
      id: 'quantum-computing-impact',
      title: 'Quantum Computing Impact',
      author: 'Research Team',
      date: 'February 20, 2024',
      readTime: '10 min read',
      category: 'Emerging Tech',
      excerpt: 'How quantum computing is poised to revolutionize semiconductor design and the implications for classical chip architectures.',
      image: 'quantum',
      tags: ['Quantum Computing', 'Future Tech', 'Research'],
      featured: false
    },
    {
      id: 'semiconductor-market-outlook',
      title: 'Semiconductor Market Outlook',
      author: 'Business Team',
      date: 'February 15, 2024',
      readTime: '12 min read',
      category: 'Market Analysis',
      excerpt: 'Analysis of current market trends, growth opportunities, and challenges in the global semiconductor industry for 2024 and beyond.',
      image: 'market',
      tags: ['Market Analysis', 'Trends', 'Business'],
      featured: false
    }
  ];

  const categories = ['All', 'Technology', 'Design', 'Verification', 'Automotive', 'Emerging Tech', 'Market Analysis'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Proxelera Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Stay updated with the latest trends and insights in semiconductor design
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Subscribe to Updates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Posts</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and comprehensive articles
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white transform hover:-translate-y-2 overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${
                    post.image === 'tech-nodes' ? 'from-blue-500 to-purple-600' :
                    post.image === 'low-power' ? 'from-green-500 to-teal-600' :
                    post.image === 'verification' ? 'from-red-500 to-orange-600' :
                    post.image === 'automotive' ? 'from-yellow-500 to-green-600' :
                    post.image === 'quantum' ? 'from-indigo-500 to-purple-600' :
                    'from-pink-500 to-rose-600'
                  } relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-20 h-12 border-2 border-white/40 rounded-lg"></div>
                        <div className="absolute -top-2 -right-2">
                          <Badge className="bg-yellow-400 text-black text-xs">Featured</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {selectedCategory === 'All' ? 'All Posts' : `${selectedCategory} Posts`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredPosts.length} articles found
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white transform hover:-translate-y-2">
                <CardHeader>
                  <div className={`h-32 bg-gradient-to-br ${
                    post.image === 'tech-nodes' ? 'from-blue-500 to-purple-600' :
                    post.image === 'low-power' ? 'from-green-500 to-teal-600' :
                    post.image === 'verification' ? 'from-red-500 to-orange-600' :
                    post.image === 'automotive' ? 'from-yellow-500 to-green-600' :
                    post.image === 'quantum' ? 'from-indigo-500 to-purple-600' :
                    'from-pink-500 to-rose-600'
                  } relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-8 border-2 border-white/40 rounded"></div>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 mb-2">{post.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 flex-wrap">
                      {post.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs mb-1">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                    <Button variant="outline" size="sm">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Never Miss an Update</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get our latest articles and insights delivered directly to your inbox
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