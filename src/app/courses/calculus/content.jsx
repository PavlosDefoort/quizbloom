"use client";
const people = [
  {
    name: "Inverse Functions",
    email: "Explore the concept of inverse functions.",
    role: "Start",
    imageUrl: "https://freesvg.org/img/ftfunct.png",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    destination: "/courses/calculus/inverse-functions",
  },
  {
    name: "Hyperbolic Functions",
    email: "Some hyperbolic functions and their properties.",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    destination: "/courses/calculus/hyperbolic-functions",
  },
  {
    name: "Derivatives",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
    destination: "/courses/calculus/derivatives",
  },
  {
    name: "Mean Value Theorem",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    destination: "/courses/calculus/mean-value-theorem",
  },
  {
    name: "L'Hospital's Rule",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    destination: "/courses/calculus/lhospital-rule",
  },
  {
    name: "Integration",
    email: "The area under a curve",
    role: "Director of Product",
    imageUrl: "https://www.svgrepo.com/show/210601/function.svg",
    lastSeen: null,
    destination: "/courses/calculus/integration",
  },
];

export default function CourseContent() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={person.imageUrl}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-2xl font-semibold leading-6 text-white">
                {person.name}
              </p>
              <p className="mt-1 truncate text-s leading-5 text-white">
                {person.email}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <div className="mt-1 flex items-center gap-x-1.5">
              <a
                href="/courses/calculus"
                className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                View Lesson
              </a>
              <a
                href={person.destination}
                className="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Start Quiz
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
