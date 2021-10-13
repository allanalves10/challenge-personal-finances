import { useEffect, useState } from "react";
import { Body, Container, Header, HeaderText } from "./styles"
import { categories } from './data/categories'
import { items } from './data/items';
import { Item } from './types/Item';
import { filterListByMonth, getCurrentMonth } from './utils/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from "./components/InfoArea";
import { Form } from "./components/Form";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);

  useEffect(() => {
    let sumIncome = 0;
    let sumExpense = 0;

    for(let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        sumExpense += filteredList[i].value;
      } else {
        sumIncome += filteredList[i].value;

      }
    }

    setExpense(sumExpense)
    setIncome(sumIncome)

  }, [filteredList]);

  const onAddItem = (item: Item) => {
    let allItems = [...list];
    allItems.push(item);
    setList(allItems);
  }


  return(
    <Container>
      <Header>
        <HeaderText>
          Sistema Financeiro
        </HeaderText>
      </Header>
      <Body>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={setCurrentMonth}
          income={income}
          expense={expense}
        />
        <Form onAdd={onAddItem} />
        <TableArea list={filteredList}/>
      </Body>
      <ToastContainer />
    </Container>
  );
}

export default App;