import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div`
  flex: 1;
  margin: 0px 10px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 1px 2px 11px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const Title = styled.span`
  font-size: 20px;
`;
const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;
const Money = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const Icon = styled.span`
  & > * {
    font-size: 15px;
  }
  color: ${(props) => (props.icon === 'negative' ? 'red' : 'green')};
`;
const SubTitle = styled.div`
  font-size: 18px;
  color: gray;
`;
const FeatureInfo = () => {
  return (
    <Container>
      <Item>
        <Title>Revanue</Title>
        <MoneyContainer>
          <Money>$2,415</Money>
          <MoneyRate>
            -11.4{' '}
            <Icon icon="negative">
              <ArrowDownward />
            </Icon>
          </MoneyRate>
        </MoneyContainer>
        <SubTitle>Compared to last month</SubTitle>
      </Item>
      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>$4,415</Money>
          <MoneyRate>
            -1.4{' '}
            <Icon icon="negative">
              <ArrowDownward />
            </Icon>
          </MoneyRate>
        </MoneyContainer>
        <SubTitle>Compared to last month</SubTitle>
      </Item>
      <Item>
        <Title>Revanue</Title>
        <MoneyContainer>
          <Money>$2,422</Money>
          <MoneyRate>
            1.4{' '}
            <Icon>
              <ArrowUpward icon="positive" />
            </Icon>
          </MoneyRate>
        </MoneyContainer>
        <SubTitle>Compared to last month</SubTitle>
      </Item>
    </Container>
  );
};

export default FeatureInfo;
