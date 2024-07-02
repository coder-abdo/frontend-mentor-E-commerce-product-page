import { ListItem } from "./listItem";

export const ListItems = ({ listItems = [] }) => {
  return (
    <ul className="gap-8 capitalize flex flex-col pt-20">
      {listItems.map((item, index) => (
        <ListItem key={index} listName={item} />
      ))}
    </ul>
  );
};
