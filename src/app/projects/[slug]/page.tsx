import ProjectDetailClient from '@/components/layout/ProjectDetailClient';
import { getProjectBySlug, projects } from '@/lib/constants';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Blackphilz',
    };
  }

  return {
    title: `${project.title} | Blackphilz Projects`,
    description: project.challenge, // Using challenge as description or a specific summary if available
    openGraph: {
      title: `${project.title} | Blackphilz`,
      description: project.challenge,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find Next Project for the footer link
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return <ProjectDetailClient project={project} nextProject={nextProject} />;
}