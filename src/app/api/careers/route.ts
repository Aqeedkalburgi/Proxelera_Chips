import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, experience, currentCompany, noticePeriod, expectedSalary, message, jobId } = body;

    // Validate required fields
    if (!name || !email || !phone || !experience) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the application (in a real app, you'd save to database)
    console.log('Career application received:', {
      name,
      email,
      phone,
      experience,
      currentCompany,
      noticePeriod,
      expectedSalary,
      message,
      jobId,
      timestamp: new Date().toISOString()
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully! We will get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing career application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}