interface ChatNameProps {
  name: string;
  editing?: boolean;
  setName: (name: string) => void;
}

export const ChatName = ({
  setName,
  name,
  editing = false,
}: ChatNameProps): JSX.Element => {
  if (editing) {
    return (
      <input
        onChange={(event) => setName(event.target.value)}
        autoFocus
        value={name}
        className="text-vt-700 pl-1 py-1"
      />
    );
  }

  return <span className="max-w-44 truncate">{name}</span>;
};
