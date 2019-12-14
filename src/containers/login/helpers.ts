
export const formatFormData = (id:string, form: any, setValues: any, value: string) => {
    return setValues({...form, [id]: value})
}