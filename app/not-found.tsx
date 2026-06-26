import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="font-serif text-4xl font-light text-stone-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-stone-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-stone-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
      >
        Back to home
      </Link>
    </div>
  );
}
