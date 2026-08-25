import { createInertiaApp } from '@inertiajs/react';
import Layout from './components/shared/Layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  progress: {
    color: '#4B5563',
    showSpinner: true,
  },
  layout: () => Layout
});
