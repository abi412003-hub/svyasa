import { Skeleton } from "@/components/ui/skeleton";

const CategorySkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Skeleton */}
      <div className="h-[60vh] min-h-[500px] bg-secondary/20 relative">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <Skeleton className="h-4 w-48 mb-6" />
          <Skeleton className="h-8 w-32 mb-4" />
          <Skeleton className="h-12 w-[60%] mb-4" />
          <Skeleton className="h-6 w-[40%] mb-8" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="py-16 container mx-auto px-4">
        <Skeleton className="h-8 w-64 mb-4" />
        <Skeleton className="h-10 w-48 mb-8" />

        <div className="flex gap-4 mb-8">
          <Skeleton className="h-12 w-64" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-6">
              <div className="flex justify-between mb-4">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-12 w-12 rounded-full" />
              </div>
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-3/4 mb-4" />
              <Skeleton className="h-4 w-40 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3 mb-4" />
              <div className="flex gap-2 mb-4">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-24" />
              </div>
              <Skeleton className="h-px w-full mb-4" />
              <div className="flex justify-between">
                <Skeleton className="h-5 w-28" />
                <Skeleton className="h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
