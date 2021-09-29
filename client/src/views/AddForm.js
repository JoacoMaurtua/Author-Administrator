import React from 'react';
import AuthorForm from '../components/AuthorForm';
import Title from '../components/Title';

export default function AddForm({datos,setDatos}) {
  return (
    <div>
      <Title/>
      <AuthorForm create={true} datos={datos} setDatos={setDatos} />
    </div>
  )
}
