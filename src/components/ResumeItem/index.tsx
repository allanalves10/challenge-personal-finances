import { Container, InfoValue, Title } from "./styles"
import { formatCurrency } from './../../utils/formatCurrency';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return(
        <Container>
            <Title>{title}</Title>
            <InfoValue color={color}> {formatCurrency(value)}</InfoValue>
        </Container>
    )
}