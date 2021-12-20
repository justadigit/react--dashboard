import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  flex: 4;
`;
const Title = styled.h1``;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  margin-right: 20px;
  & > * {
    display: ${(props) => console.log(props)};
  }
`;
const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: gray;
`;
const Input = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;
const Select = styled.select``;
const Option = styled.option``;
const NewUser = () => {
  return (
    <Container>
      <Title>New User</Title>
      <Form>
        <Item car="car">
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" name="username" placeholder="john" />
        </Item>
        <Item>
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="John Smith"
          />
        </Item>
        <Item>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="john@gmail.com"
          />
        </Item>
        <Item>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
        </Item>
        <Item>
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="number"
            id="phone"
            name="phone"
            placeholder="+1 123 456 78"
          />
        </Item>
        <Item>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            name="address"
            placeholder="New York | USA"
          />
        </Item>
        <Item>
          <Label htmlFor="gender">Gender</Label>
          <br />
          <Input type="radio" name="gender" value="male" />{' '}
          <Label htmlFor="male">Male</Label>
          <Input type="radio" name="gender" value="female" />
          <Label htmlFor="female">Female</Label>
          <Input type="radio" name="gender" value="other" />
          <Label htmlFor="other">Other</Label>
        </Item>
        <Item>
          <Label htmlFor="active">Active</Label>
          <Select>
            <Option value="active">Yes</Option>
            <Option value="notactive">No</Option>
          </Select>
        </Item>
      </Form>
    </Container>
  );
};

export default NewUser;
