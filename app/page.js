import React from 'react';

export default function Home() {
  return (
    <main className='bg-secondary'>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-primary md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary">Tailwind CSS</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required="required"
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>
      <section className="container px-4 py-10 mx-auto bg-secondary">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">Our Pricing Plans</h2>
      <div className="flex flex-col items-center justify-center mt-8 space-y-6 lg:space-y-0 lg:space-x-6 lg:flex-row">
        
        {/* Basic Plan */}
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">Basic Plan</h3>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">₹149 / month</p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 1</span>
            </li>
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 2</span>
            </li>
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 3</span>
            </li>
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 4</span>
            </li>
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 5</span>
            </li>
          </ul>
          <button className="w-full px-4 py-2 mt-6 text-secondary bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">Choose Plan</button>
        </div>

        {/* Best Seller Plan */}
        <div className="relative w-full max-w-sm p-6 bg-white border border-purple-400 rounded-lg shadow-lg dark:bg-gray-800">
          <div className="absolute top-0 right-0 px-3 py-1 text-sm font-semibold text-white bg-purple-400 rounded-bl-lg">Best Seller</div>
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">Standard Plan</h3>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">₹249 / month</p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 1</span>
            </li>
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 2</span>
            </li>
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 3</span>
            </li>
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 4</span>
            </li>
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 5</span>
            </li>
          </ul>
          <button className="w-full px-4 py-2 mt-6 text-secondary bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">Choose Plan</button>
        </div>

        {/* Premium Plan */}
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">Premium Plan</h3>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">₹399 / month</p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 1</span>
            </li>
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 2</span>
            </li>
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 3</span>
            </li>
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 4</span>
            </li>
            <li className="flex items-center">
              <span className="ml-2 text-gray-600 dark:text-gray-400">Benefit 5</span>
            </li>
          </ul>
          <button className="w-full px-4 py-2 mt-6 text-secondary bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">Choose Plan</button>
        </div>
      </div>
    </section>
    </main>
  );
}

