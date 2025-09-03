export const Gallery = () => {
  const photos = [
    "/images/studio1.jpg",
    "/images/studio2.jpg",
    "/images/studio3.jpg",
    "/images/studio4.jpg",
    "/images/studio5.jpg",
    "/images/studio6.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12">
          Studio Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`Studio ${idx + 1}`}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
