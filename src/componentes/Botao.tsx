import { Button } from "native-base";

interface BotaoProps {
    children: React.ReactNode
}

export function Botao({ children } : BotaoProps){
    return(
        <Button
           w="100%"
           bg="blue.800"
           mt={10}
           borderRadius="lg"
        >
          {children}
          </Button>
    )
}