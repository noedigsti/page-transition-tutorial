import Layout from '../components/Layout';
import '../styles/index.css';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useRouter } from 'next/router';

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const [isFirstMount, setIsFirstMount] = React.useState(true);
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component
          isFirstMount={isFirstMount}
          key={router.route}
          {...pageProps}
        />
      </AnimatePresence>
    </Layout>
  );
};

export default MyApp;
