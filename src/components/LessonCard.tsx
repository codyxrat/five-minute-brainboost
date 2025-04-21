
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Lesson } from "@/data/lessons";

interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle>{lesson.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
          <img 
            src={lesson.imageUrl} 
            alt={lesson.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        <p className="text-muted-foreground line-clamp-3">
          {lesson.content[0]}
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => navigate(`/lesson/${lesson.id}`)}
        >
          Start Lesson
        </Button>
      </CardFooter>
    </Card>
  );
}
