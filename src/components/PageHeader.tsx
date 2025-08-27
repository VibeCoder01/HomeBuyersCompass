import type { FC, PropsWithChildren } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export const PageHeader: FC<PropsWithChildren<PageHeaderProps>> = ({ title, description, children }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b pb-4 mb-8">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-headline">{title}</h1>
        {description && <p className="text-muted-foreground max-w-2xl">{description}</p>}
      </div>
      {children && <div className="flex-shrink-0">{children}</div>}
    </div>
  );
};
