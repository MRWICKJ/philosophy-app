import { useParams } from "react-router-dom";
import { philosophicalTopics } from "../lib/data";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
// import { MainNav } from "./MainNav";
import { Link } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";

interface RouteParams {
  id: string;
}

export default function CategoryDetail() {
  const { id } = useParams() as unknown as RouteParams;
  const category = philosophicalTopics[Number(id)];

  if (!category) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white p-6">
        {/* <MainNav /> */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="text-zinc-400">The requested category does not exist.</p>
          <Link to="/" className="text-indigo-400 hover:underline mt-4 block font-bold">
            Back to Main Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* <MainNav /> */}
      <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-indigo-400 hover:underline mt-8 block font-bold">
          <ArrowBigLeft className="inline"/> Back to Main Page
        </Link>
        <h1 className="text-3xl font-bold mb-8">{category.category}</h1>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {category.items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700">
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1">{item.philosophers}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-zinc-800/50 rounded-b-lg">
                <img 
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-80 object-contain mb-4 rounded"
                />
                <p className="text-zinc-300">{item.explanation}</p>
                <Link to={`/category/${id}/${index}`} className="text-indigo-400 hover:underline mt-4 block font-bold">
                  Explore Topic
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
      </div>
    </div>
  );
}