import type { LinksFunction } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import './tailwind.css';
import { PropsWithChildren } from 'react';

export const links: LinksFunction = () => [];

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col items-center justify-items-center min-h-screen">
          <main className="flex flex-col flex-grow w-full justify-center py-8 md:px-8 items-center">
            <h1 className="text-3xl font-bold mb-8">Remix D1 App</h1>
            {/* children will be the root Component, ErrorBoundary, or HydrateFallback */}
            {children}
          </main>
          <footer className="font-bold flex items-center justify-center bg-gray-900 w-full p-4 md:p-8">
            <a
              className="underline"
              href="https://github.com/purinx/remix-d1-app"
            >
              Github
            </a>
          </footer>
        </div>
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
