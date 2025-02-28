import { LayoutProps } from '@/models/index';

export const EmptyLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h1>EmptyLayout</h1>
      {children}
    </div>
  );
};
