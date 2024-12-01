import React from 'react';

export const Partners = () => {
  const partners = [
    {
      name: 'Skyscanner',
      logo: 'https://lp-prod.rome2rio.com/assets/skyscanner-Cn6MV7ns.png',
    },
    {
      name: 'Booking.com',
      logo: 'https://lp-prod.rome2rio.com/assets/bookingcom-5srJZvdI.png',
    },
    {
      name: 'Rental Cars',
      logo: 'https://lp-prod.rome2rio.com/assets/rentalcars-dOOR954V.png',
    },
    {
      name: 'Ferryhopper',
      logo: 'https://cdn1.ferryhopper.com/img/ferryhopper-logo-small.svg',
    },
    {
      name: 'Aggelos Rentals',
      logo: 'https://aggelosrentals.com/wp-content/uploads/2023/12/cropped-cropped-Aggelos-Rentals-Logo-1.png',
    },
  ];

  return (
    <div className="mt-12 text-center">
      <p className="text-sm font-medium text-gray-400 mb-6">Our Trusted Partners</p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="group relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-6 md:h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};