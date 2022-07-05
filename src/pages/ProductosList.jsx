import styled from "styled-components";
import Nav from "../components/Nav";
import Productos from "../components/Productos";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductosLista = () => {
  return (
    <Container>
      <Nav />
      <Anuncio />
      <Title>Nuestros productos</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Talle
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Mostrar:</FilterText>
          <Select>
            <Option selected>Reciente</Option>
            <Option>Precio (asc)</Option>
            <Option>Precio (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Productos />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductosLista;