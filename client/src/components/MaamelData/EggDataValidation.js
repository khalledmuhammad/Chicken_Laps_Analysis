import * as Yup from "yup";

export const EggDataValues = {
  production_date: "",
  age  : "",
  farm : "",
  flock : "",
  line : "",
  house : "",
  floor_egg : "",
  dirty: "",
  small :"",
  crack : "",
  misshape:"",
  white:"",
  broken:"",
  nest_egg:""


};

export const Validation = Yup.object({
  
  
  
  production_date: Yup.date().required("ادخل تاريخ الانتاج"),
  age  : Yup.number().required("يجب ادخال هذا العنصر "),
  farm : Yup.string().required("يجب ادخال المزرعه"),
  flock : Yup.string().required("يجب ادخال هذاالعنصر"),
  line : Yup.string().required("يجب ادخال هذاالعنصر"),
  house : Yup.string().required("يجب ادخال هذاالعنصر"),
  floor_egg : Yup.number().required("يجب ادخال هذا العنصر "),
  dirty: Yup.number().required("يجب ادخال هذا العنصر "),
  small :Yup.number().required("يجب ادخال هذا العنصر "),
  crack : Yup.number().required("يجب ادخال هذا العنصر "),
  misshape:Yup.number().required("يجب ادخال هذا العنصر "),
  white:Yup.number().required("يجب ادخال هذا العنصر "),
  broken:Yup.number().required("يجب ادخال هذا العنصر "),
  nest_egg: Yup.number().required("يجب ادخال هذا العنصر "),

  
});
