import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Format the email content
    const emailContent = `
      <h2>New Bridal Quote Request</h2>
      
      <h3>Personal Details</h3>
      <p><strong>Email:</strong> ${formData.email}</p>
      
      <h3>Bridal Information</h3>
      <p><strong>Number of Brides:</strong> ${formData.numberOfBrides}</p>
      <p><strong>Bridal Services:</strong> ${formData.bridalServices}</p>
      <p><strong>Bridal Package:</strong> ${formData.bridalPackage}</p>
      <p><strong>Bridal Preview Required:</strong> ${formData.bridalPreview}</p>
      <p><strong>Rehearsal Dinner:</strong> ${formData.rehearsalDinner ? 'Yes' : 'No'}</p>
      <p><strong>Post-Wedding Service:</strong> ${formData.postWedding ? 'Yes' : 'No'}</p>
      
      <h3>Wedding Party Services - Preview (Trial)</h3>
      <p><strong>Hair & Makeup:</strong> ${formData.weddingPartyPreview?.hairMakeup || 0}</p>
      <p><strong>Hair Only:</strong> ${formData.weddingPartyPreview?.hairOnly || 0}</p>
      <p><strong>Makeup Only:</strong> ${formData.weddingPartyPreview?.makeupOnly || 0}</p>
      
      <h3>Wedding Party Services - Wedding Day</h3>
      <p><strong>Hair & Makeup:</strong> ${formData.weddingDay?.hairMakeup || 0}</p>
      <p><strong>Hair Only:</strong> ${formData.weddingDay?.hairOnly || 0}</p>
      <p><strong>Makeup Only:</strong> ${formData.weddingDay?.makeupOnly || 0}</p>
      <p><strong>Junior Bridesmaid:</strong> ${formData.weddingDay?.juniorBridesmaid || 0}</p>
      <p><strong>Flower Girl:</strong> ${formData.weddingDay?.flowerGirl || 0}</p>
      <p><strong>Blow-dry Only:</strong> ${formData.weddingDay?.blowDryShort || 0}</p>
      
      <h3>Optional Extras</h3>
      <p><strong>Additional Artists:</strong> ${formData.additionalArtists || 0}</p>
      <p><strong>Stay On Service:</strong> ${formData.stayOnService || 0} hours</p>
      <p><strong>Extra Time:</strong> ${formData.extraTime || 0} hours</p>
      <p><strong>Out of Hours:</strong> ${formData.outOfHours || 0} hours</p>
      <p><strong>Evening Re-style:</strong> ${formData.eveningRestyle?.join(', ') || 'None'}</p>
      <p><strong>Strip Lashes:</strong> ${formData.stripLashes || 0}</p>
      <p><strong>Touch-up Kit:</strong> ${formData.touchUpKit || 0}</p>
      <p><strong>Clip-in Extensions:</strong> ${formData.clipInExtensions || 'Not specified'}</p>
      <p><strong>Split Location:</strong> ${formData.splitLocation || 'Not specified'}</p>
      <p><strong>Overnight Accommodation:</strong> ${formData.overnightAccommodation || 'Not specified'}</p>
      
      <h3>Location</h3>
      <p><strong>Location/Postcode:</strong> ${formData.location}</p>
      
      <hr>
      <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
    `;

    // Send email
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jameswestwood@protonmail.com',
      subject: `New Bridal Quote Request from ${formData.email}`,
      html: emailContent,
    });

    return NextResponse.json({ message: 'Quote request sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request. Please try again.' },
      { status: 500 }
    );
  }
}