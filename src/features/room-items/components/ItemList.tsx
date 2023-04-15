import { IRoomItem } from '../room.types';
import Item from './Item';

type ItemListProps = {
  items: IRoomItem[];
};

const ItemList = ({ items }: ItemListProps) => {
  return (
    <ul className="flex flex-col gap-0.5">
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;
