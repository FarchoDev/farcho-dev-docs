interface BadgeLabelProps {
  type: "new" | "updated" | "coming-soon";
}

const badgeStyles = {
  new: "bg-green-500 text-white",
  updated: "bg-blue-500 text-white",
  "coming-soon": "bg-yellow-400 text-black",
};

const badgeText = {
  new: "Nuevo",
  updated: "Actualizado",
  "coming-soon": "Próximamente",
};

export function BadgeLabel({ type }: BadgeLabelProps) {
  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-full font-semibold shadow ${badgeStyles[type]}`}
    >
      {badgeText[type]}
    </span>
  );
}
