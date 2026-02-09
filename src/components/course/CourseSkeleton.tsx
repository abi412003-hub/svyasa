import { Skeleton } from "@/components/ui/skeleton";

const CourseSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Skeleton */}
      <div className="h-screen bg-secondary/20 relative">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <Skeleton className="h-4 w-64 mb-6" />
          <div className="flex gap-3 mb-6">
            <Skeleton className="h-8 w-24 rounded-full" />
            <Skeleton className="h-8 w-32 rounded-full" />
          </div>
          <Skeleton className="h-12 w-[60%] mb-4" />
          <Skeleton className="h-6 w-[40%] mb-8" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-44" />
          </div>
        </div>
      </div>

      {/* Overview Skeleton */}
      <div className="py-16 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[55%]">
            <Skeleton className="h-5 w-32 mb-4" />
            <Skeleton className="h-10 w-48 mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
          <div className="lg:w-[45%]">
            <Skeleton className="h-80 w-full rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Highlights Skeleton */}
      <div className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <Skeleton className="h-5 w-40 mb-4" />
          <Skeleton className="h-10 w-56 mb-10" />
          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-64 w-[300px] shrink-0 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSkeleton;
