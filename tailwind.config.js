module.exports = {
  prefix: 'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {

    minHeight: {
      'ntbh': '70px'
    },
    extend: {
      screens: {
        'xs': '320px',
      // => @media (min-width: 320px) { ... }
        'ipad': {'min': '768px', 'max': '1023px'},
        'responsive': {'min':'750px','max':'989px'},
        'min641': {'min': '641px'},
        'min750': {'min': '750px'},
        'min768': {'min': '768px'},
        'minmax768': {'min':'768px','max':'769px'},
        'mobileLandscape':{'min':'769px','max':'950px'},
        'ipadPro': {'min': '1024px', 'max': '1199px'},
        'max989': {'max': '989px'},
        'min990': {'min': '990px'},
        'min1024': {'min': '1024px'},
        'min1140': {'min': '1140px'},
        'min1280': {'min': '1280px'},
        'min1366': {'min': '1366px' },
        'min1536': {'min': '1536px' },
        'min1600': {'min': '1600px' },
        'min1680': {'min': '1680px' },
	      'min1920': {'min': '1920px'},
        'min2560': {'min': '2560px'},
        'max1200' : {'max':'1200px'},
        'max991': {'max': '991px'},
        'mobile': {'max': '767px'},
        'max749': {'max': '749px'},
        'max640': {'max': '640px'},
        'extraSmall': {'max': '450px'},
        'max1440': {'min':'768px','max':'1440px'},
        'max768': { 'max': '768px' },
        'onlyIpad': {'min': '768px', 'max': '989px'},
        'ipadLandscape': {'min': '990px', 'max': '1024px'}
      },
      fontFamily: {
        'americana': 'var(--font-heading-family)',
        'trade-gothic': 'var(--font-body-family)',
        'americana-extrabold': 'Americana-extrabold',
        'made-saonara-2': 'MADE SAONARA 2',
        'made-saonara': 'MADE SAONARA',
        'neutraface-display-bold': 'Neutraface Display Bold',
        'neutraface-display-light': 'Neutraface Display Light',
      },
      colors: {
        'darkgrey': 'rgb(108,117,125)',
        'eerieblack': 'rgb(30, 30, 30)'
      },
      width: {
        'w28': '28%',
      },
      backgroundColor: {
        'textsectionbg': 'var(--textsec-bg-color)',
      },
      backgroundImage: {
        'newsletter': 'var(--newsletter-background-image)',
        'checkbox-arrow': 'var(--checked-arrow-image)',
        'ageGate': 'var(--ageGate-background-image)',
      },
      backgroundPosition: {
        'newsletter-image-position': '50%',
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        fadeindown: 'fadeindown 0.5s ease-out forwards',
        fadeoutdown: 'fadeoutdown 0.5s ease-out forwards',
        fadeinUp: 'fadeinUp 500ms ease-in-out forwards',
        fadeoutup: 'fadeoutup 0.5s ease-out forwards',
        stripmarquee: 'stripmarquee 20s linear infinite;',
        stripmarqueemobile: 'stripmarquee 5s linear infinite;',
        line_animation: 'line_animation 1.5s ease forwards;',
        moveLeftAndBack: 'moveLeftAndBack 2s ease-in infinite;'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeindown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeoutdown: {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
        },
        fadeinUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(40px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeoutup: {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
        },
        stripmarquee: {
          '0%': {
            transform: 'translate3d(100%,0,0)'
          },
          '100%': {
            transform: 'translate3d(-100%,0,0)'
          }
        },
        line_animation: {
          '0%': {
            width: '0%'
          },
          '100%': {
            width: '100%'
          }
        },
        moveLeftAndBack: {
          '0%, 100%': {
              transform: 'translateX(0)'
          },
          '50%': {
            transform: 'translateX(-100%)'
          } 
        },

        moveLeftAndBack1: {
          '0%': {
              transform: 'translateX(0)'
          },
          '50%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        }
      },
      maxWidth: {
        'maxW600': '600px',
        'page-width': 'var(--page-width)',
        'nmw': '1040px',
        'ntbw': '36%',
        'nlmw': '724px',
        'newsletterMW': '1024px',
        'lg': '990px',
        'maxW': '100%',
      },
      padding: {
        '56p': '56%',
      },
      outlineOffset: {
        '0.3rem': '0.3rem',
      },
    },
  },
  plugins: [
  ],
}