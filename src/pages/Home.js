import Content from '../content';
import Card from '../components/card';
import {Container} from '../components/styled/containerStyled';

export function Home(){
  return(
    <>
    <Container>
        {Content.map((item, index) => (
            <Card key={index} item={item} />
        ))}
        </Container>


    </>
  )
};