import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import styles from './form.module.scss'


const LReactHookForm = ()=>{
  const { register, handleSubmit, reset, formState: { isValidating, isSubmitting , errors } } = useForm();
  const onSubmit = data =>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log(data)
        resolve({success:'true'})
      },2000)
    })
  };
  console.log('isValidating', isValidating)
  console.log('isSubmitting', isSubmitting)

  const resetForm = ()=>{
    reset({
      firstname: "bill",
      lastname: "gates",
      email: '', 
      phone: ''
    }, {
      keepErrors: false, 
      keepDirty: true,
      keepIsSubmitted: false,
      keepTouched: false,
      keepIsValid: false,
      keepSubmitCount: false,
    });
  }
  

  return (
    <div>
      <div className={styles.banner}>

      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.row}>
        <input placeholder="firstname" defaultValue="" {...register("firstname",  { required: true })} />
          <input placeholder="lastname" defaultValue="" {...register("lastname",  { required: true })} />
        </div>
        <div className={styles.row}>
          <input placeholder="email" defaultValue="" {...register("email",  { required: true })} />
          {errors.email && <span>required *</span>}
        </div>
        <div className={styles.row}>
          <input placeholder="phone" defaultValue="" {...register("phone",  { required: true })} />
          {errors.phone && <span>required *</span>}
        </div>
       
        <input type="button" value='Reset' onClick={resetForm}/>
        <input type="submit" value='Submit'/>
      </form>
    </div>
  );
}

export default LReactHookForm


