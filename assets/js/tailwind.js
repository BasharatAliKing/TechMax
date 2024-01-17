tailwind.config = {
    theme: {
      extend: {
        container: {
            padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '0rem',
              '2xl': '2rem',
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
          
        }
      }
    }
  }