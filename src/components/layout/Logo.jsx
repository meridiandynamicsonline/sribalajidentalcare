import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5F8D7A] text-white shadow-lg">
        <Sparkles size={20} />
      </div>

      <div>
        <h2 className="text-lg font-bold leading-none">
          Dr. Ronal Kumar
        </h2>

        <p className="text-xs text-gray-500">
          Therapy & Pranic Healing
        </p>
      </div>
    </div>
  );
}