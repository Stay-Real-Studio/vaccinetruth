import { FiCheckCircle, FiShare } from "react-icons/fi";

type CopyButtonProps = {
  handleCopy: () => void;
  isCopied: boolean;
};

export const ShareButton = ({
  handleCopy,
  isCopied,
}: CopyButtonProps): JSX.Element => (
  <button
    className="text-gray-500 hover:text-gray-700 transition"
    onClick={handleCopy}
    title={isCopied ? "Copied!" : "Copy Chat URL to clipboard"}
  >
    {isCopied ? <FiCheckCircle /> : <FiShare />}
  </button>
);
