import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  flex: 4;
  height: 600px;
`;
const ListUser = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  object-fit: cover;
  border-radius: 50%;
`;
const Edit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;
const Icon = styled.span`
  display: flex;
  align-items: center;
  & > * {
    color: red;
    cursor: pointer;
  }
`;
export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <ListUser>
            <Image src={params.row.avatar} alt="" />
            {params.row.username}
          </ListUser>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <Edit>Edit</Edit>
            </Link>
            <Icon>
              <DeleteOutline onClick={() => handleDelete(params.row.id)} />
            </Icon>
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  );
}
