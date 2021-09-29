import React from 'react';
import AuthorForm from '../components/AuthorForm';
import Title from '../components/Title';

export default function EditForm({datos,setDatos}) {
  return (
    <div>
      <Title/>
      <AuthorForm update={true} datos={datos} setDatos={setDatos}/>
    </div>
  )
}
