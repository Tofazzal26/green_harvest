import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <section className="flex items-center h-full p-16  ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-800">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl text-gray-600">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <button className="px-8 py-3 font-mono font-semibold rounded bg-[#60a041] text-white">
              <Link href="/">Back to homepage</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
