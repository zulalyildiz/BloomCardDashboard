import React from 'react';
import { Formik, Form } from "formik";
import FormInput from './elements/FormInput';
import FormButton from './elements/FormButton';
import Checkbox from './elements/Checkbox';
import ImageDropzone from './elements/ImageDropzone';
import { PersonalInfoSchema } from '../../schemas/validationSchemas';

interface ContactFormProps {
  contactInfo: {
    name: string;
    surname: string;
    email: string;
    phone: string;
    accept: boolean;
    profileImage: string;
    coverImage: string;
  };
  setContactInfo: React.Dispatch<React.SetStateAction<{
    name: string;
    surname: string
    email: string;
    phone: string;
    accept: boolean;
    profileImage: string;
    coverImage: string;
  }>>;
}

const ContactForm: React.FC<ContactFormProps> = ({ contactInfo, setContactInfo }) => {
  return (
    <Formik
      initialValues={contactInfo}
      validationSchema={PersonalInfoSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Form submitted:', values);
        setContactInfo(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, isSubmitting }) => (
        <Form className="space-y-4">
          <FormInput
            label="İsim"
            name="name"
            placeholder="Adınızı girin..."
            value={values.name}
            onChange={(e) => {
              handleChange(e);
              setContactInfo(prev => ({ ...prev, name: e.target.value }));
            }}
          />

          <FormInput
            label="Soyisim"
            name="surname"
            placeholder="Soyadınızı girin..."
            value={values.surname}
            onChange={(e) => {
              handleChange(e);
              setContactInfo(prev => ({ ...prev, surname: e.target.value }));
            }}
          />

          <FormInput
            label="Mail Adresi"
            name="email"
            type="email"
            placeholder="ornek@mail.com"
            value={values.email}
            onChange={(e) => {
              handleChange(e);
              setContactInfo(prev => ({ ...prev, email: e.target.value }));
            }}
          />
          <FormInput
            label="Telefon Numarası"
            name="phone"
            type="tel"
            placeholder="05XXXXXXXXX"
            value={values.phone}
            onChange={(e) => {
              handleChange(e);
              setContactInfo(prev => ({ ...prev, phone: e.target.value }));
            }}
          />
          <ImageDropzone
            onImageUpload={(base64) => setContactInfo(prev => ({ ...prev, profileImage: base64 }))}
            label="Profil Resmi"
          />
          <ImageDropzone
            onImageUpload={(base64) => setContactInfo(prev => ({ ...prev, coverImage: base64 }))}
            label="Kapak Resmi"
            isCover
          />
          <Checkbox
            name="accept"
            checked={values.accept}
            onChange={(e) => {
              handleChange(e);
              setContactInfo(prev => ({ ...prev, accept: e.target.checked }));
            }}
            label="I accept the terms and conditions"
          />
         
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
