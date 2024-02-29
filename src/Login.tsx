import { VStack, Image, Text, FormControl, Box, Input,
Button, Link,  } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/Titulo';
import logo from '../src/assets/logo.png'
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';

export default function Login() {
  return (
    <VStack 
      flex={1} 
      alignItems="center" 
      justifyContent="center"
      p={5}
    >
        <Image source={logo} alt="Logo Voll"/>

        <Titulo>
          Faça login em sua conta
        </Titulo>

        <Box>

           <EntradaTexto 
              label='Email'
              placeholder='Insira seu endereço de e-mail'
           />

           <EntradaTexto
              label='Senha'
              placeholder='Insira sua senha' 
           />

        </Box>

        <Botao>Entrar</Botao>
          <Link 
          href="https://www.alura.com.br"
          mt={2}>
          Esqueceu sua senha ?
          </Link>

          <Box 
             mt={8}
             w="100%" 
             flexDirection="row" 
             justifyContent="center"
          >
            <Text>Ainda não tem cadastro ? </Text>
            <TouchableOpacity>
              <Text
              color="blue.500" 
              >
                Faça seu cadastro!
              </Text>

            </TouchableOpacity>
            
          </Box>
    </VStack>
  );
}


