import { Grid, Button, TextField, Container, Paper } from '@mui/material';
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
      <Container maxWidth="xs">
        <Paper elevation={6} sx={{ padding: 2, marginTop: 2, }}>

          <Grid container spacing={{ xs: 1.2 }}>
            <Grid item xs={12}>
              <TextField
                sx={{
                  textAlign: 'left',
                }}
                id="txtVisor"
                name="txtVisor"
                variant="outlined"
                fullWidth
                disabled
              />
            </Grid>
            {teclado.map((tecla, index) => (
              <Grid item xs={3} key={index}>
                <Button
                  sx={{
                    background: '#49c4ff',
                    color: '#000077',
                  }}
                  onClick={() => passaValor(tecla)}
                  fullWidth
                >
                  {tecla}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
