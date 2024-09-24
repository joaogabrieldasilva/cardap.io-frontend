import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Star } from "lucide-react";

type Props = {
  params: {
    id: string;
  };
};

const menuItems = [
  {
    name: "Classic Burger",
    price: "$10.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHnIT7yj6IlBCX-SHFNqI61HEuVzsaMkJfA&s",
  },
  {
    name: "Caesar Salad",
    price: "$8.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHnIT7yj6IlBCX-SHFNqI61HEuVzsaMkJfA&s",
  },
  {
    name: "Margherita Pizza",
    price: "$12.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHnIT7yj6IlBCX-SHFNqI61HEuVzsaMkJfA&s",
  },
  {
    name: "Grilled Chicken Sandwich",
    price: "$9.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHnIT7yj6IlBCX-SHFNqI61HEuVzsaMkJfA&s",
  },
  {
    name: "Fish and Chips",
    price: "$14.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHnIT7yj6IlBCX-SHFNqI61HEuVzsaMkJfA&s",
  },
  {
    name: "Vegetarian Pasta",
    price: "$11.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHnIT7yj6IlBCX-SHFNqI61HEuVzsaMkJfA&s",
  },
];

export default function Establishment({ params }: Props) {
  return (
    <div className="md:container p-4">
      <Card className="mb-8 mt-4">
        <CardHeader>
          <div className="bg-gray-200 max-h-80 min-h-52 mb-4 fit-contain rounded-lg" />
          <div>
            <CardTitle>The Gourmet Grill</CardTitle>
            <CardDescription>123 Foodie Lane, Culinary City</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 font-semibold">4.5</span>
            </div>
            <Badge variant="secondary" className="space-x-1">
              <Clock className="h-4 w-4" />
              <span>Opened Now</span>
            </Badge>
          </div>
          <CardDescription>
            Experience culinary excellence at The Gourmet Grill. We offer a
            diverse menu of delicious dishes prepared with the finest
            ingredients.
          </CardDescription>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <Card key={index} className="hover:cursor-pointer">
            <CardContent className="flex items-center p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-muted-foreground">{item.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
