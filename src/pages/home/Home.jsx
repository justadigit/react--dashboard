import React from 'react';
import styled from 'styled-components';
import Chart from '../../components/Chart';
import FeatureInfo from '../../components/FeatureInfo';
import WidgetLg from '../../components/WidgetLg';
import WidgetSm from '../../components/WidgetSm';
import { userData } from '../../dummyData';
const Container = styled.div`
  flex: 4;
`;
const Widgets = styled.div`
  display: flex;
  padding: 10px;
`;
const Home = () => {
  return (
    <Container>
      <FeatureInfo />
      <Chart
        data={userData}
        title="Users Analytics"
        grid
        dataKey="Active User"
      />
      <Widgets>
        <WidgetSm />
        <WidgetLg />
      </Widgets>
    </Container>
  );
};

export default Home;
