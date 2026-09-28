"use client";

import { cn } from "@/lib/utils";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import { courseCategories } from "@/data/courses";

export interface CourseFiltersProps {
  onFilter?: (filters: FilterState) => void;
}

export interface FilterState {
  search: string;
  category: string;
  level: string;
  modality: string;
}

export function CourseFilters({ onFilter }: CourseFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "",
    level: "",
    modality: "",
  });

  const handleChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter?.(newFilters);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-teal-500" />
        <h3 className="font-semibold text-slate-900">Filtrar cursos</h3>
      </div>

      <div className="space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="¿Qué quieres aprender?"
            value={filters.search}
            onChange={(e) => handleChange("search", e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Categoría
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all bg-white"
          >
            <option value="">Todas las categorías</option>
            {courseCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Level */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Nivel
          </label>
          <select
            value={filters.level}
            onChange={(e) => handleChange("level", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all bg-white"
          >
            <option value="">Todos los niveles</option>
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>

        {/* Modality */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Modalidad
          </label>
          <select
            value={filters.modality}
            onChange={(e) => handleChange("modality", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all bg-white"
          >
            <option value="">Todas las modalidades</option>
            <option value="En vivo">En vivo</option>
            <option value="Grabado">Grabado</option>
            <option value="Híbrido">Híbrido</option>
            <option value="Presencial">Presencial</option>
          </select>
        </div>

        {/* Reset */}
        <button
          onClick={() => {
            const reset = { search: "", category: "", level: "", modality: "" };
            setFilters(reset);
            onFilter?.(reset);
          }}
          className="w-full py-2 text-sm text-slate-500 hover:text-teal-600 transition-colors"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
