What is Next.js?
-Next.js is a React framework for building full stack web applications
-It uses React for building user interfaces
-Provides additional features that enable you to build production-ready applications
-These features include routing,optimized rendering,data fetching,building,compiling and more
-You don't need to install additional packages as Next.js provides everything you need
-Options and conventions should be followed to implement these features

What is React.js?
-It is not feasible to create a fully-featured application ready for production
-React is a library for building interfaces
-You need to make decisions about other features such as routing,data fetching and more

Why learn Next.js?
Next.js simplifies the process of building production-ready web applications
1. File based easy Routing
2. API routes
3. Rendering
4. Data fetching
5. Styling
6. Optimization
7. Dev and prod build system

Prerequisites---
HTML
CSS
Modern JavaSript
React fundamentals

React Server Components(RSC)---
React Server Components is a new architecture that was introduced by the React team and quickly adopted by Next.js.
This architecture introduces a new approach for creating React components by dividing them into two distinct types:
-Server Components
-Client Components

Server Components--
BY default Next.js treats all components as Server components.
These components can perform server-side tasks like reading files or fetching data directly from a database.
The trade-off is that they can't use React hooks or handle user interactions.

Client Components--
To create a Client component,you will need to add the "use client" directive at the top of your component file.
While Client components can't perform server-side tasks like reading files,they can use hooks and handle user interactions.
Client components are the traditional React components that you are already familiar with from previous versions of React.

React Server Components and Routing---
As we get into routing,you will see practical examples of both types.
Work with server components that wait for certain operations to complete before rendering content.
Use client components to take advantage of hooks from the routing module.

Routing---
Next.js has a file-system based routing system.
URLs you can access in your browser are determined by how you organize files and folders in your code.

Routing conventions---
1. All routes must live inside the app folder
2. Route files must be named either page.js or page.tsx
3. Each folder represents a segment of the URL path
When these conventions are followed,the file automatically becomes available as a route

vivdabhfythbwiym

Private folders---
A way to tell Next.js,"Hey,this folder is just for internal stuff-don't include it in the routing system."
The folder and all its subfolders are executed from routing
Add an underscore at the start of the folder name
-Private folders are super useful for a branch of things
-Keeping your UI logic separate from routing logic
-Having a consistent way to organize internal files in your project
-Making it easier to group related files in your code editor
-Avoiding potential naming conflicts with future  Next.js file naming conventions
**If you actually want an underscore in your URL,use "%5F" instead.That is just the URL-encoded version of an underscore.

Route groups---
Lets us logically organize our routes and project files without impacting the URL structure.
Let's implement authentication routes
-Register
-Login
-Forgot password

Layout---
Pages are route-specific UI components
A layout is UI that is shared between multiple pages in your app

How to create layouts?
Default export a React component from a layout.js layout.tsx file
That component takes a children prop,which Next.js will populate with your page content

Multiple root layouts---
Route Group uses:
-Organize our project structure without affecting URLs
-Apply layouts selectively to specific parts of our app

Routing metadata---
The metadata API in Next.js is a powerful feature that let us define metadata for each page.
Metadata ensures our content looks great when it is shared or indexed by search engines.
Two ways to handle metadata in layout.tsx or page.tsx:
1. export a static metadata object
2. export a dynamic generateMedia function

Configuring metadata---
Metadata rules:
-Both layout.tsx and page.tsx can export metadata.Layout metadata applies to all its pages,while page metadata is specific to that page.
-Metadata follows a top-down order,starting from the root level.
-When metadata exists in multiple places along a route,they merge together,with page metadata overriding layout metadata for matching properties.

Navigation---
File based routing system
Defining routes for our application's root,nested routes,dynamic routes, and catch-all routes.
We have been typing URLs directly in the browser to these routes
Users:
-click on links
-get redirected after certain actions

Link component navigation---
For client-side navigation,Next.js gives us the <Link> component
The '<Link>' component is a React component that extends the HTML '<a>' element, and it's the primary way to navigate between routes in Next.js
To use it,we will need to import it from "next/link".

params and searchParams---
For a given URL,
params is a promise that resolves to an object containing the dynamic route parameters(like id).
searchParams is a promise that resolves to an object containing the query parameters(like filter & sorting).
While page.tsx has access to both params and searchParams,layout.tsx only has access to params only.
**If params & searchParams are in client component then we have to use 'use' hook from React.

Templates---
Templates are similar to layouts in that they are also UI shared between multiple pages in your app.
Whenever a user navigates between routes sharing a template,you get a completely fresh start
- a new template component instance is mounted
- DOM elements are recreated
- state is cleared
- effects are re-synchronized
Create a template by exporting a default React component from a template.js or template.tsx file.
Like layouts,templates need to accept a children prop to render the nested route segments

Special files---
page.tsx
layout.tsx
template.tsx
not-found.tsx
Loading.tsx -> loading states
error.tsx -> error handling

loading.tsx---
This file help us to create loading states that users see while waiting for content to load in a specific route segment.
The loading states appear instantly when navigating,letting users know that the application is responsive and actively loading content.

loading.tsx benefits---
1. It gives users immediate feedback when they navigate somewhere new.
   This makes your app feel snappy and responsive,and users know their click actually did something.
2. Next.js keeps shared layouts interactive while new content loads.
   Users can still use things like navigation menus or sidebars even if the main content is not ready yet.

error.tsx---
- It automaically wraps route segments and their nested children in a React Error Boundary.
- You can create custom error UIs for specific segments using the file-system hierarchy
- It isolates errors to affected segments while keeping the rest of your app functional.
- It enables you to attepmt to recover from an error without requiring a full page reload

Handling errors in a nested routes---
- Errors always bubble up to find the closest parent error boundary.
- An error.tsx file handles errors not just for its own folder,but for all the nested child segments
  below  it too.
- By strategically placing error.tsx files at different levels in your route folders,you can 
  control exactly how detailed your error handling gets.
- Where you put your error.tsx file makes a huge difference-it determines exactly which parts of your
  UI get affected when things go wrong.

Handing errors in layouts---
- An error.tsx file will handle errors for all its nested child segments.
- There is an interesing catch with layout.tsx components in the same segment
- The error boundary would not catch errors thrown in layout.tsx within the same segment because of how
  the component hierarchy works
- The layout actually sits above the error boundary in the component tree.

Handling global errors---
- If an error boundary can't catch errors inn the layout.tsx file form the same segment,what about errors in the root layout?
- If does not have a parent segment - how do we handle those errors?
- Next.js prvides a special file called global-error.tsx that goes in your root app directory.
- This is last line of defense when something goes catastrophically wrong at the highest level of your app.
- works only in production mode
- requires html and body tags to be rendered

Parallel routes---
- what they are?
Ans:- Parallel routing is an advanced routing mechanism that lets us render multiple pages simultaneously
      within the same  layout
- how to set them up?
Ans:- Parallel routes in Next.js are defined using a feature known as "slots"
    - Slots help organize content in a modular way
    - To create a slot, we use the `@folder` naming convention
    - Each defined slot automatically becomes a prop in its corresponding `layout.tsx` file
- why they are super useful when building complex user interface
Ans:- Dashboards with multiple sections
    - Split-view interfaces
    - Multi-pane layouts
    - Complex admin interfaces
- Parallel route benefits?
Ans:- Parallel routes are great for splitting a layout into manageable slots(especially when different 
      teams work on differnt parts)
    - Independent route handling
    - Sub-navigation
- Independent route handling?
Ans:- Each slot in your layout,such as users,revenue and notifications, can handle its own loading
      and error states.
    - This granular comtrol is particularly useful in scenerios where different sections of the page 
      load at varying speeds or encounter unique errors.
- Sub-navigation routes?
Ans:- Each slot can essentially function as a mini-application, complete with its own navigation 
      and state management.
    - Users can interact with each section separately, applying filters, sorting data or navigating 
      through pages without affecting other parts.

Unmatched routes---
Navigation from the UI:-
When navigating through the UI(like clicking links), Next.js keeps showing whatever was in the
unmatched slots before.
Page reload:-
Next.js looks for a `default.tsx` file in each unmatched slot.
This file is critical as it serves as a fallback to render content when the framework cannot retrieve
a slot's active state from the current URL.
Without the file, you will get a 404 error.

Conditional routes---
- Imagine you want to show different content based on whether a user is logged in or not
- You might want to display a dashboard for authenticated users but show a login page for those who are not
- Conditional routes allows us to achieve this while maintaining completely separate code on the same URL

Advanced routing patterns---
1. Parallel routes
2. Intercepting routes
    a. Understanding the core concepts and conventions
    b. Practical implementation

Intercepting routes---
- Intercepting routes is an advanced routing mechanism that allows you to load a route from another part of
  your application within the current layout
- It is particularly useful when you want to display new content while keeping your user in the same context

Intercepting routes conventions---
(.) to match segments on the same level
(..) to match segments on one level above
(..)(..) to match segments on two level above
(...) to match segments from the root app directory
