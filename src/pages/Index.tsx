
import { Clock, Book, CalendarIcon } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto py-6">
          <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Five-Minute Brainboost
          </h1>
          <p className="text-center text-lg text-gray-600 mt-2">
            Expand your knowledge in just 5 minutes a day
          </p>
        </div>
      </header>
      
      <main className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Choose a Learning Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard
            title="History"
            description="Journey through time and explore key historical events and figures that shaped our world."
            category="history"
            icon={<CalendarIcon className="w-8 h-8" />}
          />
          
          <CategoryCard
            title="Science"
            description="Discover fundamental scientific concepts and breakthroughs that revolutionized our understanding."
            category="science"
            icon={<Book className="w-8 h-8" />}
          />
          
          <CategoryCard
            title="Coding"
            description="Learn essential programming concepts and techniques to build your technical skills."
            category="coding"
            icon={<Clock className="w-8 h-8" />}
          />
        </div>

        <div className="mt-16 bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Select a learning category that interests you</li>
            <li>Choose a 5-minute lesson from the available topics</li>
            <li>Start the timer and absorb the key concepts</li>
            <li>Complete the lesson before the timer ends</li>
            <li>Return daily to build your knowledge consistently</li>
          </ol>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>Five-Minute Brainboost &copy; {new Date().getFullYear()}</p>
          <p className="text-gray-400 text-sm mt-1">Learn something new every day</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
