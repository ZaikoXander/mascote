import { Link } from "react-router-dom";

import { ArrowLeft } from "lucide-react";

export default function DashboardLink() {
  return (
    <Link to="/admin" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
      <ArrowLeft className="h-4 w-4 mr-2" />
      Voltar para o Dashboard
    </Link>
  )
}
