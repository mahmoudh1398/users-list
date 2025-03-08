import { TextField, TextFieldVariants } from "@mui/material";
import { debounce } from "@/tools/debounce";
import { styled } from "@mui/material/styles";

interface TProps {
  onChange: (query: string) => void;
  placeholder?: string;
  variant?: TextFieldVariants;
  width?: string;
}

const CssTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "#ffffffdd",
  },
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

export default function SearchInput({
  onChange,
  placeholder = "Search...",
  variant = "outlined",
  width = "300px",
}: TProps) {
  const handleOnChange = debounce((value: string) => {
    onChange(value);
  });

  return (
    <CssTextField
      variant={variant}
      sx={{ width }}
      placeholder={placeholder}
      onChange={(e) => handleOnChange(e.target.value)}
    />
  );
}
