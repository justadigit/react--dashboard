import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 1px 2px 11px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;
const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const Td = styled.td``;
const Th = styled.th`
  text-align: left;
`;
const Tr = styled.tr``;
const User = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;
const UserName = styled.span``;
const Amount = styled.span`
  font-weight: 300;
`;
const Date = styled.span`
  font-weight: 300;
`;
const Status = styled.span``;
const Button = styled.button`
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
  ${(props) =>
    (props.type === 'Approved' &&
      `background-color: #e5faf2;color: #3bb077;`) ||
    (props.type === 'Declined' &&
      `background-color: #fff0f1;
    color: #d95087;`) ||
    (props.type === 'Pending' &&
      `background-color: #ebf1fe;
    color: #2a7ade;`)}
`;

const WidgetLg = () => {
  return (
    <Container>
      <Title>Latest transactions</Title>
      <Table>
        <Tr>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
        </Tr>
        <Tr>
          <Td>
            <User>
              <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              <UserName>Susan Carol</UserName>
            </User>
          </Td>
          <Td>
            <Date>2 Jun 2021</Date>
          </Td>
          <Td>
            <Amount>$122.00</Amount>
          </Td>
          <Td>
            <Status>
              <Button type="Approved">Approved</Button>
            </Status>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <User>
              <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              <UserName>Susan Carol</UserName>
            </User>
          </Td>
          <Td>
            <Date>2 Jun 2021</Date>
          </Td>
          <Td>
            <Amount>$122.00</Amount>
          </Td>
          <Td>
            <Status>
              <Button type="Declined">Declined</Button>
            </Status>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <User>
              <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              <UserName>Susan Carol</UserName>
            </User>
          </Td>
          <Td>
            <Date>2 Jun 2021</Date>
          </Td>
          <Td>
            <Amount>$122.00</Amount>
          </Td>
          <Td>
            <Status>
              <Button type="Pending">Pending</Button>
            </Status>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <User>
              <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              <UserName>Susan Carol</UserName>
            </User>
          </Td>
          <Td>
            <Date>2 Jun 2021</Date>
          </Td>
          <Td>
            <Amount>$122.00</Amount>
          </Td>
          <Td>
            <Status>
              <Button type="Approved">Approved</Button>
            </Status>
          </Td>
        </Tr>
      </Table>
    </Container>
  );
};

export default WidgetLg;
