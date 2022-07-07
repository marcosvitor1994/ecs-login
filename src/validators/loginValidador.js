import mensagens from "./mensagens"

/* Premissas senha:
    -Nove ou mais caracteres
    -Ao menos 1 dígito
    -Ao menos 1 letra minúscula
    -Ao menos 1 letra maiúscula
    -Ao menos 1 caractere especial
    -Considere como especial os seguintes caracteres: !@#$%^&*()-+
    -Não possuir caracteres repetidos dentro do conjunto
*/

const LoginValidator = {
    
    email: {
        required: mensagens.requiredEmail,
        maxLength: {value: 100, message: mensagens.maxLength + ': 100'},
        pattern: {value: /\S+@\S+\.\S+/ , message: mensagens.emailIncorreto}
    },
    senha: {
        required: mensagens.requiredSenha,
        minLength: {value: 9, message: mensagens.minLength + ': 9'}, 
        pattern: {value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{9,20}$/, message: mensagens.senhaIncorreta},
    }
}

export default LoginValidator