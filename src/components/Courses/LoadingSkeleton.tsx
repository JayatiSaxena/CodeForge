export default function LoadingSkeleton() {
  return (
    <section className="mt-12">

      {/* Section Title Skeleton */}
      <div className="mb-8">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-gray-200"></div>

        <div className="mt-3 h-4 w-72 animate-pulse rounded bg-gray-200"></div>
      </div>


      {/* Course Cards Skeleton */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >

            {/* Thumbnail */}
            <div className="h-48 animate-pulse bg-gray-200"></div>


            {/* Content */}
            <div className="space-y-4 p-6">

              {/* Category */}
              <div className="h-5 w-24 animate-pulse rounded-full bg-gray-200"></div>


              {/* Title */}
              <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>


              {/* Description */}
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
              </div>


              {/* Bottom Info */}
              <div className="flex justify-between pt-4">
                <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
                <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
              </div>


              {/* Button */}
              <div className="h-10 w-full animate-pulse rounded-xl bg-gray-200"></div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}