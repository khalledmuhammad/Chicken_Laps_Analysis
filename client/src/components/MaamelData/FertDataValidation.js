import * as Yup from "yup";

export const FertValues = {
  production_date: "",
  batch_number:"",
  setting_date:"",
  hatch_date:"",
  candling_date:"",
  farm:"",
  line:"",
  house:"",
  trolly_number:"",
  tray_1:"",
  tray_2:"",
  tray_3:"",
  tray_4:"",
  tray_5:"",
  tray_6:"",
  tray_7:"",
  tray_8:"",
  tray_9:"",


};

export const Validation = Yup.object({
  production_date: Yup.date().required("ادخل تاريخ الانتاج"),
  batch_number:Yup.number().required("يجب ادخال هذا العنصر "),
  setting_date:Yup.date().required("ادخل تاريخ الايداع"),
  hatch_date:Yup.date().required("ادخل تاريخ الفقس"),
  candling_date:Yup.date().required("ادخل تاريخ الاخصاب"),
  farm: Yup.string().required("يجب ادخال هذاالعنصر"),
  line: Yup.string().required("يجب ادخال هذاالعنصر"),
  house: Yup.string().required("يجب ادخال هذاالعنصر"),
  trolly_number:Yup.number().required("يجب ادخال هذا العنصر "),
  tray_1:Yup.number().required("يجب ادخال هذا العنصر "),
  tray_2:Yup.number().required("يجب ادخال هذا العنصر "),
  tray_3:Yup.number().required("يجب ادخال هذا العنصر "),
  tray_4:Yup.number().required("يجب ادخال هذا العنصر "),
  tray_5:Yup.number().required("يجب ادخال هذا العنصر "),
  tray_6:Yup.number().required("يجب ادخال هذا العنصر "),
  tray_7:Yup.number().required("يجب ادخال هذا العنصر "),
  tray_8:Yup.number().required("يجب ادخال هذا العنصر "),
  tray_9:Yup.number().required("يجب ادخال هذا العنصر "),

  
});
