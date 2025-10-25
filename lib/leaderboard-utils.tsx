import { Award, Crown, Medal } from "lucide-react";

export const getRankIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Crown className="w-6 h-6 text-yellow-500" />;
    case 1:
      return <Medal className="w-6 h-6 text-gray-400" />;
    case 2:
      return <Award className="w-6 h-6 text-orange-600" />;
    default:
      return (
        <span className="text-lg font-bold text-gray-600">{index + 1}</span>
      );
  }
};

export const getRankBadge = (index: number) => {
  switch (index) {
    case 0:
      return "bg-gradient-to-r from-yellow-400 to-yellow-600";
    case 1:
      return "bg-gradient-to-r from-gray-300 to-gray-500";
    case 2:
      return "bg-gradient-to-r from-orange-400 to-orange-600";
    default:
      return "bg-gradient-to-r from-blue-500 to-purple-600";
  }
};
