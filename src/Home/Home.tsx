import { Box, Grid, Button, TextField, Container } from '@mui/material';
import { CalculadoraCls } from '../Utils/CalculadoraCls';

const teclado: string[] = [
  'x²', '√', '←', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  'C', '0', ',', '='
]

export default function Home() {

  const passaValor = (tecla: string) => {
    var calc = new CalculadoraCls();
    calc.enviaValor(tecla)
  }

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          border: 2,
          padding: 5,
          borderRadius: 2,
        }}
      >
        <TextField
          sx={{
            width: '100%',
            marginBottom: 3,
          }}
          id="txtVisor"
          name="txtVisor"
          variant="outlined"
          disabled
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 12 }}>
            {teclado.map((tecla, index) => (
              <Grid item xs={3} sm={3} md={3} key={index}>
                <Button
                  sx={{
                    height: '100%',
                    width: '100%',
                    background: '#49c4ff',
                    color: '#000077',
                  }}
                  onClick={() => passaValor(tecla)}
                >
                  {tecla}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
