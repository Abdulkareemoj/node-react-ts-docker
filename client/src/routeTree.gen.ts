/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignInImport } from './routes/sign-in'
import { Route as ContactImport } from './routes/contact'
import { Route as AboutImport } from './routes/about'
import { Route as R404Import } from './routes/404'
import { Route as IndexImport } from './routes/index'
import { Route as ProductIndexImport } from './routes/product/index'
import { Route as BlogIndexImport } from './routes/blog/index'
import { Route as DashboardHomeImport } from './routes/dashboard/Home'

// Create/Update Routes

const SignInRoute = SignInImport.update({
  path: '/sign-in',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const R404Route = R404Import.update({
  path: '/404',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductIndexRoute = ProductIndexImport.update({
  path: '/product/',
  getParentRoute: () => rootRoute,
} as any)

const BlogIndexRoute = BlogIndexImport.update({
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardHomeRoute = DashboardHomeImport.update({
  path: '/dashboard/Home',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/404': {
      id: '/404'
      path: '/404'
      fullPath: '/404'
      preLoaderRoute: typeof R404Import
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/sign-in': {
      id: '/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof SignInImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/Home': {
      id: '/dashboard/Home'
      path: '/dashboard/Home'
      fullPath: '/dashboard/Home'
      preLoaderRoute: typeof DashboardHomeImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      id: '/blog/'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof rootRoute
    }
    '/product/': {
      id: '/product/'
      path: '/product'
      fullPath: '/product'
      preLoaderRoute: typeof ProductIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  R404Route,
  AboutRoute,
  ContactRoute,
  SignInRoute,
  DashboardHomeRoute,
  BlogIndexRoute,
  ProductIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/404",
        "/about",
        "/contact",
        "/sign-in",
        "/dashboard/Home",
        "/blog/",
        "/product/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/404": {
      "filePath": "404.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/sign-in": {
      "filePath": "sign-in.tsx"
    },
    "/dashboard/Home": {
      "filePath": "dashboard/Home.tsx"
    },
    "/blog/": {
      "filePath": "blog/index.tsx"
    },
    "/product/": {
      "filePath": "product/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
