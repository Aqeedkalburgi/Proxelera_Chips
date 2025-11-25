'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin,
  DollarSign,
  Clock,
  Users,
  Briefcase,
  Send,
  CheckCircle,
  Upload,
  ArrowRight,
  Building,
  GraduationCap,
  Award
} from 'lucide-react';
import Link from 'next/link';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  posted: string;
}

const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior RTL Design Engineer',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '5-8 years',
    salary: '₹20-30 LPA',
    description: 'We are looking for an experienced RTL Design Engineer to join our dynamic team and work on cutting-edge chip design projects.',
    requirements: [
      'B.Tech/M.Tech in ECE/EEE with 5-8 years of experience',
      'Strong expertise in Verilog/SystemVerilog RTL design',
      'Experience with ASIC design flow and methodology',
      'Knowledge of synthesis, STA, and timing closure',
      'Experience with low-power design techniques'
    ],
    responsibilities: [
      'Design and develop RTL for complex digital blocks',
      'Work with architecture team to understand specifications',
      'Perform RTL synthesis and timing analysis',
      'Collaborate with verification team for testbench development',
      'Participate in design reviews and documentation'
    ],
    posted: '2 days ago'
  },
  {
    id: '2',
    title: 'Design Verification Engineer',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '3-6 years',
    salary: '₹15-25 LPA',
    description: 'Join our verification team to ensure the quality and reliability of complex semiconductor designs through comprehensive testing methodologies.',
    requirements: [
      'B.Tech/M.Tech in ECE/EEE with 3-6 years of experience',
      'Strong experience with SystemVerilog and UVM',
      'Knowledge of verification methodologies and testbench development',
      'Experience with functional coverage and constrained random testing',
      'Familiarity with simulation tools like VCS/Questa'
    ],
    responsibilities: [
      'Develop comprehensive testplans and testbenches',
      'Implement verification using UVM methodology',
      'Create and execute test cases for functional verification',
      'Analyze coverage gaps and improve test effectiveness',
      'Work with design team to debug and resolve issues'
    ],
    posted: '3 days ago'
  },
  {
    id: '3',
    title: 'Analog/Mixed-Signal Design Engineer',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '4-7 years',
    salary: '₹18-28 LPA',
    description: 'We are seeking an experienced Analog/Mixed-Signal Design Engineer to work on innovative analog and mixed-signal IP development.',
    requirements: [
      'B.Tech/M.Tech in ECE/EEE with 4-7 years of experience',
      'Strong background in analog circuit design',
      'Experience with CAD tools like Cadence Virtuoso',
      'Knowledge of PLLs, ADCs, DACs, and SerDes',
      'Understanding of device physics and layout techniques'
    ],
    responsibilities: [
      'Design and simulate analog/mixed-signal circuits',
      'Perform layout and parasitic extraction',
      'Conduct circuit characterization and validation',
      'Collaborate with digital team for mixed-signal integration',
      'Document design specifications and test results'
    ],
    posted: '1 week ago'
  },
  {
    id: '4',
    title: 'Physical Design Engineer',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '₹15-22 LPA',
    description: 'Join our physical design team to work on floorplanning, place and route, and timing closure for complex semiconductor designs.',
    requirements: [
      'B.Tech/M.Tech in ECE/EEE with 3-5 years of experience',
      'Experience with physical design tools (Innovus/ICC)',
      'Knowledge of synthesis, STA, and timing closure',
      'Understanding of DFT and physical verification',
      'Familiarity with scripting languages like Perl/Tcl'
    ],
    responsibilities: [
      'Perform floorplanning and placement of digital blocks',
      'Execute routing and optimization for timing closure',
      'Run physical verification checks (DRC/LVS)',
      'Work with synthesis team for design optimization',
      'Generate GDSII and tape-out ready deliverables'
    ],
    posted: '4 days ago'
  },
  {
    id: '5',
    title: 'SoC Integration Engineer',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '6-10 years',
    salary: '₹25-35 LPA',
    description: 'Lead the integration of complex System-on-Chip designs, ensuring seamless functionality across all IP blocks and subsystems.',
    requirements: [
      'B.Tech/M.Tech in ECE/EEE with 6-10 years of experience',
      'Strong background in SoC architecture and integration',
      'Experience with bus protocols (AXI, AHB, APB)',
      'Knowledge of memory controllers and peripherals',
      'Understanding of system-level verification and validation'
    ],
    responsibilities: [
      'Define SoC architecture and micro-architecture',
      'Integrate various IP blocks and subsystems',
      'Develop system-level testplans and verification',
      'Perform system bring-up and validation',
      'Collaborate with software team for driver development'
    ],
    posted: '5 days ago'
  },
  {
    id: '6',
    title: 'Application Engineer',
    department: 'Customer Support',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹12-18 LPA',
    description: 'Provide technical support to customers and help them successfully implement our semiconductor IP and solutions.',
    requirements: [
      'B.Tech/M.Tech in ECE/EEE with 2-4 years of experience',
      'Strong technical background in semiconductor design',
      'Excellent communication and problem-solving skills',
      'Experience with customer interaction and support',
      'Knowledge of design tools and methodologies'
    ],
    responsibilities: [
      'Provide technical support to customers',
      'Conduct training sessions and workshops',
      'Develop application notes and technical documentation',
      'Work with R&D team to resolve customer issues',
      'Assist in product demonstrations and evaluations'
    ],
    posted: '1 week ago'
  },
  {
    id: '7',
    title: 'Sales Engineer',
    department: 'Sales',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '₹15-25 LPA + incentives',
    description: 'Drive business growth by identifying new opportunities and helping customers understand the value of our semiconductor solutions.',
    requirements: [
      'B.Tech/M.Tech in ECE/EEE with 3-5 years of experience',
      'Strong technical background in semiconductor industry',
      'Excellent communication and presentation skills',
      'Experience with B2B sales and customer relationship management',
      'Understanding of semiconductor design and verification'
    ],
    responsibilities: [
      'Identify and qualify new sales opportunities',
      'Present technical solutions to customers',
      'Develop and maintain customer relationships',
      'Work with application engineers for technical support',
      'Achieve sales targets and revenue goals'
    ],
    posted: '3 days ago'
  },
  {
    id: '8',
    title: 'Firmware Engineer',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '2-5 years',
    salary: '₹12-20 LPA',
    description: 'Develop firmware and low-level software for embedded systems and semiconductor devices.',
    requirements: [
      'B.Tech/M.Tech in ECE/EEE/CS with 2-5 years of experience',
      'Strong programming skills in C/C++',
      'Experience with embedded systems and microcontrollers',
      'Knowledge of hardware-software integration',
      'Understanding of debugging tools and techniques'
    ],
    responsibilities: [
      'Develop firmware for embedded systems',
      'Write device drivers and low-level software',
      'Debug hardware-software integration issues',
      'Optimize code for performance and memory',
      'Collaborate with hardware team for system integration'
    ],
    posted: '6 days ago'
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    noticePeriod: '',
    expectedSalary: '',
    message: '',
    jobId: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        currentCompany: '',
        noticePeriod: '',
        expectedSalary: '',
        message: '',
        jobId: selectedJob?.id || ''
      });
      setResumeFile(null);
      setSelectedJob(null);
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const applyForJob = (job: Job) => {
    setSelectedJob(job);
    setFormData({
      ...formData,
      jobId: job.id
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Build your career with Proxelera and work on cutting-edge semiconductor projects that shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-100">Open Positions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-100">Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-100">Global Offices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Join Proxelera?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a dynamic work environment with opportunities for growth, innovation, and impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Cutting-Edge Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work on the latest semiconductor technologies and contribute to innovative projects that push the boundaries of what's possible.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Continuous Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access to training programs, workshops, and conferences to enhance your skills and stay current with industry trends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Career Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Clear career progression paths, mentorship programs, and opportunities to take on leadership roles in exciting projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for your skills and experience.
            </p>
          </div>
          
          <div className="grid gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.posted}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </div>
                    
                    <div className="flex gap-3 mt-4 lg:mt-0">
                      <Button 
                        variant="outline"
                        onClick={() => setSelectedJob(job)}
                        className="whitespace-nowrap"
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button 
                        onClick={() => applyForJob(job)}
                        className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap"
                      >
                        Apply Now
                        <Send className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      {selectedJob && (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                <Briefcase className="w-4 h-4 mr-2" />
                {selectedJob.title}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Apply for This Position</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join our team of semiconductor experts. Fill out the form below and upload your resume to take the next step in your career.
              </p>
            </div>

            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-slate-700 text-white rounded-t-xl">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  Application Form
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Please provide your details and upload your resume to apply for this position.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information Section */}
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-bold text-sm">1</span>
                        </div>
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                          <Input 
                            name="name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            required 
                            placeholder="John Doe" 
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                          <Input 
                            name="email" 
                            type="email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                            placeholder="john.doe@email.com" 
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Professional Information Section */}
                    <div className="border-l-4 border-green-600 pl-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-green-600 font-bold text-sm">2</span>
                        </div>
                        Professional Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                          <Input 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleInputChange}
                            required 
                            placeholder="+91 98765 43210" 
                            className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Total Experience *</label>
                          <Input 
                            name="experience" 
                            value={formData.experience}
                            onChange={handleInputChange}
                            required 
                            placeholder="e.g., 5 years" 
                            className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Current Company</label>
                          <Input 
                            name="currentCompany" 
                            value={formData.currentCompany}
                            onChange={handleInputChange}
                            placeholder="Current company name" 
                            className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Notice Period</label>
                          <Input 
                            name="noticePeriod" 
                            value={formData.noticePeriod}
                            onChange={handleInputChange}
                            placeholder="e.g., 30 days" 
                            className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                          />
                        </div>
                      </div>

                      <div className="mt-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Salary</label>
                        <Input 
                          name="expectedSalary" 
                          value={formData.expectedSalary}
                          onChange={handleInputChange}
                          placeholder="e.g., ₹20 LPA" 
                          className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    {/* Resume Upload Section */}
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-purple-600 font-bold text-sm">3</span>
                        </div>
                        Resume Upload
                      </h3>
                      
                      <div className="relative">
                        <div className="border-2 border-dashed border-purple-300 bg-purple-50 rounded-xl p-8 text-center hover:border-purple-400 hover:bg-purple-100 transition-all duration-300">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                            className="hidden"
                            id="resume-upload"
                          />
                          <label htmlFor="resume-upload" className="cursor-pointer">
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <Upload className="w-8 h-8 text-purple-600" />
                              </div>
                              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                                {resumeFile ? resumeFile.name : 'Upload Your Resume'}
                              </h4>
                              <p className="text-gray-600 mb-4">
                                {resumeFile ? 'Click to change file' : 'Click to browse or drag and drop'}
                              </p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                  PDF, DOC, DOCX
                                </div>
                                <div className="flex items-center">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                  MAX. 5MB
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                        {resumeFile && (
                          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                  <p className="font-semibold text-green-900">{resumeFile.name}</p>
                                  <p className="text-sm text-green-700">
                                    {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => setResumeFile(null)}
                                className="text-red-500 hover:text-red-700 transition-colors"
                              >
                                ×
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Cover Letter Section */}
                    <div className="border-l-4 border-orange-600 pl-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-orange-600 font-bold text-sm">4</span>
                        </div>
                        Cover Letter (Optional)
                      </h3>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us why you're interested in this role</label>
                        <Textarea 
                          name="message" 
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Share your motivation for applying and why you'd be a great fit for this role..."
                          rows={6}
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          This helps us understand your motivation and fit for the role better.
                        </p>
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white h-14 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            Submitting Application...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setSelectedJob(null)}
                        className="h-14 px-8 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Application Submitted Successfully!</h3>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                      Thank you for your interest in joining Proxelera. Our team will review your application and get back to you within 5-7 business days.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        onClick={() => {
                          setIsSubmitted(false);
                          setSelectedJob(null);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
                      >
                        Apply for Another Position
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <Link href="/contact">
                        <Button variant="outline" className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 text-lg font-semibold">
                          Contact HR Team
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Job Details Modal */}
      {selectedJob && !isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            <div className="inline-block w-full max-w-4xl my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <div className="bg-white px-6 pt-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{selectedJob.title}</h3>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="secondary">{selectedJob.department}</Badge>
                  <Badge variant="outline">{selectedJob.type}</Badge>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {selectedJob.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {selectedJob.experience}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {selectedJob.salary}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedJob.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-600">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button 
                    onClick={() => applyForJob(selectedJob)}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Apply for this Position
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setSelectedJob(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't see the right fit? We're always looking for talented individuals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@proxelera.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
            >
              Send General Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Contact HR Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}