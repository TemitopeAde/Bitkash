import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'
import Button from "../../components/button";
import Input from "../../components/input";
import Section from "../../components/section";
import Text from "../../components/text";
import AdminLayout from "../../layout/admin-layout";

export default function AddAdminWrapper() {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    location: ""
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    location: Yup.string().required("Location is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form Values", values);
    resetForm();
    // console.log(values.account_type);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <AdminLayout>
      <div>
        <Section>
          <Text
            as='span'
            classname='tw-text-primary-main tw-text-[20px] tw-font-semibold tw-text-center tw-block'
          >
            Add Admin
          </Text>
          <form onSubmit={formik.handleSubmit}>
            <div className='tw-my-10 tw-w-[60%] tw-mx-auto tw-py-10 tw-border-2 tw-border-primary-main tw-rounded-3xl'>
              <div className='tw-w-[120px] tw-mx-auto tw-h-[120px] tw-rounded-full tw-overflow-hidden'>
                <img src='/images/admin/user-profile-pic.png' alt='' />
              </div>
              <div className='tw-py-6 tw-grid tw-grid-cols-2 tw-gap-6 tw-w-[85%] tw-mx-auto'>
                <Input
                  label='Name'
                  type='text'
                  placeholder='abcvder@gmail.com'
                  variant='primary'
                  name='name'
                  value={formik.values.name}
                  onchange={formik.handleChange}
                  onblur={formik.handleBlur}
                  errorMessage={formik.errors.name}
                />
                <Input
                  label='Phone number'
                  type='tel'
                  placeholder='12345678'
                  variant='primary'
                  name='phone'
                  value={formik.values.phone}
                  onchange={formik.handleChange}
                  onblur={formik.handleBlur}
                  errorMessage={formik.errors.phone}
                />
                <Input
                  label='Email address'
                  type='email'
                  placeholder='abcvder@gmail.com'
                  variant='primary'
                  name='email'
                  value={formik.values.email}
                  onchange={formik.handleChange}
                  onblur={formik.handleBlur}
                  errorMessage={formik.errors.email}
                />
                <Input
                  label='Location'
                  type='text'
                  placeholder='United States'
                  variant='primary'
                  name='location'
                  value={formik.values.location}
                  onchange={formik.handleChange}
                  onblur={formik.handleBlur}
                  errorMessage={formik.errors.location}
                />
              </div>
            </div>
            <div className='tw-mx-auto tw-w-fit'>
              <Button type='submit' classname='tw-my-3 tw-py-[12px] tw-px-8'>
                Send Invite
              </Button>
            </div>
          </form>
        </Section>
      </div>
    </AdminLayout>
  );
}
