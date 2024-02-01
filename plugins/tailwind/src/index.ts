import plugin from 'tailwindcss/plugin';

export const xionPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    '.fixed-center': {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '.fixed-top': {
      position: 'fixed',
      top: '0%',
      left: '50%',
      transform: 'translate(-50%, 0%)',
    },
    '.fixed-left': {
      position: 'fixed',
      top: '50%',
      left: '0%',
      transform: 'translate(0%, -50%)',
    },
    '.fixed-right': {
      position: 'fixed',
      top: '50%',
      right: '0%',
      transform: 'translate(0%, -50%)',
    },
    '.fixed-bottom': {
      position: 'fixed',
      bottom: '0%',
      left: '50%',
      transform: 'translate(-50%, 0%)',
    },
    '.fixed-bottom-left': {
      position: 'fixed',
      bottom: '0',
      left: '0',
    },
    '.fixed-bottom-right': {
      position: 'fixed',
      bottom: '0',
      right: '0',
    },
    '.fixed-top-left': {
      position: 'fixed',
      top: '0',
      left: '0',
    },
    '.fixed-top-right': {
      position: 'fixed',
      top: '0',
      right: '0',
    },
  });
});
