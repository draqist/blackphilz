import ProjectCatalog from '@/components/projects/ProjectCatalog';

export default function ProjectsPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Add padding top to account for fixed header */}
      <div className="pt-32">
        <ProjectCatalog />
      </div>
    </main>
  );
}