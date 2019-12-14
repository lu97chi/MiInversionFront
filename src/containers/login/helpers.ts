
export const formatFormData = (id:string, form: any, setValues: any, value: string) => {
    return setValues({...form, [id]: value})
}

export const nameValidator = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
