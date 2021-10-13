import { Category, TableColumn, TableLine, ValueCurrency } from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from '../../utils/dateFilter';
import { categories } from '../../data/categories';
import formatCurrency from "../../utils/formatCurrency";

type Props = {
    item: Item;
}

export const TableItem = ({item} : Props) => {
    return(
        <TableLine>
            <TableColumn>{formatDate(item.date)}</TableColumn>
            <TableColumn>
                <Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </Category>
            </TableColumn>
            <TableColumn>{item.title}</TableColumn>
            <TableColumn>
                <ValueCurrency color={categories[item.category].expense ? 'red' : 'green' }>
                    {formatCurrency(item.value)}
                </ValueCurrency>
            </TableColumn>
        </TableLine>
    );
}