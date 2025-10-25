import { AlertCircle } from "lucide-react";

interface ErrorCardProps {
  message: string;
}

export function ErrorCard({ message }: ErrorCardProps) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border-2 border-red-200">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
          <AlertCircle className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <p className="font-semibold text-red-800">Error</p>
          <p className="text-sm text-red-600">{message}</p>
        </div>
      </div>
    </div>
  );
}
