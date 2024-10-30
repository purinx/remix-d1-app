import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';
import { drizzle } from 'drizzle-orm/d1';
import { schema } from '~/db';

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix D1 App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const db = drizzle(context.cloudflare.env.DB, { schema });
  const messages = await db.query.messages.findMany({
    columns: {
      id: true,
      from: true,
      body: true,
    },
  });

  return { messages };
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col max-w-screen w-full md:w-[800px] p-4 flex-grow">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Messages</h2>
        <Link to="/new" className="bg-blue-800 rounded py-1 px-2">
          + New Message
        </Link>
      </div>
      <div className="flex-grow rounded border border-slate-600">
        <table className="h-full table-auto w-full">
          <thead>
            <tr>
              <th className="p-4 text-left border-slate-600 border-b">ID</th>
              <th className="p-4 text-left border-slate-600 border-b">From</th>
              <th className="p-4 text-left border-slate-600 border-b">Body</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id}>
                <td className="px-4 py-2">{message.id}</td>
                <td className="px-4 py-2">{message.from}</td>
                <td className="px-4 py-2">{message.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
