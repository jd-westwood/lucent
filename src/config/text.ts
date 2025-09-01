export interface TextConfig {
  form: {
    title: string
    instructions: string[]
    fieldsets: {
      personalDetails: {
        title: string
        description: string
        fields: {
          email: {
            label: string
            placeholder: string
          }
        }
      }
      bridalInformation: {
        title: string
        fields: {
          numberOfBrides: {
            label: string
            options: {
              one: string
              two: string
            }
          }
          bridalServices: {
            label: string
            subtitle: string
            description: string
            options: {
              hairMakeup: string
              hairOnly: string
              makeupOnly: string
            }
          }
          bridalPackage: {
            label: string
            subtitle: string
            description: string
            linkText: string
          }
          bridalPreview: {
            label: string
            subtitle: string
            description: string
            options: {
              yes: string
              no: string
            }
          }
          rehearsalDinner: {
            label: string
            subtitle: string
            description: string
          }
          postWedding: {
            label: string
            subtitle: string
            description: string
          }
        }
      }
      weddingPartyServices: {
        title: string
        sections: {
          preview: {
            subtitle: string
            description: string
            fields: {
              hairMakeup: { label: string }
              hairOnly: { label: string }
              makeupOnly: { label: string }
            }
          }
          weddingDay: {
            subtitle: string
            description: string
            fields: {
              hairMakeup: { label: string }
              hairOnly: { label: string }
              makeupOnly: { label: string }
              juniorBridesmaid: { label: string }
              flowerGirl: { label: string }
              blowDryShort: { label: string }
            }
          }
        }
      }
      optionalExtras: {
        title: string
        description: string
        fields: {
          additionalArtists: { label: string }
          stayOnService: { label: string }
          extraTime: { label: string }
          outOfHours: { label: string }
          eveningRestyle: { label: string }
          stripLashes: { label: string }
          touchUpKit: { label: string }
          clipInExtensions: {
            label: string
            options: {
              yes: string
              no: string
            }
          }
          splitLocation: {
            label: string
            options: {
              yes: string
              no: string
            }
          }
          overnightAccommodation: {
            label: string
            options: {
              yes: string
              no: string
            }
          }
        }
      }
      location: {
        title: string
        description: string
        fields: {
          location: {
            label: string
            placeholder: string
          }
        }
      }
    }
    buttons: {
      submit: string
      submitting: string
    }
    validation: {
      required: string
      invalidEmail: string
      invalidPostcode: string
    }
    status: {
      success: string
      networkError: string
    }
  }
  email: {
    subjects: {
      business: string
      customer: string
    }
    headers: {
      business: string
      customer: string
    }
    sections: {
      personalDetails: string
      bridalInformation: string
      weddingPartyServices: string
      optionalExtras: string
      location: string
      costBreakdown: string
      total: string
    }
    footers: {
      business: string
      customer: string
    }
    serviceNames: {
      bridal: {
        hairMakeup: string
        hairOnly: string
        makeupOnly: string
        packages: {
          essential: string
          signature: string
          luxury: string
        }
        preview: {
          yes: string
          no: string
        }
        rehearsalDinner: string
        postWedding: string
      }
      weddingParty: {
        preview: {
          hairMakeup: string
          hairOnly: string
          makeupOnly: string
        }
        weddingDay: {
          hairMakeup: string
          hairOnly: string
          makeupOnly: string
          juniorBridesmaid: string
          flowerGirl: string
          blowDryShort: string
        }
      }
      extras: {
        additionalArtists: string
        stayOnService: string
        extraTime: string
        outOfHours: string
        eveningRestyle: string
        stripLashes: string
        touchUpKit: string
        clipInExtensions: string
        splitLocation: string
        overnightAccommodation: string
      }
    }
  }
}

export const textConfig: TextConfig = {
  form: {
    title: 'Cost Calculator',
    instructions: [
      'Select Options: Choose from available packages, add-ons, or customisations to tailor your costs.',
      'Review Costs: The calculator will automatically display the estimated total cost based on your inputs.',
      'Adjust If Needed: Modify your selections or inputs to see how changes impact the total cost.',
      'Enter Your Email Address: Input your email address to receive the detailed quote directly in your inbox for future reference.',
    ],
    fieldsets: {
      personalDetails: {
        title: 'Personal Details',
        description:
          'Please provide your contact information to receive your detailed quote.',
        fields: {
          email: {
            label: 'Email Address',
            placeholder: 'Enter your email for the detailed quote',
          },
        },
      },
      bridalInformation: {
        title: 'Bridal Information',
        fields: {
          numberOfBrides: {
            label: 'Number of Brides',
            options: {
              one: 'One Bride',
              two: 'Two Brides',
            },
          },
          bridalServices: {
            label: 'Select Your Desired Service',
            subtitle: 'Bridal Services',
            description:
              'Choose the primary service you would like for your wedding day.',
            options: {
              hairMakeup: 'Hair & Makeup',
              hairOnly: 'Hair Only',
              makeupOnly: 'Makeup Only',
            },
          },
          bridalPackage: {
            label: 'Select Your Desired Package',
            subtitle: 'Bridal Package',
            description:
              'Each package includes different levels of service and luxury.',
            linkText: 'Find out more here',
          },
          bridalPreview: {
            label: 'Is a bridal preview (trial) required?',
            subtitle: 'Bridal Preview',
            description:
              'A bridal preview allows you to test your wedding day look in advance.',
            options: {
              yes: 'Yes',
              no: 'No',
            },
          },
          rehearsalDinner: {
            label: 'Rehearsal Dinner Service',
            subtitle: 'Rehearsal Dinner',
            description:
              'Professional styling for your rehearsal dinner or pre-wedding events.',
          },
          postWedding: {
            label: 'Post-Wedding Service',
            subtitle: 'Post-Wedding',
            description:
              'Styling services for post-wedding events or photoshoots.',
          },
        },
      },
      weddingPartyServices: {
        title: 'Wedding Party Services',
        sections: {
          preview: {
            subtitle: 'Preview (Trial)',
            description:
              'For bridesmaids, mother of the bride/groom, or additional attendants.',
            fields: {
              hairMakeup: { label: 'Hair & Makeup' },
              hairOnly: { label: 'Hair Only' },
              makeupOnly: { label: 'Makeup Only' },
            },
          },
          weddingDay: {
            subtitle: 'Wedding Day',
            description:
              'For bridesmaids, mother of the bride/groom, or additional attendants.',
            fields: {
              hairMakeup: { label: 'Hair & Makeup' },
              hairOnly: { label: 'Hair Only' },
              makeupOnly: { label: 'Makeup Only' },
              juniorBridesmaid: {
                label:
                  'Junior Bridesmaid Hair and Light Touch of Makeup (10-15 yrs)',
              },
              flowerGirl: { label: 'Flower Girl Hair (under 10 yrs)' },
              blowDryShort: { label: 'Blow-dry Only - Short Hair' },
            },
          },
        },
      },
      optionalExtras: {
        title: 'Optional Extras',
        description:
          'Additional services to enhance your wedding day experience.',
        fields: {
          additionalArtists: { label: 'Additional Artists' },
          stayOnService: { label: 'Stay-On Service (per hour)' },
          extraTime: { label: 'Extra Time (per hour)' },
          outOfHours: { label: 'Out of Hours Service' },
          eveningRestyle: { label: 'Evening Restyle' },
          stripLashes: { label: 'Strip Lashes (per pair)' },
          touchUpKit: { label: 'Touch-Up Kit' },
          clipInExtensions: {
            label: 'Clip-in hair extension application/styling',
            options: {
              yes: 'Yes',
              no: 'No',
            },
          },
          splitLocation: {
            label: 'Split Location Fee',
            options: {
              yes: 'Yes',
              no: 'No',
            },
          },
          overnightAccommodation: {
            label: 'Overnight Accommodation',
            options: {
              yes: 'Yes',
              no: 'No',
            },
          },
        },
      },
      location: {
        title: 'Location Information',
        description: 'Please provide your bridal preparation location.',
        fields: {
          location: {
            label: 'Bridal prep location / postcode',
            placeholder: 'Enter location or UK postcode (e.g., SW1A 1AA)',
          },
        },
      },
    },
    buttons: {
      submit: 'Get Quote',
      submitting: 'Sending Quote Request...',
    },
    validation: {
      required: 'This field is required',
      invalidEmail: 'Invalid email',
      invalidPostcode: 'Please enter a valid UK postcode (e.g., SW1A 1AA)',
    },
    status: {
      success: "Quote request sent successfully! We'll get back to you soon.",
      networkError:
        'Network error. Please check your connection and try again.',
    },
  },
  email: {
    subjects: {
      business: 'New Bridal Quote Request',
      customer: 'Your Bridal Service Quote - Lucent Hair and Makeup',
    },
    headers: {
      business: 'New Bridal Quote Request',
      customer:
        'Thank you for your interest in Lucent Hair and Makeup services!',
    },
    sections: {
      personalDetails: 'Personal Details',
      bridalInformation: 'Bridal Services',
      weddingPartyServices: 'Wedding Party Services',
      optionalExtras: 'Optional Extras',
      location: 'Location',
      costBreakdown: 'Cost Breakdown',
      total: 'Total Cost',
    },
    footers: {
      business: '',
      customer: `
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666;">
          <p><strong>Lucent Hair and Makeup</strong></p>
          <p>Professional bridal and special occasion styling</p>
          <p>Website: <a href="https://www.lucenthairandmakeup.co.uk" style="color: #304848;">www.lucenthairandmakeup.co.uk</a></p>
          <p>Email: <a href="mailto:jameswestwood@protonmail.com" style="color: #304848;">jameswestwood@protonmail.com</a></p>
          <p style="font-size: 12px; margin-top: 15px;">We look forward to making your special day beautiful!</p>
        </div>
      `,
    },
    serviceNames: {
      bridal: {
        hairMakeup: 'Hair & Makeup',
        hairOnly: 'Hair Only',
        makeupOnly: 'Makeup Only',
        packages: {
          essential: 'Essential Radiance',
          signature: 'Signature Elegance',
          luxury: 'Luxury Glamour',
        },
        preview: {
          yes: 'Bridal Preview Required',
          no: 'No Bridal Preview',
        },
        rehearsalDinner: 'Rehearsal Dinner Service',
        postWedding: 'Post-Wedding Service',
      },
      weddingParty: {
        preview: {
          hairMakeup: 'Wedding Party Hair & Makeup Preview',
          hairOnly: 'Wedding Party Hair Only Preview',
          makeupOnly: 'Wedding Party Makeup Only Preview',
        },
        weddingDay: {
          hairMakeup: 'Wedding Party Hair & Makeup',
          hairOnly: 'Wedding Party Hair Only',
          makeupOnly: 'Wedding Party Makeup Only',
          juniorBridesmaid: 'Junior Bridesmaid Service',
          flowerGirl: 'Flower Girl Service',
          blowDryShort: 'Blow Dry Service',
        },
      },
      extras: {
        additionalArtists: 'Additional Artists',
        stayOnService: 'Stay-On Service',
        extraTime: 'Extra Time',
        outOfHours: 'Out of Hours Service',
        eveningRestyle: 'Evening Restyle',
        stripLashes: 'Strip Lashes',
        touchUpKit: 'Touch-Up Kit',
        clipInExtensions: 'Clip-in Hair Extensions',
        splitLocation: 'Split Location Fee',
        overnightAccommodation: 'Overnight Accommodation',
      },
    },
  },
}
