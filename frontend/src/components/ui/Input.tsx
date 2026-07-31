import { TextInput } from "react-native-paper";

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?:
    | "default"
    | "numeric"
    | "phone-pad"
    | "email-address";
};

export default function Input({
  label,
  value,
  onChangeText,
  keyboardType = "default",
}: Props) {
  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      style={{
        width: "100%",
        marginBottom: 16,
      }}
    />
  );
}