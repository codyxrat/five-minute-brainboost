
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
}

export function CategoryCard({ title, description, category, icon }: CategoryCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => navigate(`/lessons/${category}`)}
        >
          Start Learning
        </Button>
      </CardFooter>
    </Card>
  );
}
