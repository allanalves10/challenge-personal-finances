import { useState } from 'react';
import { Item } from '../../types/Item';
import { toast } from "react-toastify";
import { categories } from '../../data/categories';
import { Button, Container, Input, InputLabel, InputTitle, Select } from './styles';

type Props = {
  onAdd: (item: Item) => void;
};

export const Form = ({ onAdd }: Props) => {
    const [choiceDate, setChoiceDate] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [itemValue, setItemValue] = useState(0);
  
    let categoryKeys: string[] = Object.keys(categories);
  
    const createItems = () => {
        if (isNaN(new Date(choiceDate).getTime())) {
            return toast.error('Data inválida.');
            
        }

        if (category === '') {
            return toast.error('Escolha uma categoria.');

        }

        if (title === '') {
            return toast.error('Insira um título.');

        }

        if (title.trim().length === 0) {
            return toast.error('Insira um título válido.');

        }

        if (itemValue <= 0) {
            return toast.error('Escolha um Valor maior que R$ 0,00.');

        }
  
        onAdd({
            date: new Date(choiceDate),
            category: category,
            title: title,
            value: itemValue
        });

        defaultFalues();
    }
  
    const defaultFalues = () => {
      setChoiceDate('');
      setCategory('');
      setTitle('');
      setItemValue(0);
    }
  
    return (
        <Container>
          <InputLabel>
            <InputTitle>Data</InputTitle>
            <Input type="date" value={choiceDate} onChange={e => setChoiceDate(e.target.value)} />
          </InputLabel>
          <InputLabel>
            <InputTitle>Categoria</InputTitle>
            <Select value={category} onChange={e => setCategory(e.target.value)}>
              <>
                <option value="">Selecione a Categoria</option>
                {categoryKeys.map((key, index) => (
                  <option key={index} value={key}>{categories[key].title}</option>
                ))}
              </>
            </Select>
          </InputLabel>
          <InputLabel>
            <InputTitle>Título</InputTitle>
            <Input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Insira um título" />
          </InputLabel>
          <InputLabel>
            <InputTitle>Valor</InputTitle>
            <Input type="number" value={itemValue} onChange={e => setItemValue(parseFloat(e.target.value))} />
          </InputLabel>
          <InputLabel>
            <InputTitle>&nbsp;</InputTitle>
            <Button onClick={createItems}>Adicionar</Button>
          </InputLabel>
        </Container>
    );
  }