'use client';

import gsap from 'gsap';
import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export default function TransitionLink({ children, href, className, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    // If we're already on this page, don't do anything
    if (pathname === href) {
      return;
    }

    // 1. THE EXIT ANIMATION (Slide Down to Cover)
    gsap.to(".transition-col", {
      yPercent: 0,
      duration: 0.8,
      stagger: {
        each: 0.05,
        from: "start"
      },
      ease: "power4.inOut",
      onComplete: () => {
        // 2. NAVIGATE after screen is covered
        router.push(href);
      }
    });
  };

  return (
    <Link {...props} href={href} className={className} onClick={handleTransition}>
      {children}
    </Link>
  );
}