import Button from "../ui/Button";

type Props = {
  onPress: () => void;
};

export default function ContinueButton({
  onPress,
}: Props) {
  return (
    <Button
      title="Continue"
      onPress={onPress}
    />
  );
}