import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import GlobalStyles from '@/styles/GlobalStyles';
import StyledComponentsRegistry from '@/lib/styledComponentsRegistry';
import { TodoContextProvider } from '@/provider/todo.provider';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600'] });

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'Technical test for harpio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TodoContextProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </TodoContextProvider>
      </body>
    </html>
  );
}
