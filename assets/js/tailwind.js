tailwind.config = {
    theme: {
      extend: {
        container: {
            padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '5rem',
              '2xl': '6rem',
            },
            center: true,
          },
        colors: {
          clifford: '#da373d',
          dark:"#040922",
          green:"#00b243",
        },
        backgroundImage: {
          'home-bg': "url('/assets/images/pattern-bg-1.jpg')",
          'timebg': "url('/assets/images/91.jpg')",
          
        }
      }
    }
  }