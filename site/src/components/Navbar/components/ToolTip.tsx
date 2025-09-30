interface TooltipProps {
  className?: string;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToolTip({ className = "", setIsHover }: TooltipProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-3 shadow-lg max-w-xs ${className} hover:cursor-pointer`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="space-y-2 text-sm">
        <div className="font-semibold text-gray-900">
          Tirupati Balaji Construction
        </div>
        <div className="text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Email:</span>
            <span>tirupatibalajiconstruction462@gmail.com</span>
          </div>
        </div>
        <div className="text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Phone:</span>
            <span>+91 99878 87573</span>
          </div>
        </div>
      </div>
    </div>
  );
}
