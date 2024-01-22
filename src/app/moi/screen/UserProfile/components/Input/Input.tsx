import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import { Input, IconButton, Typography, styled } from '@mui/material';
import { EditInputProps } from './prop.types';
// import { useField } from 'formik';

export default function EditInput(props: EditInputProps) {
  const { value, label } = props;
  // const [field] = useField(name);

  const [editInput, setEditInput] = React.useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const input = React.useRef<null | any>(null);

  const handleClick = () => {
    if (editInput) {
      setEditInput(false);
      input.current.blur();
    }
    setEditInput((edit) => !edit);
    input.current.focus();
  }

  // const inputChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (props.onChange) {
  //     return props.onChange({
  //       name,
  //       value: event.target.value,
  //     });
  //   }

  //   helper.setTouched(true, true);
  //   helper.setValue(event.target.value);
  // };

  return (
    <FormControl
      sx={
        {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          maxHeight: '50px',
          gap: '50px'
        }
      }
      variant="standard"
    >
      <InputWrapper>
        <Typography sx={{color: '#90A4BE'}}>{label}</Typography>
        <Input
          value={value}
          inputRef={input}
          disableUnderline
          fullWidth
        />
      </InputWrapper>
      <IconButton
        aria-label="edit button"
        onClick={handleClick}
        sx={
          {
            border: '1px solid #E5EEFF',
            width: '50px',
            height: '50px'
          }
        }
      >
        {editInput ? <DoneOutlineOutlinedIcon /> : <EditOutlinedIcon />}
      </IconButton>
    </FormControl>
  );
}

const InputWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%'
}));