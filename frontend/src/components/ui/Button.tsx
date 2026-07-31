import { Button as PaperButton } from "react-native-paper";

type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

export default function Button({
  title,
  onPress,
  loading = false,
}: Props) {
  return (
    <PaperButton
      mode="contained"
      onPress={onPress}
      loading={loading}
      style={{
        width: "100%",
        borderRadius: 50,
      }}
      contentStyle={{
        height: 50,
      }}
    >
      {title}
    </PaperButton>
  );
}