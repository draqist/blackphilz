import NewsCatalog from '@/components/news/NewsCatalog';

export default function NewsPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="pt-32 mt-0 md:mt-10">
        <NewsCatalog />
      </div>
    </main>
  );
}