import { FolderKanban, LayoutDashboard } from 'lucide-react';

export const navigation_items = [
  {
    name: 'About',
  },
  {
    name: 'Experience',
  },
  {
    name: 'Projects',
  },
];
export const dashboard_navigation_items = [
  {
    name: 'dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'projects',
    href: '/dashboard/projects',
    icon: FolderKanban,
  },
];
