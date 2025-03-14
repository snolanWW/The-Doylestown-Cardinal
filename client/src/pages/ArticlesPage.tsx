import React, { useState } from "react";
import { Search, Share2, ChevronRight, Calendar, User2 } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for demonstration
const mockArticles = [
  {
    id: 1,
    title: "How Our Emotions Contribute to Heart Disease",
    excerpt:
      "Did you know that our emotions can also contribute to risks of heart attack and stroke?",
    category: "Live",
    author: "Jill Sonlin",
    date: "2025-02-01",
    image:
      "https://doylestowncardinal.com/wp-content/uploads/2025/02/HeartHealthy-990x660.jpg",
    tags: ["Live"],
  },
  {
    id: 2,
    title: "Cozy Cupid: Valentine’s Day Dates",
    excerpt:
      "Are you looking for a cozy night with your love? Here’s your guide.",
    category: "Community",
    author: "Lauren Heine",
    date: "2025-02-01",
    image:
      "https://doylestowncardinal.com/wp-content/uploads/2025/02/WeissEngBlog25-768x514.jpg",
    tags: ["Uncategorized"],
  },
  {
    id: 3,
    title: "“Life is for Living:” Organizational Wisdoms from Wingmoms",
    excerpt:
      "Nothing is for certain except death and taxes. And laundry. A loyal friend through life’s trials, Laundry will always be there for us. ",
    category: "Live",
    author: "Natalya Bucuy",
    date: "2025-02-01",
    image:
      "https://doylestowncardinal.com/wp-content/uploads/2025/01/458305498_392015483999134_6822641435809695635_n-990x707.png",
    tags: ["Live"],
  },
];

const categories = [
  "All Categories",
  "Things To Do",
  "Hotels",
  "Restaurants",
  "Art/Music",
  "Style",
  "Fitness",
  "Life",
  "Business",
  "Technology",
  "Real Estate"
];

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [visibleArticles, setVisibleArticles] = useState(6);

  const handleLoadMore = () => {
    setVisibleArticles((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative h-[45vh]">
        <div className="absolute inset-0 bottom-24 overflow-hidden rounded-2xl shadow-lg mx-auto w-[95%] mt-2">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
            alt="Journalism background"
            className="w-full h-[105%] object-cover blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/80 to-charcoal-gray/50" />
        </div>
        <div className="relative max-w-7xl mx-auto pl-4 pr-4 sm:pl-6 sm:px-6 lg:pl-8 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-off-white mb-4">
              Stories That Matter
            </h1>
            <p className="text-2xl text-off-white mb-8 font-playfair italic max-w-2xl">
              Articles That Connect Our Community
            </p>
          </div>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="relative -mt-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            <div className="flex flex-col space-y-6">
              <div className="flex justify-between items-center">
                <div className="bg-cardinal-red text-white px-6 py-2 rounded-full font-medium">
                  Featured This Month
                </div>
                <Link
                  to="/current-issue"
                  className="bg-cardinal-red text-white px-6 py-2 rounded-full font-medium hover:bg-forest-green transition-colors"
                >
                  View Current Issue
                </Link>
              </div>
              
              <div className="grid grid-cols-12 gap-6">
                <Link to={`/articles/${mockArticles[0].id}`} className="col-span-12 md:col-span-8">
                  <div className="group h-full">
                    <div
                      className="relative h-[500px] rounded-xl overflow-hidden"
                      style={{
                        backgroundImage: `url(${mockArticles[0].image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <span className="text-cardinal-red bg-white px-4 py-1.5 rounded-full text-sm font-medium">
                          Live
                        </span>
                        <h3 className="font-playfair text-3xl font-bold text-white mt-4 mb-3 group-hover:text-cardinal-red transition-colors">
                          How Our Emotions Contribute to Heart Disease
                        </h3>
                        <p className="text-white/90 text-lg">
                          Did you know that our emotions can also contribute to
                          risks of heart attack and stroke?
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                
                <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
                <Link to={`/articles/${mockArticles[1].id}`} className="flex-1">
                    <div
                      className="relative h-full rounded-xl overflow-hidden group"
                      style={{
                        backgroundImage: `url(${mockArticles[1].image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "235px"
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-white bg-cardinal-red px-3 py-1 rounded-full text-sm font-medium">
                          Community
                        </span>
                        <h3 className="font-playfair text-xl font-bold mt-3 mb-2 text-white group-hover:text-cardinal-red transition-colors">
                          Cozy Cupid: Valentine's Day Dates
                        </h3>
                        <p className="text-white/90 text-sm line-clamp-2">
                          Are you looking for a cozy night with your love? Here's
                          your guide.
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to={`/articles/${mockArticles[2].id}`} className="flex-1">
                    <div
                      className="relative h-full rounded-xl overflow-hidden group"
                      style={{
                        backgroundImage: `url(${mockArticles[2].image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "235px"
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-white bg-cardinal-red px-3 py-1 rounded-full text-sm font-medium">
                          Live
                        </span>
                        <h3 className="font-playfair text-xl font-bold mt-3 mb-2 text-white group-hover:text-cardinal-red transition-colors">
                          "Life is for Living:" Organizational Wisdoms
                        </h3>
                        <p className="text-white/90 text-sm line-clamp-2">
                          Nothing is for certain except death and taxes. And
                          laundry.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Search and Filter Bar */}
            <div className="border border-[#333333] rounded-lg p-4 mb-8 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-gray/60"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 gap-8 mb-12">
              {mockArticles.slice(0, visibleArticles).map((article) => (
                <article
                  key={article.id}
                  className="border border-[#333333] rounded-lg overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="relative h-full">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-cardinal-red">
                          {article.category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={14} className="mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <h2 className="font-playfair text-xl font-bold mb-2 group-hover:text-cardinal-red transition-colors">
                        <Link to={`/articles/${article.id}`}>
                          {article.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User2 size={14} className="mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-4">
                          <button className="text-gray-500 hover:text-cardinal-red transition-colors">
                            <Share2 size={18} />
                          </button>
                          <Link
                            to={`/articles/${article.id}`}
                            className="flex items-center text-cardinal-red hover:text-forest-green transition-colors"
                          >
                            Read More
                            <ChevronRight size={16} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {visibleArticles < mockArticles.length && (
              <div className="text-center">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-cardinal-red text-white rounded-full font-semibold hover:bg-cardinal-red/90 transition-colors shadow-sm hover:shadow-md"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-8 sticky top-32">
              {/* Categories - Now First */}
              <div className="border border-[#333333] rounded-lg p-6">
                <h3 className="font-playfair text-xl font-bold mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? "bg-cardinal-red text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Articles - Now Second */}
              <div className="border border-[#333333] rounded-lg p-6">
                <h3 className="font-playfair text-xl font-bold mb-6">
                  Popular Articles
                </h3>
                <div className="space-y-6">
                  {mockArticles.slice(0, 3).map((article) => (
                    <Link
                      key={article.id}
                      to={`/articles/${article.id}`}
                      className="flex gap-4 group"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-medium group-hover:text-cardinal-red transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar size={14} className="mr-1 flex-shrink-0" />
                          {article.date}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="border border-[#333333] rounded-lg p-6">
                <h3 className="font-playfair text-xl font-bold mb-4">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(
                    new Set(mockArticles.flatMap((article) => article.tags)),
                  ).map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-cardinal-red hover:text-white transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;