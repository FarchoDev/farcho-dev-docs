import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import type { ReactNode } from 'react';
import Footer05Page from '@/components/footer-05/footer-05';
 
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <Footer05Page />
    </HomeLayout>
  );
}