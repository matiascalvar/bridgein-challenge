interface ButtonProps {
  type: string;
  text: string;
  onClick?: (params?: unknown) => void;
  isSubmit?: boolean;
}

const Button = ({ type, text, onClick, isSubmit = false }: ButtonProps) => {
  const getButtonType = (type: string) => {
    if (type === "warning") {
      return "bg-red-500 hover:bg-red-800 text-white";
    } else if (type === "confirm") {
      return "bg-green-500 hover:bg-green-800 text-white";
    } else {
      return "border rounded-md text-black hover:border-gray-800";
    }
  };
  return (
    <button
      className={`min-w-[120px] rounded-md text-sm min-h-6 ease-in duration-300 ${getButtonType(
        type
      )}`}
      type={isSubmit ? "submit" : "button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
