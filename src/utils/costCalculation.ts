import { pricingConfig } from '../config/pricing';

export interface FormValues {
  numberOfBrides: string;
  bridalServices: string;
  bridalPackage: string;
  bridalPreview: string;
  rehearsalDinner: boolean;
  postWedding: boolean;
  weddingPartyPreview: {
    hairMakeup: number;
    hairOnly: number;
    makeupOnly: number;
  };
  weddingDay: {
    hairMakeup: number;
    hairOnly: number;
    makeupOnly: number;
    juniorBridesmaid: number;
    flowerGirl: number;
    blowDryShort: number;
  };
  additionalArtists: number;
  stayOnService: number;
  extraTime: number;
  outOfHours: number;
  eveningRestyle: string[];
  stripLashes: number;
  touchUpKit: number;
  clipInExtensions: string;
  splitLocation: string;
  overnightAccommodation: string;
}

export function calculateTotalCost(values: FormValues): number {
  let total = 0;

  // Bridal package cost
  const packageKey = values.bridalPackage as keyof typeof pricingConfig.bridal.packages;
  if (packageKey && pricingConfig.bridal.packages[packageKey]) {
    total += pricingConfig.bridal.packages[packageKey].price;
  }

  // Bridal preview cost
  if (values.bridalPreview === 'yes') {
    total += pricingConfig.bridal.preview.price;
  }

  // Additional bridal services
  if (values.rehearsalDinner) {
    total += pricingConfig.bridal.additionalServices.rehearsalDinner;
  }
  if (values.postWedding) {
    total += pricingConfig.bridal.additionalServices.postWedding;
  }

  // Wedding party preview costs
  total += values.weddingPartyPreview.hairMakeup * pricingConfig.weddingParty.preview.hairMakeup;
  total += values.weddingPartyPreview.hairOnly * pricingConfig.weddingParty.preview.hairOnly;
  total += values.weddingPartyPreview.makeupOnly * pricingConfig.weddingParty.preview.makeupOnly;

  // Wedding day party costs
  total += values.weddingDay.hairMakeup * pricingConfig.weddingParty.weddingDay.hairMakeup;
  total += values.weddingDay.hairOnly * pricingConfig.weddingParty.weddingDay.hairOnly;
  total += values.weddingDay.makeupOnly * pricingConfig.weddingParty.weddingDay.makeupOnly;
  total += values.weddingDay.juniorBridesmaid * pricingConfig.weddingParty.weddingDay.juniorBridesmaid;
  total += values.weddingDay.flowerGirl * pricingConfig.weddingParty.weddingDay.flowerGirl;
  total += values.weddingDay.blowDryShort * pricingConfig.weddingParty.weddingDay.blowDryShort;

  // Optional extras
  total += values.additionalArtists * pricingConfig.optionalExtras.additionalArtists.pricePerArtist;
  total += values.stayOnService * pricingConfig.optionalExtras.stayOnService.pricePerHour;
  total += values.extraTime * pricingConfig.optionalExtras.extraTime.pricePerHour;
  total += values.outOfHours * pricingConfig.optionalExtras.outOfHours.pricePerHour;

  // Evening restyle costs
  values.eveningRestyle.forEach(service => {
    if (service === 'hairRestyle') {
      total += pricingConfig.optionalExtras.eveningRestyle.hairRestyle;
    } else if (service === 'makeupRestyle') {
      total += pricingConfig.optionalExtras.eveningRestyle.makeupRestyle;
    } else if (service === 'hairMakeupRestyle') {
      total += pricingConfig.optionalExtras.eveningRestyle.hairMakeupRestyle;
    }
  });

  total += values.stripLashes * pricingConfig.optionalExtras.stripLashes.pricePerPerson;
  total += values.touchUpKit * pricingConfig.optionalExtras.touchUpKit.pricePerPerson;

  // Yes/No services with base pricing
  if (values.clipInExtensions === 'yes') {
    total += pricingConfig.optionalExtras.clipInExtensions.basePrice;
  }
  if (values.splitLocation === 'yes') {
    total += pricingConfig.optionalExtras.splitLocation.basePrice;
  }
  if (values.overnightAccommodation === 'yes') {
    // Use minimum price for calculation
    total += pricingConfig.optionalExtras.overnightAccommodation.minPrice;
  }

  return total;
}

export function formatCurrency(amount: number): string {
  return `£${amount.toLocaleString('en-GB')}`;
}