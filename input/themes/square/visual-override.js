/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {
        let output = '';

        if (
                params.navbarHeight !== '5.25rem' ||
                params.entryWidth !== '62ch' ||
                params.heroHeight !== '40vh' ||
                params.heroBg !== '#000000' ||
                params.heroTextColor !== '#FFFFFF' ||
                params.heroBorderColor !== 'rgba(255,255,255,0.2)' ||
                params.heroOverlay !== 'rgba(0,0,0,0.2)' ||
                params.navWidth !== '300px' ||
                params.navBg !== '#000000' ||
                params.navLinkColor !== '#9D9D9D' ||
                params.navLinkColorHover !== '#FFFFFF' ||
                params.logoColor !== '#FFFFFF' ||
                params.lineHeight !== '1.6' ||
                params.fontNormalWeight !== '400' || 
                params.fontBoldWeight !== '600' || 
                params.fontHeadignsWeight !== '700' ||
                params.fontHeadingsTransform !== 'none' ||
                params.primaryColor !== '#A6752E' ||
                params.textColor !== '#262626' ||
                params.headingsColor !== '#262626') {
                output += `
                :root {
                --navbar-height:      ${params.navbarHeight};
                --entry-width:        ${params.entryWidth}; 
                --hero-height:        ${params.heroHeight};
                --hero-bg:            ${params.heroBg};  
                --hero-text-color:    ${params.heroTextColor};  
                --hero-border-color:  ${params.heroBorderColor}; 
                --hero-overlay:       ${params.heroOverlay}; 
                --side-nav-width:     ${params.navWidth};  
                --side-nav-bg:        ${params.navBg};
                --side-nav-link:      ${params.navLinkColor};
                --side-nav-link-hover:${params.navLinkColorHover};
                --logo-color:         ${params.logoColor};
                --line-height:        ${params.lineHeight}; 
                --font-weight-normal: ${params.fontNormalWeight}; 
                --font-weight-bold:   ${params.fontBoldWeight}; 
                --headings-weight:    ${params.fontHeadignsWeight};
                --headings-transform: ${params.fontHeadingsTransform};
                --white:              #FFFFFF;
                --black:              #000000;
                --dark:               #262626;
                --gray-1:             #5C5C5C;
                --gray-2:             #9D9D9D;
                --light:              #D5D5D5;
                --lighter:            #F3F3F3;
                --color:              ${params.primaryColor};   
                --color-rgb:          ${params.primaryColor.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')};
                --text-color:         ${params.textColor};   
                --headings-color:     ${params.headingsColor}; 
                }`;
        }

        if (params.minFontSize !== '1' || params.maxFontSize !== '1.5') {
                output += `
                html {
                        font-size: ${params.minFontSize}rem;
                }

                @media screen and (min-width: 20rem) {
                        html {
                                font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 220));
                        }
                }

                @media screen and (min-width: 240rem) {
                        html { 
                                font-size: ${params.maxFontSize}rem;
                                }
                }`;
        }

        if (params.primaryColor !== '#A6752E') {
                output += ` 
                input[type=checkbox]:checked + label:before{
                        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8'%3e%3cpolygon points='9.53 0 4.4 5.09 1.47 2.18 0 3.64 2.93 6.54 4.4 8 5.87 6.54 11 1.46 9.53 0' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");
                }
                input[type=radio]:checked + label:before {
                        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3ccircle cx='4' cy='4' r='4' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e"); 

                }`;
        }

        if (params.imageEffects) {
                if (params.imageFilter !== '#saturate' || params.imageFilterValue !== '0') {
                        output += ` 
                        .hero > img  {
                                -webkit-filter: ${params.imageFilter}(${params.imageFilterValue});
                                filter: ${params.imageFilter}(${params.imageFilterValue});
                        }`;
                }
        }

        if (params.galleryItemGap !== '0.5rem') {
                output += `   
                .gallery__item {
                        padding: ${params.galleryItemGap}; 
                } 
                .gallery {   
                        margin: calc(1.5rem + 1vw) -${params.galleryItemGap}; 
                }`;
        }

        if(params.galleryZoom !== true) {
                output += `   
                .pswp--zoom-allowed .pswp__img {
                    cursor: default !important  
                }`;    	 
        }

        if (params.lazyLoadEffect === 'fadein') {
                output += ` 
                img[loading] {
                opacity: 0;
                }

                img.is-loaded {
                opacity: 1;
                transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1); 
                }`;
        }

        return output;
}

module.exports = generateOverride;
