interface BlogType {
    slug: string;
    content: string;
    title: string;
    description: string;
    imageUrl?:string
  }

  
  const sampleBlogs: BlogType[] = [
    {
      slug: 'javascript-tutorial',
      content: `
  # Understanding React Hooks
  
  React Hooks are a powerful feature introduced in React 16.8 that allows you to use state and other React features without writing a class.
  
  ## Key Hooks
  
  - **useState:** Allows you to add state to functional components.
  - **useEffect:** Allows you to perform side effects in your components.
  
  Learn how to leverage these hooks to build efficient and clean React components.
  `,
      title: 'Understanding React Hooks',
      description: 'An introduction to React Hooks, explaining how they work and when to use them.',
      imageUrl:"https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      slug: 'getting-started-with-tailwindcss',
      content: `
  # Getting Started with Tailwind CSS
  
  Tailwind CSS is a utility-first CSS framework that allows you to build modern websites without ever leaving your HTML.
  
  ## Why Tailwind CSS?
  
  - **Utility-first:** Style your components directly in your markup.
  - **Customizable:** Easily extend or modify the design system.
  
  This guide will help you set up Tailwind CSS in your project and create responsive, customizable designs.
  `,
      title: 'Getting Started with Tailwind CSS',
      description: 'Learn how to set up Tailwind CSS in your project and start building responsive, customizable designs.',
    },
    {
      slug: 'mastering-typescript-for-react',
      content: `
  # Mastering TypeScript for React
  
  TypeScript brings static typing to JavaScript, which can improve code quality and reduce bugs. This guide will teach you how to integrate TypeScript with React.
  
  ## Topics Covered
  
  - **Props and State:** Define types for your components.
  - **Hooks:** Use TypeScript with React hooks like \`useState\` and \`useEffect\`.
  
  By the end of this guide, you'll have a strong foundation in using TypeScript with React.
  `,
      title: 'Mastering TypeScript for React',
      description: 'A comprehensive guide to using TypeScript with React, including best practices and common pitfalls.',
    },
    {
      slug: 'building-restful-apis-with-nodejs',
      content: `
  # Building RESTful APIs with Node.js
  
  Node.js allows you to build scalable, high-performance server-side applications. This tutorial walks you through building a RESTful API with Node.js and Express.
  
  ## Steps
  
  1. **Set up Express:** Create a basic Express server.
  2. **Define Routes:** Set up RESTful routes for your API.
  3. **Connect to Database:** Use MongoDB or another database to store data.
  
  By the end of this tutorial, you'll have a fully functional RESTful API.
  `,
      title: 'Building RESTful APIs with Node.js',
      description: 'A step-by-step guide to creating RESTful APIs using Node.js and Express.',
    },
    {
      slug: 'understanding-javascript-closures',
      content: `
  # Understanding JavaScript Closures
  
  Closures are a fundamental concept in JavaScript that every developer should understand. This article explores what closures are and how to use them effectively.
  
  ## What are Closures?
  
  Closures are functions that remember the environment in which they were created, even after that environment no longer exists.
  
  ### Example:
  
  \`\`\`javascript
  function outerFunction() {
    let outerVariable = 'I am outside!';
  
    function innerFunction() {
      console.log(outerVariable); // 'I am outside!'
    }
  
    return innerFunction;
  }
  \`\`\`
  
  Learn more about how and when to use closures in your JavaScript code.
  `,
      title: 'Understanding JavaScript Closures',
      description: 'A deep dive into JavaScript closures, explaining their importance and how to leverage them in your code.',
    }
  ];

  

export default sampleBlogs