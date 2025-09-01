export interface PricingConfig {
  bridal: {
    services: {
      [key: string]: {
        label: string
        basePrice: number
      }
    }
    packages: {
      [key: string]: {
        label: string
        price: number
      }
    }
    preview: {
      price: number
    }
    additionalServices: {
      rehearsalDinner: number
      postWedding: number
    }
  }
  weddingParty: {
    preview: {
      [key: string]: number
    }
    weddingDay: {
      [key: string]: number
    }
  }
  optionalExtras: {
    additionalArtists: {
      pricePerArtist: number
    }
    stayOnService: {
      pricePerHour: number
    }
    extraTime: {
      pricePerHour: number
    }
    outOfHours: {
      pricePerHour: number
    }
    eveningRestyle: {
      hairRestyle: number
      makeupRestyle: number
      hairMakeupRestyle: number
    }
    stripLashes: {
      pricePerPerson: number
    }
    touchUpKit: {
      pricePerPerson: number
    }
    clipInExtensions: {
      basePrice: number
    }
    splitLocation: {
      basePrice: number
    }
    overnightAccommodation: {
      minPrice: number
      maxPrice: number
    }
  }
}

export const pricingConfig: PricingConfig = {
  bridal: {
    services: {
      hairMakeup: {
        label: 'Hair & Makeup',
        basePrice: 420,
      },
      hairOnly: {
        label: 'Hair only',
        basePrice: 420,
      },
      makeupOnly: {
        label: 'Makeup only',
        basePrice: 420,
      },
    },
    packages: {
      essential: {
        label: 'Essential Radiance',
        price: 420,
      },
      elevated: {
        label: 'Elevated Glow',
        price: 520,
      },
      lucent: {
        label: 'Lucent Luxe',
        price: 620,
      },
    },
    preview: {
      price: 190,
    },
    additionalServices: {
      rehearsalDinner: 250,
      postWedding: 250,
    },
  },
  weddingParty: {
    preview: {
      hairMakeup: 150,
      hairOnly: 90,
      makeupOnly: 90,
    },
    weddingDay: {
      hairMakeup: 160,
      hairOnly: 100,
      makeupOnly: 100,
      juniorBridesmaid: 65,
      flowerGirl: 40,
      blowDryShort: 65,
    },
  },
  optionalExtras: {
    additionalArtists: {
      pricePerArtist: 150,
    },
    stayOnService: {
      pricePerHour: 70,
    },
    extraTime: {
      pricePerHour: 70,
    },
    outOfHours: {
      pricePerHour: 70,
    },
    eveningRestyle: {
      hairRestyle: 150,
      makeupRestyle: 150,
      hairMakeupRestyle: 250,
    },
    stripLashes: {
      pricePerPerson: 8,
    },
    touchUpKit: {
      pricePerPerson: 15,
    },
    clipInExtensions: {
      basePrice: 40,
    },
    splitLocation: {
      basePrice: 40,
    },
    overnightAccommodation: {
      minPrice: 80,
      maxPrice: 100,
    },
  },
}
