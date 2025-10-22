import React, { useState } from "react";
import {Sun, Moon} from 'lucide-react';

const x = import.meta.env.VITE_X

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const featuredArticles = [
    {
      id: 1,
      title: "NASA Discovers Water Traces on Mars Again",
      desc: "New rover findings confirm the presence of hydrated minerals beneath the Martian surface.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "AI Revolutionizing Modern Education",
      desc: "Schools are integrating artificial intelligence tools to personalize learning for students.",
      image:
        "https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    },
  ];
  console.log(x);

  const categories = [
    { name: "Science", color: "bg-blue-500" },
    { name: "Technology", color: "bg-green-500" },
    { name: "Education", color: "bg-yellow-500" },
    { name: "Space", color: "bg-purple-500" },
    { name: "Health", color: "bg-pink-500" },
  ];

  const recentNews = [
    "Quantum computing is closer to reality than ever.",
    "India’s new education policy focuses on creativity and research.",
    "SpaceX sets a new record for reusable rocket launches.",
    "MIT researchers develop self-healing materials.",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`You searched for: ${searchQuery}`);
    // Here you can integrate API calls or filtering logic
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          SciEd World
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {darkMode ? <Sun/> : <Moon/>}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Explore the World of Science & Education
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Stay informed with the latest discoveries, innovations, and insights in science,
          space, and technology.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-md mx-auto mb-6 flex">
          <input
            type="text"
            placeholder="Ask me anything"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>

        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Read Latest Articles
        </button>
      </section>

      {/* Featured Articles */}
      <section className="px-6 py-10 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {featuredArticles.map((article) => (
          <div
            key={article.id}
            className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition hover:scale-[1.02]"
          >
            <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{article.desc}</p>
              <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="py-10 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-2xl font-semibold text-center mb-6">Explore Articles & News</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto px-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`p-6 rounded-lg text-center text-white font-semibold ${cat.color} hover:opacity-90`}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </section>

      {/* Recent News */}
      <section className="py-10 max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-4">Recent News</h3>
        <ul className="space-y-3">
          {recentNews.map((news, idx) => (
            <li
              key={idx}
              className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              {news}
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 mt-10 border-t border-gray-300 dark:border-gray-700">
        <p>© {new Date().getFullYear()} SciEd World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
