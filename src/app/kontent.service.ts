import {
  ContentItem,
  DeliveryClient,
  Elements,
  IDeliveryClient,
  TypeResolver
} from '@kentico/kontent-delivery';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KontentService {
  deliveryClient: IDeliveryClient;

  constructor() {

      this.deliveryClient = new DeliveryClient({
        projectId: "93915114-40e4-00f7-8be7-c49e3a2a4b88",
        typeResolvers: [
              new TypeResolver("navigation_item", () => new NavigationItem()),
              new TypeResolver("page_download", () => new PageDownload()),
              new TypeResolver("page_support", () => new PageSupport()),
              new TypeResolver("page_home", () => new PageHome()),
              new TypeResolver("page_about", () => new PageAbout()),
              new TypeResolver("page_default", () => new PageDefault()),
              new TypeResolver("before_using_pogo_step", () => new BeforeUsingPogoStep())
          ]
      })
  }
}


class NavigationItem extends ContentItem {
  constructor() {
  super({
      propertyResolver: ((fieldName) => {
          if (fieldName === 'untitled_url_slug') {
              return 'url';
          }
          return fieldName;
      })
  });
}
}


class PageDownload extends ContentItem {
constructor(
  ) {
super({
  propertyResolver: ((fieldName) => {
      if (fieldName === 'seo__page_description') {
          return 'seoPageDescription';
      }
      if (fieldName === 'seo__page_keywords') {
          return 'seoPageKeywords';
      }
      if (fieldName === 'seo__meta_image') {
          return 'seoMetaImage';
      }
      if (fieldName === 'seo__page_title') {
          return 'seoPageTitle';
      }
      if (fieldName === 'seo__twitter_handle') {
          return 'seoTwitterHandle';
      }
      if (fieldName === 'pogo_download') {
          return 'pogoDownload';
      }
      if (fieldName === 'download_btn_normal') {
          return 'downloadBtnNormal';
      }
      if (fieldName === 'download_btn_progress') {
          return 'downloadBtnProgress';
      }
      if (fieldName === 'success_headline') {
          return 'successHeadline';
      }
      if (fieldName === 'success_subline') {
          return 'successSubline';
      }
      if (fieldName === 'gmail_settings_copy') {
          return 'gmailSettingsCopy';
      }
      if (fieldName === 'windows_install_copy') {
          return 'windowsInstallCopy';
      }
      if (fieldName === 'support_page_copy') {
          return 'supportPageCopy';
      }
      return fieldName;
  })
});
}
}

class PageSupport extends ContentItem {
constructor(
  ) {
super({
  propertyResolver: ((fieldName) => {
      if (fieldName === 'seo__page_description') {
          return 'seoPageDescription';
      }
      if (fieldName === 'seo__page_keywords') {
          return 'seoPageKeywords';
      }
      if (fieldName === 'seo__meta_image') {
          return 'seoMetaImage';
      }
      if (fieldName === 'seo__page_title') {
          return 'seoPageTitle';
      }
      if (fieldName === 'seo__twitter_handle') {
          return 'seoTwitterHandle';
      }
      if (fieldName === 'windows_patch_alert__headline') {
          return 'windowsPatchAlertHeadline';
      }
      if (fieldName === 'windows_patch_alert__body') {
          return 'windowsPatchAlertBody';
      }                   
      if (fieldName === 'support_gmail_settings__headline') {
          return 'gmailSettingsHeadline';
      }
      if (fieldName === 'support_gmail_settings__body') {
          return 'gmailSettingsBody';
      }
      if (fieldName === 'windows_patch_manual_headline') {
          return 'windowsPatchManualHeadline';
      }
      if (fieldName === 'windows_patch_manual_body') {
          return 'windowsPatchManualBody';
      }
      if (fieldName === 'windows_patch_download_cta') {
          return 'windowsPatchDownloadCta';
      }
      if (fieldName === 'windows_patch_file') {
          return 'windowsPatchManualFile';
      }
      if (fieldName === 'user_manual_headline') {
          return 'userManualHeadline';
      }
      if (fieldName === 'user_manual_body') {
          return 'userManualBody';
      }
      if (fieldName === 'user_manual_file') {
          return 'userManualFile';
      }
      if (fieldName === 'faq_headline') {
          return 'faqHeadline';
      }
      if (fieldName === 'support_form_headline') {
          return 'supportFormHeadline';
      }
      if (fieldName === 'support_form_body') {
          return 'supportFormBody';
      }            
      if (fieldName === 'support_form_success_headline') {
          return 'supportFormSuccessHeadline';
      }
      if (fieldName === 'support_form_success_body') {
          return 'supportFormSuccessBody';
      }           
      if (fieldName === 'downloads_section_headline') {
          return 'downloadsSectionHeadline';
      }
      if (fieldName === 'downloads_section_body') {
          return 'downloadsSectionBody';
      }                     
      return fieldName;
  })
});
}
}


class PageAbout extends ContentItem {
constructor(
  ) {
super({
  propertyResolver: ((fieldName) => {
      if (fieldName === 'seo__page_description') {
          return 'seoPageDescription';
      }
      if (fieldName === 'seo__page_keywords') {
          return 'seoPageKeywords';
      }
      if (fieldName === 'seo__meta_image') {
          return 'seoMetaImage';
      }
      if (fieldName === 'seo__page_title') {
          return 'seoPageTitle';
      }
      if (fieldName === 'seo__twitter_handle') {
          return 'seoTwitterHandle';
      }
      if (fieldName === 'about_headline') {
          return 'aboutHeadline';
      }
      if (fieldName === 'about_body') {
          return 'aboutBody';
      }
      return fieldName;
  })
});
}
}


class PageDefault extends ContentItem {
constructor(
  ) {
super({
  propertyResolver: ((fieldName) => {
      if (fieldName === 'seo__page_description') {
          return 'seoPageDescription';
      }
      if (fieldName === 'seo__page_keywords') {
          return 'seoPageKeywords';
      }
      if (fieldName === 'seo__meta_image') {
          return 'seoMetaImage';
      }
      if (fieldName === 'seo__page_title') {
          return 'seoPageTitle';
      }
      if (fieldName === 'seo__twitter_handle') {
          return 'seoTwitterHandle';
      }
      return fieldName;
  })
});
}
}



class PageHome extends ContentItem {
constructor(
  ) {
super({
  propertyResolver: ((fieldName) => {
      if (fieldName === 'seo__page_description') {
          return 'seoPageDescription';
      }
      if (fieldName === 'seo__page_keywords') {
          return 'seoPageKeywords';
      }
      if (fieldName === 'seo__meta_image') {
          return 'seoMetaImage';
      }
      if (fieldName === 'seo__page_title') {
          return 'seoPageTitle';
      }
      if (fieldName === 'seo__twitter_handle') {
          return 'seoTwitterHandle';
      }
      if (fieldName === 'hero_header_headline') {
          return 'heroHeaderHeadline';
      }
      if (fieldName === 'hero_header_body') {
          return 'heroHeaderBody';
      }
      if (fieldName === 'intro_section1_headline') {
          return 'introSection1Headline';
      }
         if (fieldName === 'intro_section1_body') {
          return 'introSection1Body';
      }
      if (fieldName === 'intro_section2_headline') {
          return 'introSection2Headline';
      }
         if (fieldName === 'intro_section2_body') {
          return 'introSection2Body';
      }    
      if (fieldName === 'intro_section3_headline') {
          return 'introSection3Headline';
      }
         if (fieldName === 'intro_section3_body') {
          return 'introSection3Body';
      }
      if (fieldName === 'intro_section4_headline') {
          return 'introSection4Headline';
      }
         if (fieldName === 'intro_section4_body') {
          return 'introSection4Body';
      }
      if (fieldName === 'using_pogo') {
          return 'usingPogo';
      }
      if (fieldName === 'closing_statement_headline') {
          return 'closingStatementHeadline';
      }
         if (fieldName === 'closing_statement_body') {
          return 'closingStatementBody';
      }
      if (fieldName === 'before_using_pogo_headline') {
          return 'beforeUsingPogoHeadline';
      }
         if (fieldName === 'before_using_pogo_steps') {
          return 'beforeUsingPogoSteps';
      }
      return fieldName;
  })
});
}
}

class BeforeUsingPogoStep extends ContentItem {
  constructor() {
  super({
      propertyResolver: ((fieldName) => {
          if (fieldName === 'step_description') {
              return 'stepDescription';
          }
          return fieldName;
      })
  });
}
}

