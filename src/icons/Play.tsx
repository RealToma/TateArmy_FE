export const Play = ({ className }: { className?: string }) => (
  <svg
    width='95'
    height='96'
    viewBox='0 0 95 96'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <g filter='url(#filter0_bd_157_7)'>
      <rect
        x='9'
        y='7'
        width='77'
        height='77'
        rx='38.5'
        fill='white'
        fill-opacity='0.69'
        shape-rendering='crispEdges'
      />
      <rect
        x='8.68699'
        y='6.68699'
        width='77.626'
        height='77.626'
        rx='38.813'
        stroke='black'
        stroke-opacity='0.06'
        stroke-width='0.626016'
        shape-rendering='crispEdges'
      />
      <g clip-path='url(#clip0_157_7)'>
        <path
          d='M56.3937 42.5902L39.4663 31.7834V59.2604L56.3868 48.4159C56.8793 48.1063 57.2854 47.6769 57.5671 47.1678C57.8488 46.6588 57.9968 46.0867 57.9975 45.5049C57.9982 44.9231 57.8515 44.3507 57.571 43.841C57.2905 43.3313 56.8855 42.9009 56.3937 42.5902Z'
          fill='#6A6A6A'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_bd_157_7'
        x='0.235812'
        y='-1.76419'
        width='94.5284'
        height='97.0324'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation='4.06911' />
        <feComposite
          in2='SourceAlpha'
          operator='in'
          result='effect1_backgroundBlur_157_7'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='2.50406' />
        <feGaussianBlur stdDeviation='4.06911' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0'
        />
        <feBlend
          mode='normal'
          in2='effect1_backgroundBlur_157_7'
          result='effect2_dropShadow_157_7'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect2_dropShadow_157_7'
          result='shape'
        />
      </filter>
      <clipPath id='clip0_157_7'>
        <rect
          width='27.5447'
          height='27.5447'
          fill='white'
          transform='translate(33.7275 31.7277)'
        />
      </clipPath>
    </defs>
  </svg>
)
