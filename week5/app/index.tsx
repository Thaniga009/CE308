import "./global.css";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

// interface สำหรับข้อมูล form
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

//interface สำหรับ error messages
interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Index (){
  const [formData, setFormData] = useState<FormData> ({
    fullName: "",
    email: "",
    phone:"",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors> ({});

  const [touched, setTouched] = useState<{[key: string]: boolean }> ({});
  
  const [isLoading, setIsLoading] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "fullname" :
        if (!value.trim()) {
          return "กรุณากรอกชื่อ-นามสกุล";
        }
        if (value.trim()) {
          return "ชื่อ-นามสกุลต้องมีอย่าสงน้อย3ตัวอักษร";
        }
        return undefined;

      case "email":
        if (!value.trim()) {
          return "กรุณากรอกอีเมล";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "รูปแบบอีเมลไม่ถุกต้อง";
        }
        return undefined;

      case "phone":
        if (!value.trim()) {
          return "กรุณากรอกเบอร์โทรศัพท์";
        }
        const phoneRegax = /^[0-9]{10}$/;
        if (!phoneRegax.test(value)) {
          return "เบอร์โทรศัพท์ต้องเป็นเลข 10 หลัก";
        }
        return undefined;

      case "password":
        if (!value) {
          return "กรุณากรอกรหัสผ่าน";
        }
        if (value.length < 6) {
          return "รหัสผ่านต้องมีอย่างน้อย 6 ตัว";
        }
        return undefined;

      case "confirmPassword":
        if (!value) {
          return "กรุณากรอกรหัสผ่านยืนยัน";
        }
        if (value !== formData.password) {
          return "กรุณายืนยันรหัสผ่าน";
        }
        if (value !== formData.password) {
          return "รหัผ่านไม่ตรงกัน";
        }
        return undefined;

      default:
      return undefined;
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
   setFormData((prev) => ({
     ...prev,
     [name]: value,
    }));

  // validate realtime ถ้า field ถูก touch แล้ว
   if (touched[name]) {
      const error = validateField(name, value);
     setErrors((prev) => ({
       ...prev,
       [name]: error,
      }));
  };
  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

  const error = validateField(name, formData[name]);
  setErrors((prev) => ({
    ...prev,
    [name]: error,
  }));

  const validateForm = (): boolean => {
  const newErrors: FormErrors = {};
  let isValid = true;

  // ตรวจสอบทุก field
  (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
    const error = validateField(key, formData[key]);
    if (error) {
      newErrors[key] = error;
      isValid = false;
    }
  });

  setErrors(newErrors);

  // mark ทุก field ว่า touch แล้ว
  const allTouched: { [key: string]: boolean } = {};
  Object.keys(formData).forEach((key) => {
    allTouched[key] = true;
  });
  setTouched(allTouched);

  return isValid;
};

  const handleSubmit = async () => {
    Keyboard.dismiss();

    if (!validateForm()) {
      Alert.alert("ข้อมูลไม่ถูกต้อง","กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        "สำเร็จ!",
        `ลงทะเบียนสำเร็จ\n\nชื่อ: ${formData.fullName}\nอีเมล: ${formData.email}\nเบอร์: ${formData.phone}`,
        [
          {
            text: "ตรวจสอบ",
            onPress: () => console.log("Form Data:", formData),
          },
          {
            text: "รีเซ็ตฟอร์ม",
            onPress: handleReset,
            style: "cancel",
          },
        ]
      );
    },2000);
  };
  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setTouched({});
  };
  return (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    className="flex-1"
    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        className="flex-1 bg-gray-50"
        contentContainerClassName="pb-8"
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View className="bg-blue-600 pt-16 pb-8 px-6">
          <Text className="text-white text-3xl font-bold">
            ลงทะเบียนสมาชิก
          </Text>
          <Text className="text-blue-100 text-base mt-2">
            กรุณากรอกข้อมูลให้ครบถ้วน
          </Text>
        </View>
        <View className="px-6 mt-6">
          {/* ชื่อ-นามสกุล */}
          <CustomInput
          label="ชื่อ-นามสกุล"
          placeholder ="ระบุชื่อและนามสกุล"
          value={formData.fullName}
          onChangeText={(value) => handleChange("fullName")}

        </View>

        {/* เนื้อหาฟอร์ม ใส่ต่อจากตรงนี้ */}
      </ScrollView>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);






};


}

}