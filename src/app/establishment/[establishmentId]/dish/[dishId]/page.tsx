import { Clock, Minus, Plus, Star, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  params: {
    id: string;
  };
};

const ingredients = [
  { id: "1", name: "Beef Patty", removable: false },
  { id: "2", name: "Lettuce", removable: true },
  { id: "3", name: "Tomato", removable: true },
  { id: "4", name: "Onion", removable: true },
  { id: "5", name: "Cheese", removable: true },
  { id: "6", name: "Bun", removable: false },
];

export default function Dish({ params }: Props) {
  return (
    <div className="mx-auto max-w-2xl max-h-[90vh] px-4 pt-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex-grow">Classic Burger</CardTitle>
          <img
            className="w-full h-48 object-cover rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHnIT7yj6IlBCX-SHFNqI61HEuVzsaMkJfA&s"
          />
        </CardHeader>
        <ScrollArea>
          <CardContent className="space-y-2">
            <div className="flex flex-col justify-between">
              <p className="text-muted-foreground mb-4">
                Juicy beef patty with fresh vegetables on a toasted bun
              </p>
              <p className="text-2xl font-bold">${10.99}</p>
            </div>
            <div className="mt-14">
              <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {ingredients.map((ingredient) => (
                  <div
                    key={ingredient.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`ingredient-${ingredient.id}`}
                      checked={true}
                      disabled={!ingredient.removable}
                    />
                    <Label
                      htmlFor={`ingredient-${ingredient.id}`}
                      className={
                        !ingredient.removable ? "text-muted-foreground" : ""
                      }
                    >
                      {ingredient.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </ScrollArea>
        <CardFooter className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <Button variant="outline" size="icon" className="rounded-full">
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="mx-2 font-semibold">1</span>
            <Button variant="outline" size="icon" className="rounded-full">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          <Button className="w-1/2">Add to Cart - ${10.99}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
