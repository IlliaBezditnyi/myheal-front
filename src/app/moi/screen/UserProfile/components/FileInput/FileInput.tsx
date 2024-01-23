import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton, TextField, Typography, styled } from '@mui/material';
import { useField } from 'formik';
import { EditInputProps } from '../Input/prop.types';
import { useTranslation } from 'react-i18next';
import { FileValue } from '../../../../../shared/components/form/File/value.type';

export const FileInput = (props: EditInputProps) => {
  const { t } = useTranslation();
  const { label, name, onChange } = props;
  const [_, meta, helpers] = useField(name);
  const [fileName, setFileName] = React.useState<string>(t('add.file'));

  // const [editInput, setEditInput] = React.useState(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files?.length) {
      setFileName(
        Array.from(files)
          .map(file => file.name)
          .join(', '),
      );
    }

    const fileValue = files?.[0];

    if (onChange) {
      return onChange({
        name,
        value: fileValue,
      });
    }

    helpers.setTouched(true, true);
    helpers.setValue(fileValue);
  };

  return (
    <FormControl
      sx={
        {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxHeight: '50px'
        }
      }
    >
      <InputWrapper>
        <Typography>{label}</Typography>
        <label>
          <Typography>{fileName}</Typography>
          <input type="file" hidden onChange={onChangeHandler} name={name} />
        </label>
      </InputWrapper>
      <IconButton
        component="label"
        sx={
          {
            border: '1px solid #E5EEFF',
            width: '50px',
            height: '50px'
          }
        }
      >
        <AddCircleOutlineIcon />
        <input type="file" hidden onChange={onChangeHandler} name={name} />
      </IconButton>
    </FormControl>
  );
}

const InputWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}));