import * as React from 'react'
import type { MetaFunction, LoaderFunction } from "remix";

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = () => {
 return [];
};

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "Remix Starter Typescript and Tailwind",
    description: "Welcome to remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {

  return (
    <h1 className="m-2 text-xl text-purple-600">Tailwind works</h1>
  );
}
