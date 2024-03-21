const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'tranparent',

  white: { DEFAULT: 'hsl(var(--white))' },
  black: { DEFAULT: 'hsl(var(--black))' },

  neutral: {
    '50': 'var(--neutral-50)',
    '100': 'var(--neutral-100)',
    '200': 'var(--neutral-200)',
    '300': 'var(--neutral-300)',
    '400': 'var(--neutral-400)',
    '500': 'var(--neutral-500)',
    '600': 'var(--neutral-600)',
    '700': 'var(--neutral-700)',
    '800': 'var(--neutral-800)',
    '900': 'var(--neutral-900)',
    '950': 'var(--neutral-950)',
  },

  gray: {
    '50': 'var(--gray-50)',
    '100': 'var(--gray-100)',
    '200': 'var(--gray-200)',
    '300': 'var(--gray-300)',
    '400': 'var(--gray-400)',
    '500': 'var(--gray-500)',
    '600': 'var(--gray-600)',
    '700': 'var(--gray-700)',
    '800': 'var(--gray-800)',
    '900': 'var(--gray-900)',
    '950': 'var(--gray-950)',
  },

  warning: {
    '50': 'var(--warning-50)',
    '100': 'var(--warning-100)',
    '200': 'var(--warning-200)',
    '300': 'var(--warning-300)',
    '400': 'var(--warning-400)',
    '500': 'var(--warning-500)',
    '600': 'var(--warning-600)',
    '700': 'var(--warning-700)',
    '800': 'var(--warning-800)',
    '900': 'var(--warning-900)',
    '950': 'var(--warning-950)',
  },

  danger: {
    '50': 'var(--danger-50)',
    '100': 'var(--danger-100)',
    '200': 'var(--danger-200)',
    '300': 'var(--danger-300)',
    '400': 'var(--danger-400)',
    '500': 'var(--danger-500)',
    '600': 'var(--danger-600)',
    '700': 'var(--danger-700)',
    '800': 'var(--danger-800)',
    '900': 'var(--danger-900)',
    '950': 'var(--danger-950)',
  },

  success: {
    '50': 'var(--success-50)',
    '100': 'var(--success-100)',
    '200': 'var(--success-200)',
    '300': 'var(--success-300)',
    '400': 'var(--success-400)',
    '500': 'var(--success-500)',
    '600': 'var(--success-600)',
    '700': 'var(--success-700)',
    '800': 'var(--success-800)',
    '900': 'var(--success-900)',
    '950': 'var(--success-950)',
  },

  primary: {
    '50': 'var(--primary-50)',
    '100': 'var(--primary-100)',
    '200': 'var(--primary-200)',
    '300': 'var(--primary-300)',
    '400': 'var(--primary-400)',
    '500': 'var(--primary-500)',
    '600': 'var(--primary-600)',
    '700': 'var(--primary-700)',
    '800': 'var(--primary-800)',
    '900': 'var(--primary-900)',
    '950': 'var(--primary-950)',
  },
} as const;

const borderRadius = {
  xs: 'var(--radius)',
  sm: 'calc(var(--radius) * 2)',
  md: 'calc(var(--radius) * 3)',
  lg: 'calc(var(--radius) * 4)',
  xl: 'calc(var(--radius) * 6)',
  '2xl': 'calc(var(--radius) * 8)',
  '3xl': 'calc(var(--radius) * 10)',
  full: '999px',
} as const;

const spacing = {
  '0': '0px',
  '2': 'var(--spacing)',
  '4': 'calc(var(--spacing) * 2)',
  '6': 'calc(var(--spacing) * 3)',
  '8': 'calc(var(--spacing) * 4)',
  '12': 'calc(var(--spacing) * 6)',
  '16': 'calc(var(--spacing) * 8)',
  '24': 'calc(var(--spacing) * 12)',
  '32': 'calc(var(--spacing) * 16)',
  '48': 'calc(var(--spacing) * 24)',
  '64': 'calc(var(--spacing) * 32)',
  '128': 'calc(var(--spacing) * 64)',
  '256': 'calc(var(--spacing) * 128)',
  '512': 'calc(var(--spacing) * 256)',
  '768': 'calc(var(--spacing) * 384)',
  '1024': 'calc(var(--spacing) * 512)',
  '1440': 'calc(var(--spacing) * 720)',
  '1/3': '33.3%',
  half: '50%',
  full: '100%',
} as const;

const fontSize = {
  'title-1': 'calc(var(--font-size) * 4)',
  'title-2': 'calc(var(--font-size) * 3)',
  'title-3': 'calc(var(--font-size) * 2.25)',
  'title-4': 'calc(var(--font-size) * 2)',
  'title-5': 'calc(var(--font-size) * 1.75)',
  'title-6': 'calc(var(--font-size) * 1.5)',
  'body-1': 'calc(var(--font-size) * 1.375)',
  'body-2': 'calc(var(--font-size) * 1.25)',
  'body-3': 'calc(var(--font-size) * 1.125)',
  'body-4': 'calc(var(--font-size) * 1)',
  'caption-1': 'calc(var(--font-size) * 0.875)',
  'caption-2': 'calc(var(--font-size) * 0.75)',
} as const;

const fontWeight = {
  bold: '700',
  'semi-bold': '600',
  medium: '500',
  regular: '400',
  light: '300',
} as const;

const lineHeight = {
  '133%': '133%',
  '150%': '150%',
  '166%': '166%',
  '200%': '200%',
} as const;

const boxShadow = {
  xs: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  sm: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  md: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  lg: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
} as const;

export const XION_STYLE = {
  colors,
  borderRadius,
  spacing,
  fontSize,
  fontWeight,
  lineHeight,
  boxShadow,
};
