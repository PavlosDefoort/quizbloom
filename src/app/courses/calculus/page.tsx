import CourseContent from "./content";

export default function Calculus() {
  return (
    <main className="bg-gradient-to-r from-indigo-500 to-sky-500 flex min-h-screen flex-col items-center justify-center p-24">
      <div className="animate-fade-left animate-once animate-ease-out w-full max-w-4xl pt-10">
        <h1 className="text-4xl font-bold sm:text-7xl text-white">
          Calculus I
        </h1>
        {/* 
          <p className="text-white">
            Calculus 1 covers fundamental concepts such as limits, derivatives, and integrals, providing a solid foundation for understanding rates of change and accumulation in mathematics.
          </p>
        */}
        <h2 className="pt-11 text-4xl font-bold sm:text-5xl text-white flex flex-col items-center justify-center">
          Content
        </h2>
        <div className="mt-4 p-6 bg-gradient-to-r from-gray-800 to-sky-500 rounded-lg shadow-lg">
          <CourseContent />
        </div>
      </div>
    </main>
  );
}
