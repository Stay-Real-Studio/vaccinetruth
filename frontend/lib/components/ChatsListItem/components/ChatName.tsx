interface ChatNameProps {
  name: string;
  editing?: boolean;
  setName: (name: string) => void;
  setEditingName: (name: boolean) => void;
}

export const ChatName = ({
  setName,
  name,
  editing = false,
  setEditingName,
}: ChatNameProps): JSX.Element => {
  if (editing) {
    return (
      <input
        onChange={(event) => setName(event.target.value)}
        autoFocus
        value={name}
        className="dark:text-vt-200 text-vt-600 px-0 py-0 bg-transparent border-0"
        onBlur={() => setEditingName(false)}
      />
    );
  }

  return <span className="max-w-44 px-0 py-0 truncate">{name}</span>;
};
