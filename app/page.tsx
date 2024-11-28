import { client } from '@/libs/client';

interface Category {
  id: string;
  category: string;
  explanation: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

interface Categories {
  contents: Category[];
  totalCount: number;
  offset: number;
  limit: number;
}

interface Question {
  id: string;
  category: Category;
  class: string;
  section: string;
  questionType: string;
  question: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  choice5: string;
  answeres: number[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

interface Questions {
  contents: Question[];
  totalCount: number;
  offset: number;
  limit: number;
}

export default async function Home() {
  const { contents: categories }: Categories = await client.get({ endpoint: "categories" });
  const { contents: questions }: Questions = await client.get({ endpoint: "questions" });

  return (
    <div>
      <main>
        {categories.map((category) => {
          const question = questions.filter((question) => question.category.id === category.id);
          return (
            <>
              <div key={category.id}>{category.category}</div>
              {question.map((question) => (
                <div key={question.id}>{question.question}</div>
              ))}
            </>
          )
        })}
      </main>
    </div>
  );
}