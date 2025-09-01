import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { pricingConfig } from '@/config/pricing'
import { calculateTotalCost, formatCurrency } from '@/utils/costCalculation'
import { textConfig } from '@/config/text'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Calculate total cost
    const totalCost = calculateTotalCost(formData)

    // Create the shared quote breakdown content
    const quoteBreakdownContent = `
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        
        <h4 style="color: rgb(48, 72, 72); margin-top: 0;">${textConfig.email.sections.bridalInformation}</h4>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${pricingConfig.bridal.packages[formData.bridalPackage]?.label || formData.bridalPackage} Package</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(pricingConfig.bridal.packages[formData.bridalPackage]?.price || 0)}</td>
          </tr>
          ${
            formData.bridalPreview === 'yes'
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.bridal.preview.yes}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(pricingConfig.bridal.preview.price)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.rehearsalDinner
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.bridal.rehearsalDinner}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(pricingConfig.bridal.additionalServices.rehearsalDinner)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.postWedding
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.bridal.postWedding}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(pricingConfig.bridal.additionalServices.postWedding)}</td>
          </tr>
          `
              : ''
          }
        </table>

        ${
          formData.weddingPartyPreview?.hairMakeup > 0 ||
          formData.weddingPartyPreview?.hairOnly > 0 ||
          formData.weddingPartyPreview?.makeupOnly > 0
            ? `
        <h4 style="color: rgb(48, 72, 72); margin-top: 20px;">${textConfig.email.sections.weddingPartyServices} - Preview</h4>
        <table style="width: 100%; border-collapse: collapse;">
          ${
            formData.weddingPartyPreview?.hairMakeup > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.weddingParty.preview.hairMakeup} × ${formData.weddingPartyPreview.hairMakeup}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.weddingPartyPreview.hairMakeup * pricingConfig.weddingParty.preview.hairMakeup)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.weddingPartyPreview?.hairOnly > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.weddingParty.preview.hairOnly} × ${formData.weddingPartyPreview.hairOnly}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.weddingPartyPreview.hairOnly * pricingConfig.weddingParty.preview.hairOnly)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.weddingPartyPreview?.makeupOnly > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.weddingParty.preview.makeupOnly} × ${formData.weddingPartyPreview.makeupOnly}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.weddingPartyPreview.makeupOnly * pricingConfig.weddingParty.preview.makeupOnly)}</td>
          </tr>
          `
              : ''
          }
        </table>
        `
            : ''
        }

        ${
          formData.weddingDay?.hairMakeup > 0 ||
          formData.weddingDay?.hairOnly > 0 ||
          formData.weddingDay?.makeupOnly > 0 ||
          formData.weddingDay?.juniorBridesmaid > 0 ||
          formData.weddingDay?.flowerGirl > 0 ||
          formData.weddingDay?.blowDryShort > 0
            ? `
        <h4 style="color: rgb(48, 72, 72); margin-top: 20px;">${textConfig.email.sections.weddingPartyServices} - Wedding Day</h4>
        <table style="width: 100%; border-collapse: collapse;">
          ${
            formData.weddingDay?.hairMakeup > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.weddingParty.weddingDay.hairMakeup} × ${formData.weddingDay.hairMakeup}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.weddingDay.hairMakeup * pricingConfig.weddingParty.weddingDay.hairMakeup)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.weddingDay?.hairOnly > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.weddingParty.weddingDay.hairOnly} × ${formData.weddingDay.hairOnly}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.weddingDay.hairOnly * pricingConfig.weddingParty.weddingDay.hairOnly)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.weddingDay?.makeupOnly > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.weddingParty.weddingDay.makeupOnly} × ${formData.weddingDay.makeupOnly}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.weddingDay.makeupOnly * pricingConfig.weddingParty.weddingDay.makeupOnly)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.weddingDay?.juniorBridesmaid > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.weddingParty.weddingDay.juniorBridesmaid} × ${formData.weddingDay.juniorBridesmaid}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.weddingDay.juniorBridesmaid * pricingConfig.weddingParty.weddingDay.juniorBridesmaid)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.weddingDay?.flowerGirl > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.weddingParty.weddingDay.flowerGirl} × ${formData.weddingDay.flowerGirl}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.weddingDay.flowerGirl * pricingConfig.weddingParty.weddingDay.flowerGirl)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.weddingDay?.blowDryShort > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.weddingParty.weddingDay.blowDryShort} × ${formData.weddingDay.blowDryShort}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.weddingDay.blowDryShort * pricingConfig.weddingParty.weddingDay.blowDryShort)}</td>
          </tr>
          `
              : ''
          }
        </table>
        `
            : ''
        }

        ${
          formData.additionalArtists > 0 ||
          formData.stayOnService > 0 ||
          formData.extraTime > 0 ||
          formData.outOfHours > 0 ||
          formData.eveningRestyle?.length > 0 ||
          formData.stripLashes > 0 ||
          formData.touchUpKit > 0 ||
          formData.clipInExtensions === 'yes' ||
          formData.splitLocation === 'yes' ||
          formData.overnightAccommodation === 'yes'
            ? `
        <h4 style="color: rgb(48, 72, 72); margin-top: 20px;">${textConfig.email.sections.optionalExtras}</h4>
        <table style="width: 100%; border-collapse: collapse;">
          ${
            formData.additionalArtists > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.extras.additionalArtists} × ${formData.additionalArtists}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.additionalArtists * pricingConfig.optionalExtras.additionalArtists.pricePerArtist)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.stayOnService > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">Stay On Service × ${formData.stayOnService} hours</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.stayOnService * pricingConfig.optionalExtras.stayOnService.pricePerHour)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.extraTime > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">Extra Time × ${formData.extraTime} hours</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.extraTime * pricingConfig.optionalExtras.extraTime.pricePerHour)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.outOfHours > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">Out of Hours × ${formData.outOfHours} hours</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.outOfHours * pricingConfig.optionalExtras.outOfHours.pricePerHour)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.eveningRestyle?.includes('hairRestyle')
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">Hair Restyle</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(pricingConfig.optionalExtras.eveningRestyle.hairRestyle)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.eveningRestyle?.includes('makeupRestyle')
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">Makeup Restyle</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(pricingConfig.optionalExtras.eveningRestyle.makeupRestyle)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.eveningRestyle?.includes('hairMakeupRestyle')
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">Hair & Makeup Restyle</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(pricingConfig.optionalExtras.eveningRestyle.hairMakeupRestyle)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.stripLashes > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">Strip Lashes × ${formData.stripLashes}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.stripLashes * pricingConfig.optionalExtras.stripLashes.pricePerPerson)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.touchUpKit > 0
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">Touch-up Kit × ${formData.touchUpKit}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(formData.touchUpKit * pricingConfig.optionalExtras.touchUpKit.pricePerPerson)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.clipInExtensions === 'yes'
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">Clip-in Extensions</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(pricingConfig.optionalExtras.clipInExtensions.basePrice)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.splitLocation === 'yes'
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">Split Location Fee</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(pricingConfig.optionalExtras.splitLocation.basePrice)}</td>
          </tr>
          `
              : ''
          }
          ${
            formData.overnightAccommodation === 'yes'
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${textConfig.email.serviceNames.extras.overnightAccommodation}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; text-align: right; font-weight: bold;">${formatCurrency(pricingConfig.optionalExtras.overnightAccommodation.minPrice)}</td>
          </tr>
          `
              : ''
          }
        </table>
        `
            : ''
        }

        <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid rgb(48, 72, 72);">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; font-size: 18px; font-weight: bold; color: rgb(48, 72, 72);">${textConfig.email.sections.total.toUpperCase()}:</td>
              <td style="padding: 12px 0; font-size: 18px; font-weight: bold; color: rgb(48, 72, 72); text-align: right;">${formatCurrency(totalCost)}</td>
            </tr>
          </table>
        </div>
        
      </div>

      ${formData.location ? `<p><strong>${textConfig.email.sections.location}:</strong> ${formData.location}</p>` : ''}
    `

    // Format business email
    const businessEmailContent = `
      <h2>${textConfig.email.headers.business}</h2>
      
      <p><strong>Customer Email:</strong> ${formData.email}</p>
      
      <h3>Quote Breakdown:</h3>
      
      ${quoteBreakdownContent}
      
      <hr>
      <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
    `

    // Format customer confirmation email
    const customerEmailContent = `
      <h2>${textConfig.email.headers.customer}</h2>
      
      <p>Dear valued customer,</p>
      
      <p>Thank you for choosing Lucent Hair and Makeup for your special day. Below is your detailed quote breakdown:</p>
      
      <h3>Your Quote Breakdown:</h3>
      
      ${quoteBreakdownContent}
      
      <p>This is an estimated quote based on your selections. We will review your requirements and may contact you to discuss any specific needs or adjustments.</p>
      
      <p>If you have any questions about your quote, please don't hesitate to contact us.</p>
      
      ${textConfig.email.footers.customer}
      
      <hr>
      <p><small>Quote generated on: ${new Date().toLocaleString()}</small></p>
    `

    // Send email to business
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jameswestwood@protonmail.com',
      subject: `${textConfig.email.subjects.business} from ${formData.email}`,
      html: businessEmailContent,
    })

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: formData.email,
      subject: textConfig.email.subjects.customer,
      html: customerEmailContent,
    })

    return NextResponse.json({ message: 'Quote request sent successfully!' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send quote request. Please try again.' },
      { status: 500 }
    )
  }
}
