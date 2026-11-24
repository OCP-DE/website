// Variants resized (no crop) from the original 941x1672 PNG logo.
const l = (size: number) => `/images/logo/ocp-logo-${size}.webp`;
export const headerLogo = { src: l(96), srcset: `${l(48)} 48w, ${l(96)} 96w`, sizes: '(max-width: 760px) 34px, 41px', width: 48, height: 85 };
export const footerLogo = { src: l(144), srcset: `${l(72)} 72w, ${l(144)} 144w`, sizes: '32px', width: 72, height: 128 };
export const contactLogo = { src: l(360), srcset: `${l(180)} 180w, ${l(360)} 360w`, sizes: '(max-width: 760px) 124px, 158px', width: 180, height: 320 };
export const organizationLogo = '/images/logo/ocean-logo.webp';
