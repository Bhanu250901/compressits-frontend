import { Link } from "react-router-dom";

type ToolCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

export default function ToolCard({
  icon,
  title,
  description,
  link,
}: ToolCardProps) {

  return (

    <div className="group bg-white rounded-[32px] p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">

      {/* Icon */}
      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">

        {icon}

      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-4">

        {title}

      </h2>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed mb-8">

        {description}

      </p>

      {/* Button */}
      <Link
        to={link}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition shadow-md"
      >

        Open Tool →

      </Link>

    </div>
  );
}