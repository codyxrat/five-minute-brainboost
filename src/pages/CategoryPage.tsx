
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { lessons, Lesson } from "@/data/lessons";
import { LessonCard } from "@/components/LessonCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [categoryLessons, setCategoryLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    if (category) {
      const filtered = lessons.filter(lesson => lesson.category === category);
      setCategoryLessons(filtered);
    }
  }, [category]);

  const getCategoryTitle = () => {
    switch (category) {
      case 'history': return 'History';
      case 'science': return 'Science';
      case 'coding': return 'Coding';
      default: return 'Unknown Category';
    }
  };

  const getCategoryDescription = () => {
    switch (category) {
      case 'history': 
        return 'Explore key moments and figures that shaped our world';
      case 'science': 
        return 'Discover fundamental concepts and scientific breakthroughs';
      case 'coding': 
        return 'Build your programming knowledge with practical concepts';
      default: 
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
          </Button>
          <h1 className="text-3xl font-bold">{getCategoryTitle()} Lessons</h1>
          <p className="text-gray-600 mt-1">{getCategoryDescription()}</p>
        </div>
      </header>
      
      <main className="container mx-auto py-12 px-4">
        {categoryLessons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryLessons.map(lesson => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold">No lessons found</h2>
            <p className="text-gray-600 mt-2">Please select a different category</p>
          </div>
        )}
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

export default CategoryPage;
