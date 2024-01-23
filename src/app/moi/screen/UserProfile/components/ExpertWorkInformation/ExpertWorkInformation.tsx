import React from 'react';
import { CustomCard } from '../../../../components/layout/Card/Card';
import { Box, Button, Card, Grid, Stack, TextField, Typography, styled } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useTranslation } from 'react-i18next';
import EditInput from '../Input/Input';
import { FileInput } from '../FileInput/FileInput';

export const ExpertWorkInformation = () => {
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
            <Stack spacing={2}>
              <CardWrapper>
                <Typography variant='h6'>{t('cabinet.profile.expert.workInformation')}</Typography>
                <EditInput value={'user.translations.last_name'} label={t('oneExpert.specialization')} />
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.experience')} />
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.workPhonesNumbers')} />
              </CardWrapper>
              <CardWrapper>
                <Stack spacing={1}>
                  <Typography variant='h6'>{t('company.form.files.types.license')}</Typography>
                  <Typography variant='subtitle2'>
                    Для того, щоб продовжити ліцензію "Сімейний лікар",
                    необхідно завантажити підтверджуючі документи, які дають дозвіл на здійснення професійної діяльності.
                  </Typography>
                </Stack>
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.document')} />
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.expert.form.diplom')} />
                <EditInput value={'user.translations.last_name'} label={t('cabinet.profile.expert.form.license')} />
              </CardWrapper>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CardWrapper>
              <Typography variant='h6'>{t('oneExpert.receivingLocation')}</Typography>
              <EditInput value={'user.translations.last_name'} label={t('eHealth.address.settlement')} />
              <EditInput value={'user.translations.last_name'} label={t('reference.N_063_O.address.street')} />
              <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3}>
                <EditInput value={'user.translations.last_name'} label={t('reference.N_063_O.address.building')} />
                <EditInput value={'user.translations.last_name'} label={t('reference.N_063_O.address.pavilion')} />
              </Stack>
              <Stack spacing={1}>
                <Typography variant='subtitle1'>{t('map')}</Typography>
                <Box sx={{height: '300px', border: '1px solid #D2E3F8', borderRadius: '20px'}}></Box>
              </Stack>
            </CardWrapper>
          </Grid>
        </Grid>
      </Box>
    </CustomCard>
  )
}

const CardWrapper = styled(Card)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
  padding: '20px 20px',
  border: '1px solid #D2E3F8'
}));
