import PropTypes from 'prop-types';
import {Container,Title,StatList,StatItem,Label,Percentage} from './Statistics.styled'


const Statistics = ({ title, stats }) => {
    return (
       <Container>
  <Title>{title}</Title>

            <StatList>
                {stats.map(el => (
                    <StatItem key={el.id}>
      <Label>{el.label}</Label>
      <Percentage>{el.percentage}%</Percentage>
    </StatItem>))}
  </StatList>
</Container> 
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    data:PropTypes.node,
}

export default Statistics;