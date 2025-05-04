// Statically load all "local" components that aren't yet in the npm package

// custom override
import PegaExtensionsLeizQrCode from './src/components/custom-sdk/field/Pega_Extensions_LeizQRCode/';
import NjjLeizComponentLibLeizButtonA from './src/components/custom-sdk/field/NJJ_LeizComponentLib_LeizButtonA/';
import NjjLeizComponentLibLeizButtonB from './src/components/custom-sdk/field/NJJ_LeizComponentLib_LeizButtonB/';
import NjjLeizComponentLibLeizWidgetA from './src/components/custom-sdk/widget/NJJ_LeizComponentLib_LeizWidgetA/';
import NjjLeizComponentLibLeizWidgetB from './src/components/custom-sdk/widget/NJJ_LeizComponentLib_LeizWidgetB/';
import NjjLeizComponentLibMyTestWidget from './src/components/custom-sdk/widget/NJJ_LeizComponentLib_MyTestWidget/';
import NjjNjmcCompLibOfferOption from './src/components/custom-sdk/widget/NJJ_NJMCCompLib_OfferOption/';
import SweetLifeDeligthLibraryFeaturedProducts from './src/components/custom-sdk/widget/SweetLife_DeligthLibrary_FeaturedProducts/';
/* import end - DO NOT REMOVE */

// localSdkComponentMap is the JSON object where we'll store the components that are
// found locally. If not found here, we'll look in the Pega-provided component map

const localSdkComponentMap = {
  Pega_Extensions_LeizQRCode: PegaExtensionsLeizQrCode,
  NJJ_LeizComponentLib_LeizButtonA: NjjLeizComponentLibLeizButtonA,
  NJJ_LeizComponentLib_LeizButtonB: NjjLeizComponentLibLeizButtonB,
  NJJ_LeizComponentLib_LeizWidgetA: NjjLeizComponentLibLeizWidgetA,
  NJJ_LeizComponentLib_LeizWidgetB: NjjLeizComponentLibLeizWidgetB,
  NJJ_LeizComponentLib_MyTestWidget: NjjLeizComponentLibMyTestWidget,
  NJJ_NJMCCompLib_OfferOption: NjjNjmcCompLibOfferOption,
  SweetLife_DeligthLibrary_FeaturedProducts: SweetLifeDeligthLibraryFeaturedProducts
  /* map end - DO NOT REMOVE */
};

export default localSdkComponentMap;
