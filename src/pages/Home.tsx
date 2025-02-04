import { Link } from "react-router-dom";
import { philosophicalTopics } from "../lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {philosophicalTopics.map((category, index) => (
          <Link to={`/category/${index}`} key={category.category}>
            <Card className="h-full transition-transform hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <img 
                  src={category.items[0].imageUrl}
                  alt={category.category}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{category.category}</CardTitle>
                <p className="text-zinc-300">
                  {category.items.length} key topics
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </main>
      
    </div>
  );
}