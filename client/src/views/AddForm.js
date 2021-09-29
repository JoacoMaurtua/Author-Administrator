import React from 'react';
import AuthorForm from '../components/AuthorForm';
import Title from '../components/Title';

export default function AddForm() {
  return (
    <div>
      <Title/>
      <AuthorForm create={true}/>
    </div>
  )
}
