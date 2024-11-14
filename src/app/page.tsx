import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Page() {
  return (
    <div>
      <ThemeToggle />
      <div className="bg-red-400 dark:bg-gray-500">Page</div>
    </div>
  );
}
