export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://workspacedowntown.com/wp-content/uploads/2024/05/co-desk.jpg.webp"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              React developers are more than just coders—they're problem-solvers
              who care deeply about creating seamless user experiences. With an
              eye for detail and a love for clean, maintainable code, they build
              dynamic interfaces that feel effortless to use. Whether it’s
              optimizing performance, mastering component design, or staying up
              to date with the latest ecosystem trends, passionate React
              developers bring creativity and craftsmanship to every project.
            </p>
            <p className="mt-4 text-gray-600">
              Their work goes beyond functionality—they aim for intuitive
              design, accessibility, and scalability. Fueled by curiosity and a
              collaborative spirit, they continually push the boundaries of what
              the web can do
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
