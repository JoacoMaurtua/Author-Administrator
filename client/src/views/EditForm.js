import React from 'react';
import AuthorForm from '../components/AuthorForm';
import Title from '../components/Title';

export default function EditForm() {
  return (
    <div>
      <Title/>
      <AuthorForm update={true}/>
    </div>
  )
}
