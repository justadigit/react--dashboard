import {
  CalendarToday,
  CloudUpload,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1``;
const Create = styled.button`
  width: 80px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: teal;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
const UserContainer = styled.div`
  display: flex;
  padding: 20px;
`;
const UserShow = styled.div`
  flex: 1;
  -webkit-box-shadow: 1px 2px 11px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const ShowTop = styled.div`
  display: flex;
  align-items: center;
`;
const ShowImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
const ShowTitle = styled.span`
  display: flex;
  flex-direction: column;
`;
const ShowUsername = styled.span`
  font-weight: 600;
`;
const ShowUserTitle = styled.span`
  font-weight: 300;
`;
const ShowBottom = styled.div`
  margin-top: 20px;
`;
const ShowBottomTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;
const ShowInfo = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;
const ShowIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;
  & > * {
    font-size: 18px;
  }
`;
const ShowInfoTitle = styled.span``;

const UserUpdate = styled.div`
  flex: 2;
  -webkit-box-shadow: 1px 2px 11px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-left: 20px;
`;
const UpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
const UpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UpdateLeft = styled.div``;
const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const UpdateLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;
const UpdateInput = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
`;
const UpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;
const Update = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;
const UpdateImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 15px;
  margin-right: 20px;
`;
const UpdateIcon = styled.span``;
const User = () => {
  return (
    <Container>
      <Header>
        <Title>Edit User</Title>
        <Link to="/newUser">
          <Create>Create</Create>
        </Link>
      </Header>
      <UserContainer>
        <UserShow>
          <ShowTop>
            <ShowImage src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            <ShowTitle>
              <ShowUsername>Anna Becker</ShowUsername>
              <ShowUserTitle>Software Engineer</ShowUserTitle>
            </ShowTitle>
          </ShowTop>
          <ShowBottom>
            <ShowBottomTitle>Account Details</ShowBottomTitle>
            <ShowInfo>
              <ShowIcon>
                <PermIdentity />
              </ShowIcon>
              <ShowInfoTitle>annabeck99</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <ShowIcon>
                <CalendarToday />
              </ShowIcon>
              <ShowInfoTitle>10.12.1999</ShowInfoTitle>
            </ShowInfo>
            <ShowBottomTitle>Contact Details</ShowBottomTitle>
            <ShowInfo>
              <ShowIcon>
                <PhoneAndroid />
              </ShowIcon>
              <ShowInfoTitle>+1 123 456 67</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <ShowIcon>
                <MailOutline />
              </ShowIcon>
              <ShowInfoTitle>annabeck99@gmail.com</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <ShowIcon>
                <LocationSearching />
              </ShowIcon>
              <ShowInfoTitle>New York | USA</ShowInfoTitle>
            </ShowInfo>
          </ShowBottom>
        </UserShow>
        <UserUpdate>
          <UpdateTitle>Edit</UpdateTitle>
          <UpdateForm>
            <UpdateLeft>
              <UpdateItem>
                <UpdateLabel>Username</UpdateLabel>
                <UpdateInput
                  type="text"
                  name="username"
                  placeholder="annabeck99"
                />
              </UpdateItem>
              <UpdateItem>
                <UpdateLabel>Full Name</UpdateLabel>
                <UpdateInput
                  type="text"
                  name="fullname"
                  placeholder="Anna Becker"
                />
              </UpdateItem>
              <UpdateItem>
                <UpdateLabel>Email</UpdateLabel>
                <UpdateInput
                  type="email"
                  name="username"
                  placeholder="annabeck99@gmail.com"
                />
              </UpdateItem>
              <UpdateItem>
                <UpdateLabel>Phone</UpdateLabel>
                <UpdateInput
                  type="phone"
                  name="username"
                  placeholder="+1 123 345 23"
                />
              </UpdateItem>
              <UpdateItem>
                <UpdateLabel>Address</UpdateLabel>
                <UpdateInput
                  type="text"
                  name="username"
                  placeholder="New York | USA "
                />
              </UpdateItem>
            </UpdateLeft>
            <UpdateRight>
              <UpdateUpload>
                <UpdateImage src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <UpdateLabel>
                  <UpdateIcon>
                    <Publish />
                  </UpdateIcon>
                </UpdateLabel>
                <UpdateInput type="file" style={{ display: 'none' }} />
              </UpdateUpload>
              <Update>Update</Update>
            </UpdateRight>
          </UpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;
