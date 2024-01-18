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
        className="text-vt-200 px-1 py-1 bg-transparent"
      />
    );
  }

  return <span className="max-w-44 truncate">{name}</span>;
};
