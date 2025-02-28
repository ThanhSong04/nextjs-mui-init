'use client';
import { useAuth } from '@/hooks/use-auth';
import { Box, Button, Container, Typography } from '@mui/material';
import NextLink from 'next/link';

export default function Home() {
  const { profile } = useAuth({
    revalidateOnMount: false,
  });

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
        <Button variant="contained">Contained</Button>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={NextLink} href="/login">
            Go to the login page
          </Button>
        </Box>
        <Typography component="span" sx={{ mb: 2 }}>
          {JSON.stringify(profile)}
        </Typography>
      </Box>
    </Container>
  );
}
