'use client';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';

export default function Home() {
  // const { profile } = useAuth({
  //   revalidateOnMount: false,
  // });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack spacing={4}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
        <Button variant="contained">Contained</Button>
        <Typography color="error" variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={NextLink} href="/login">
            Go to the login page
          </Button>
        </Box>
        {/* <Typography component="span" sx={{ mb: 2 }}>
          {JSON.stringify(profile)}
        </Typography> */}
      </Box>
    </Container>
  );
}
