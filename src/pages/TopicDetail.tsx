import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { philosophicalTopics } from "../lib/data"; // Import your data structure
import { ArrowBigLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export function TopicDetail() {
  const { id, itemIndex } = useParams();
  const navigate = useNavigate();
  const category = philosophicalTopics[Number(id)];
  const item = category?.items[Number(itemIndex)];

  if (!item) {
    return <div className="p-4 text-center text-zinc-100">Topic not found</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="container mx-auto p-4 max-w-4xl bg-zinc-900 text-zinc-100">
        <Button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-zinc-700 text-zinc-100 rounded-lg hover:bg-zinc-600"
        >
          <ArrowBigLeft className="inline"/>Back to Category
        </Button>
        <Card className="mb-6 bg-zinc-800 dark:bg-zinc-900 border border-zinc-700 dark:border-zinc-600">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-92 object-contain rounded-t-lg"
          />
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-zinc-100">
              {item.title}
            </CardTitle>
            <div className="flex gap-2 flex-wrap">
              {item.philosophers.split(", ").map((philosopher) => (
                <Badge
                  key={philosopher}
                  variant="outline"
                  className="text-sm text-zinc-200 border-zinc-500"
                >
                  {philosopher}
                </Badge>
              ))}
            </div>
          </CardHeader>

          <CardContent>
            <div className="mb-6 ">
              <h3 className="text-xl font-semibold mb-2 text-zinc-100">
                Description
              </h3>
              <p className="text-zinc-400">{item.description}</p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-zinc-100">
                Explanation
              </h3>
              <p className="text-zinc-200">{item.explanation}</p>
            </div>

            <Separator className="my-6 bg-zinc-600 dark:bg-zinc-700" />

            {item.famous_quote && (
              <>
                <div className="my-6">
                  <span className="text-lg font-semibold text-indigo-300">
                    {item.famous_quote.split("—")[0].trim()}
                  </span>
                  <footer className="mt-2 font-medium text-zinc-300">
                    — {item.famous_quote.split("—")[1].trim()}
                  </footer>
                </div>
                <Separator className="my-6 bg-zinc-600 dark:bg-zinc-700" />
              </>
            )}

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-zinc-100">
                Recommended Reading
              </h3>
              <div className="space-y-4">
                {item.recommended_books.map((book) => (
                  <div
                    key={book.title}
                    className="flex justify-between items-start p-3 bg-zinc-600 rounded-lg dark:bg-zinc-700"
                  >
                    <div>
                      <p className="font-medium text-zinc-100">{book.title}</p>
                      <p className="text-sm text-zinc-300">— {book.author}</p>
                    </div>
                    <span className="text-sm text-zinc-400">
                      {Number(book.year) > 0 ? book.year : `${Math.abs(Number(book.year))} BCE`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
