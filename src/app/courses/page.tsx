import MediaCard from "./card";

export default function Subjects() {
  const cards = [
    {
      title: "Calculus 1",
      image: "",
      description:
        "Calculus 1 covers fundamental concepts such as limits, derivatives, and integrals, providing a solid foundation for understanding rates of change and accumulation in mathematics.",
      destination: "/courses/calculus",
    },
    {
      title: "Calculus 2",
      image: "",
      description:
        "Calculus 2 explores advanced topics including integration techniques, sequences and series, and applications of calculus in areas such as physics and engineering.",
      destination: "/courses/calculus2",
    },
    {
      title: "Linear Algebra",
      image: "",
      description:
        "Linear Algebra 1 explores the fundamental concepts of vectors, matrices, and systems of linear equations, providing a foundation for understanding transformations and solving real-world problems using linear algebraic techniques.",
      destination: "/courses/linear-algebra",
    },
  ];

  return (
    <main className="bg-gradient-to-r from-indigo-500 to-sky-500 flex min-h-screen flex-col items-center justify-center p-24">
      <div className="mb-12">
        <h1 className="animate-fade-right animate-once animate-ease-out  text-4xl font-bold sm:text-6xl text-white">
          Choose a Course
        </h1>
      </div>
      <div className="">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          {cards.map((card) => (
            <MediaCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </main>
  );
}
