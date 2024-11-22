export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        <p className="text-xl text-gray-300 mt-4">
          Carregando... Por favor, aguarde.
        </p>
      </div>
    </div>
  );
}
