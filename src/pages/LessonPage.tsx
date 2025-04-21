
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { lessons, Lesson } from "@/data/lessons";
import { Timer } from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (lessonId) {
      const lesson = lessons.find(lesson => lesson.id === lessonId);
      if (lesson) {
        setCurrentLesson(lesson);
      } else {
        navigate('/');
      }
    }
  }, [lessonId, navigate]);

  const handleNextPage = () => {
    if (currentLesson && currentPageIndex < currentLesson.content.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleTimerComplete = () => {
    setIsComplete(true);
  };

  if (!currentLesson) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate(`/lessons/${currentLesson.category}`)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lessons
            </Button>
            <h1 className="text-xl font-bold">{currentLesson.title}</h1>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
          <div className="mt-4">
            <Timer duration={300} onComplete={handleTimerComplete} />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto flex-grow py-8 px-4 flex flex-col">
        {isComplete ? (
          <Card className="max-w-2xl mx-auto p-8 text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Lesson Complete!</h2>
            <p className="text-gray-600 mb-8">
              Great job! You've completed this 5-minute lesson on {currentLesson.title}.
            </p>
            <div className="space-x-4">
              <Button onClick={() => navigate(`/lessons/${currentLesson.category}`)}>
                More {currentLesson.category.charAt(0).toUpperCase() + currentLesson.category.slice(1)} Lessons
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                Back to Categories
              </Button>
            </div>
          </Card>
        ) : (
          <div className="max-w-2xl mx-auto w-full">
            <Card className="p-6 mb-6">
              <p className="text-lg leading-relaxed">
                {currentLesson.content[currentPageIndex]}
              </p>
            </Card>
            
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handlePrevPage}
                disabled={currentPageIndex === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <div className="text-sm text-gray-500 self-center">
                {currentPageIndex + 1} of {currentLesson.content.length}
              </div>
              <Button onClick={handleNextPage}>
                {currentPageIndex < currentLesson.content.length - 1 ? (
                  <>Next <ArrowRight className="ml-2 h-4 w-4" /></>
                ) : (
                  <>Complete <CheckCircle className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Five-Minute Brainboost &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default LessonPage;
