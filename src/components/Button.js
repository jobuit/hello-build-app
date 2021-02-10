export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`text-sm bg-gray-500 hover:bg-gray-700 text-white font-medium py-1 px-3 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
