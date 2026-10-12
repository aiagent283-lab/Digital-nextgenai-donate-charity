import logoAsset from '@/assets/nextgen-logo.png.asset.json';

const logoUrl = logoAsset.url;

export function NextgenBrand() {
  return <span className="brand-wordmark">
    <img className="brand-mark" src={logoUrl} alt="" width={46} height={46} decoding="async" />
    <span>NEXTGEN<span className="brand-ai"> AI</span></span>
  </span>;
}
