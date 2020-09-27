
import React, { useState, useEffect, memo } from 'react';

import axios from 'axios'

import styled from 'styled-components'
import { Header } from '@buffetjs/custom'
import { Table } from '@buffetjs/core'

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`

const HomePage = () => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    getReposRows()
  }, [])

  function getReposRows() {
    axios
      .get('https://api.github.com/users/React-avancado/repos')
      .then(res => setRows(res.data))
      .catch(error => strapi.notification.error(error.message))
  }

  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  return (
    <Wrapper>
      <Header
        title={{ label: 'Advanced React' }}
        content="A list of the Advanced React Repo"
      />

      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
