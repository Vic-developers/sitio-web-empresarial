import { cn } from "@/lib/utils";
import { Clock, Users, Award, Calendar } from "lucide-react";
import Link from "next/link";
import { Course } from "@/data/courses";
import { Badge } from "@/components/ui/Badge";

export interface CourseCardProps {
  course: Course;
  className?: string;
}

export function CourseCard({ course, className }: CourseCardProps) {
  return (
    <Link href={`/academy/cursos/${course.slug}`}>
      <div
        className={cn(
          "group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-soft hover:shadow-medium hover:border-teal-200 transition-all duration-300 hover:-translate-y-1",
          className
        )}
      >
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-teal-500 to-navy-600 overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/20 text-6xl font-bold">
              {course.title.charAt(0)}
            </span>
          </div>
          {course.featured && (
            <div className="absolute top-4 left-4">
              <Badge variant="accent">Destacado</Badge>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <Badge variant="primary">{course.level}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
            <span className="font-medium text-teal-600">{course.category}</span>
          </div>

          <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
            {course.title}
          </h3>

          <p className="text-sm text-slate-600 mb-4 line-clamp-2">
            {course.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-3 text-sm text-slate-500 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.modality}</span>
            </div>
            {course.certification && (
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                <span>Certificación</span>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-1 text-sm text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>{course.date}</span>
            </div>
            <div className="text-lg font-bold text-teal-600">
              {course.price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
