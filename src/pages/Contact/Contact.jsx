import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

import { Formik, Form, Field, ErrorMessage } from 'formik'

import './Contact.css'


const Contact = () => {
  // const [enviado, setEnviado] = useState(false);

  const form = useRef();

  return (
    <div className='contact' id='contact'>
      <h2>{`< CONTACTO />`}</h2>
      <Formik
        initialValues={{
          nombre: '',
          email: '',
          mensaje: ''
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.nombre) {
            errores.nombre = 'Por favor ingrese un nombre';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = 'El nombre solo puede contener letras y espacios.'
          }

          if (!valores.email) {
            errores.email = 'Por favor ingrese un email';
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
            errores.email = 'El nombre solo puede contener letras, numeros, puntos, guiones y guion bajo.'
          }

          return errores;
        }}
        onSubmit={ (e, { resetForm }) => {
          emailjs.sendForm('service_svrj5lb', 'template_f6pd5yc', form.current, 'IoE974ksXgGy4GsYv')
            .then((result) => {
              console.log(result.text);
              console.log(e);
              resetForm();
            }, (error) => {
              console.log(error.text);
            });
        }}
      >
        {({ errors }) => (
          <Form className='formulario' ref={ form }>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id='nombre'
                name='nombre'
                placeholder='Ingrese su nombre...'
              />
              <ErrorMessage name='nombre' component={() => (
                <span className='error'>{errors.nombre}</span>
              )} />
            </div>
            <div>
              <label htmlFor="nombre">Email</label>
              <Field
                type="email"
                id='email'
                name='email'
                placeholder='Ingrese su email...'
              />
              <ErrorMessage name='email' component={() => (
                <span className='error'>{errors.email}</span>
              )} />
            </div>
            <div>
              <label htmlFor="mensaje">Mensaje</label>
              <Field
                as="textarea"
                id='mensaje'
                name='mensaje'
                placeholder='Ingrese su mensaje...'
              />
            </div>
            <button type='submit'>Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Contact