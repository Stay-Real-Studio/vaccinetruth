import { FaCheckCircle, FaCopy } from "react-icons/fa";

type CopyButtonProps = {
  handleCopy: () => void;
  isCopied: boolean;
};

export const CopyButton = ({
  handleCopy,
  isCopied,
}: CopyButtonProps): JSX.Element => (
  <button
    className="text-vt-700 hover:text-vt-900 transition p-1 dark:text-vt-50"
    onClick={handleCopy}
    title={isCopied ? "Copied!" : "Copy to clipboard"}
  >
    {isCopied ? <FaCheckCircle /> : <FaCopy />}
  </button>
);
