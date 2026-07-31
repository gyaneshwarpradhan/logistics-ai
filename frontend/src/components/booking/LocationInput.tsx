import Input from "../ui/Input";

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function LocationInput({
  label,
  value,
  onChangeText,
}: Props) {
  return (
    <Input
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
  );
}