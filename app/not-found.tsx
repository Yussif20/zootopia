export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-50 text-orange-700 px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found 🦁</h1>
      <p className="text-lg text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist in Zootopia. Please
        check the URL or go back home.
      </p>
    </div>
  );
}
