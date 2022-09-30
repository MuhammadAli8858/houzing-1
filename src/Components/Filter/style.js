import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as filter } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

export const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;
export const Icons = styled.div``;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;
