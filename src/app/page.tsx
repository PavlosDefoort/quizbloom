"use client";
//On the client side, we can use the fetch API to make requests to the server.
export default function Home() {
  async function addUser() {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "apples", name: "a" }),
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <main className="bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" relative isolate px-6 pt-14 lg:px-8">
        <button onClick={() => addUser()}>Add User</button>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          {/* 
          <div
            className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8086ff] to-[#161ef1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              zIndex: -1,
            }}
          />*/}
        </div>

        <div className="animate-fade mx-auto max-w-1xl py-32 sm:py-48 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white text-transparent bg-clip-text sm:text-6xl">
              Unleash Your Math Superpowers
            </h1>
            <p className="mt-4 font-bold text-lg leading-8 text-white">
              Unlock Academic Excellence with PenguMath: Ace Exams and Master
              Multiple Subjects!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/courses"
                className="animate-bounce animate-infinite rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Get started
              </a>

              <a
                href="/about"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/*  
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/undraw_mathematics_-4-otb.svg"
          alt="Next.js Logo"
          width={420}
          height={420}
          priority
        />*/}
      </div>
    </main>
  );
}
