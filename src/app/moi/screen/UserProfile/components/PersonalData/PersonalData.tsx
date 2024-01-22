import React from 'react';
import { CustomCard } from '../../../../components/layout/Card/Card';
import { Box, Button, Card, Grid, Stack, TextField, Typography, styled } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useTranslation } from 'react-i18next';
import EditInput from '../Input/Input';
import { FmTextField } from '../../../MyFamily/components/FmTextField/FmTextField';

export const PersonalData = () => {
  const { t } = useTranslation();
  return (
    <CustomCard
      title={t('cabinet.profile.title')}
      actions={
        <Button
          variant="contained"
          startIcon={<SaveOutlinedIcon />}
          color="primary"
          type="submit"
          onClick={() => {}}
        >Save</Button>
      }
    >
      <Box sx={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack spacing={2} sx={{width: '100%'}}>
              <CardWrapper>
                <Typography variant='h6'>{t('eHealth.personal_info')}</Typography>
                <EditInput value={'user.translations.last_name'} label={t('lastName')} />
                <EditInput value={'user.translations.last_name'} label={t('firstName')} />
                <EditInput value={'user.translations.last_name'} label={t('secondName')} />
                <EditInput value={'user.translations.last_name'} label={t('sex.sex')} />
                <EditInput value={'user.translations.last_name'} label={t('birthday.date')} />
                <EditInput value={'user.translations.last_name'} label={t('oneExpert.foreignLanguages')} />
                <EditInput value={'user.translations.last_name'} label={t('link.social')} />
              </CardWrapper>
              <CardWrapper>
                <Typography variant='h6'>{t('record.my-data')}</Typography>
                <EditInput value={'user.translations.last_name'} label={t('med-info.bloodGroup')} />
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.address')} />
                <EditInput value={'user.translations.last_name'} label={t('med-info.allergy')} />
                <EditInput value={'user.translations.last_name'} label={t('med-info.medicine')} />
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.phone')} />
                <EditInput value={'user.translations.last_name'} label={t('med-info.chronic-diseases')} />
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.email')} />
              </CardWrapper>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack spacing={2} sx={{width: '100%'}}>
              <CardWrapper>
                <Typography variant='h6'>{t('address')}</Typography>
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.location')} />
                <EditInput value={'user.translations.last_name'} label={t('eHealth.address.region')} />
                <EditInput value={'user.translations.last_name'} label={t('eHealth.address.settlement')} />
                <EditInput value={'user.translations.last_name'} label={t('reference.N_063_O.address.street')} />
                <EditInput value={'user.translations.last_name'} label={t('reference.N_063_O.address.building')} />
                <EditInput value={'user.translations.last_name'} label={t('reference.N_063_O.address.apartment')} />
                <Typography variant='h6'>{t('company.form.contacts')}</Typography>
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.phones.phone')} />
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.phones.phone')} />
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.email')} />
              </CardWrapper>
              <CardWrapper>
                <Typography variant='h6'>{t('eHealth.capitationRequest.additionalInfo')}</Typography>
                <TextField multiline rows={4} />
              </CardWrapper>
              <CardWrapper>
                <Typography variant='h6'>{t('menu.profile.my-declarants')}</Typography>
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.email')} />
              </CardWrapper>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </CustomCard>
  )
}

// const CardsContainer = styled(Stack)(() => ({
//   display: 'flex',
//   gap: '15px',
//   marginTop: '20px'
// }));

// const ContentContainer = styled(Stack)(() => ({
//   display: 'flex',
//   gap: '20px',
//   width: '100%',
//   height: '100%'
// }));

const CardWrapper = styled(Card)(() => ({
  width: '100%',
  // height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '20px 20px',
  border: '1px solid #D2E3F8'
}));
