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