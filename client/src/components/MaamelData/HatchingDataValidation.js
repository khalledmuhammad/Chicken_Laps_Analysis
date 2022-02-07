import * as Yup from "yup";

export const HatchingValues = {
  farm: "",
  line:"",
  house:"",
  eggs_count:"",
  chicks_count:"",
  trays_count:"",
  hatch_date:"",
  setting_date:"",
  candling_date:"",
  batch_number:"",
  trolly_number:"",
  breeder_count:"",
  boilers_count:"",
  culls_count:""

};

export const Validation = Yup.object({
  farm: Yup.string().required("يجب ادخال هذاالعنصر"),
  line:Yup.string().required("يجب ادخال هذاالعنصر"),
  house:Yup.string().required("يجب ادخال هذاالعنصر"),
  eggs_count:Yup.number().required("يجب ادخال هذا العنصر "),
  chicks_count:Yup.number().required("يجب ادخال هذا العنصر "),
  trays_count:Yup.number().required("يجب ادخال هذا العنصر "),
  hatch_date:Yup.date().required("ادخل تاريخ الاخصاب"),
  setting_date:Yup.date().required("ادخل تاريخ الاخصاب"),
  candling_date:Yup.date().required("ادخل تاريخ الاخصاب"),
  batch_number:Yup.number().required("يجب ادخال هذا العنصر "),
  trolly_number:Yup.number().required("يجب ادخال هذا العنصر "),
  breeder_count:Yup.number().required("يجب ادخال هذا العنصر "),
  boilers_count:Yup.number().required("يجب ادخال هذا العنصر "),
  culls_count:Yup.number().required("يجب ادخال هذا العنصر ")
  
});
