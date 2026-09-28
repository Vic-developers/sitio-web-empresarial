"use client";

import { useState } from "react";
import { Calculator, Clock, DollarSign } from "lucide-react";

export function ROICalculator() {
  const [employees, setEmployees] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(200);
  const [automationPercentage, setAutomationPercentage] = useState(30);

  const weeklyHoursSaved = employees * hoursPerWeek * (automationPercentage / 100);
  const monthlyHoursSaved = weeklyHoursSaved * 4;
  const monthlySavings = monthlyHoursSaved * hourlyRate;
  const annualSavings = monthlySavings * 12;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-teal-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Calculadora de ROI</h3>
          <p className="text-sm text-gray-500">Calcula el ahorro potencial</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Número de empleados
          </label>
          <input
            type="number"
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Horas semanales en tareas repetitivas
          </label>
          <input
            type="number"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Costo por hora (MXN)
          </label>
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            % de automatización estimado
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={automationPercentage}
            onChange={(e) => setAutomationPercentage(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-sm text-gray-500">{automationPercentage}%</div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <Clock className="w-5 h-5 text-teal-600 mx-auto mb-1" />
            <div className="text-lg font-semibold text-gray-900">{monthlyHoursSaved.toFixed(0)}</div>
            <div className="text-xs text-gray-500">Horas ahorradas/mes</div>
          </div>
          <div className="bg-teal-50 rounded-lg p-3 text-center">
            <DollarSign className="w-5 h-5 text-teal-600 mx-auto mb-1" />
            <div className="text-lg font-semibold text-teal-600">${annualSavings.toLocaleString()}</div>
            <div className="text-xs text-gray-500">Ahorro anual estimado</div>
          </div>
        </div>
      </div>
    </div>
  );
}
