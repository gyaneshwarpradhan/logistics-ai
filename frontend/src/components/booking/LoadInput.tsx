import Input from "../ui/Input";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function LoadInput({
  value,
  onChangeText,
}: Props) {
  return (
    <Input
      label="Load Weight (Kg)"
      value={value}
      keyboardType="numeric"
      onChangeText={onChangeText}
    />
  );
}