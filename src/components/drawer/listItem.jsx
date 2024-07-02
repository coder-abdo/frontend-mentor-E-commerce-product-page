export const ListItem = ({ listName }) => {
  return (
    <li>
      <a
        className="px-4 transition-colors text-gray-400 text-lg hover:text-gray-800"
        href="!#"
      >
        {listName}
      </a>
    </li>
  );
};
