import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoriasItem from "./CategoriasItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categorias = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoriasItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categorias;