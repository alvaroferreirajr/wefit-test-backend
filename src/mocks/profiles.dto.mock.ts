import { ProfileDto } from "src/profiles/dtos/profile.dto";

export const ProfileDtoMock: ProfileDto = {
    "type": "Legal Entity",
    "document": "12345678000195", // CNPJ com 14 dígitos
    "documentResponsible": "12345678901", // CPF com 11 dígitos
    "name": "Empresa de Teste LTDA",
    "mobile": "+5511998765432", // Número de celular no formato brasileiro
    "phone": "+551133445566", // Número de telefone no formato brasileiro
    "email": "teste@empresa.com",
    "emailConfirm": "teste@empresa.com",
    "zipCode": "12345-678", // CEP no formato brasileiro
    "street": "Rua de Exemplo",
    "number": "123",
    "complement": "Sala 456",
    "city": "São Paulo",
    "neighborhood": "Centro",
    "state": "SP",
    "termsAccepted": true
};