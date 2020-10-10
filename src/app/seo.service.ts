import { Meta, Title } from '@angular/platform-browser';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeoService {


     pageSeo = {
		metaImage:null, 
		pageTitle: null,
		pageDescription: null, 
		pageKeywords:null, 
        pageUrl: null,
        twitterHandle: null
	};  

    constructor( private title: Title, private meta: Meta) {
        
    }



    setPageSeo(data){


        this.pageSeo.pageTitle = data.seoPageTitle.value;
        this.pageSeo.pageDescription = data.seoPageDescription.value;
        this.pageSeo.pageKeywords = data.seoPageKeywords.value;
        this.pageSeo.pageUrl = window.location.href; 
 

        if(data.seoMetaImage.value.length > 0 ) {
            this.pageSeo.metaImage = data.seoMetaImage.assets.length > 0 ? data.seoMetaImage.assets[0].url : this.pageSeo.metaImage; 
        }


        // <!-- Title information-->
        this.title.setTitle(this.pageSeo.pageTitle); 

        // <!-- Meta information-->
        this.meta.updateTag({ name: "keywords", content: this.pageSeo.pageKeywords }); 
        this.meta.updateTag({ name: "description", content: this.pageSeo.pageDescription }); 

        // <!-- Facebook OG Info-->
        this.meta.updateTag({ property: "og:title", content: this.pageSeo.pageTitle }); 
        this.meta.updateTag({ property: "og:url", content: this.pageSeo.pageUrl}); 
        this.meta.updateTag({ property: "og:image", content: this.pageSeo.metaImage}); 
        this.meta.updateTag({ property: "og:description", content: this.pageSeo.pageDescription }); 

        // <!-- Twitter information-->
        this.meta.updateTag({ content: this.pageSeo.pageTitle, name: "twitter:title"}); 
        this.meta.updateTag({ content: this.pageSeo.pageDescription, name: "twitter:description"});
        this.meta.updateTag({ content: this.pageSeo.metaImage, name: "twitter:image"}); 
        this.meta.updateTag({ content: this.pageSeo.pageUrl, name: "twitter:site"}); 











    }

}
