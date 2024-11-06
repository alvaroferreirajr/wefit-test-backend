import { IsEmail, IsNotEmpty, IsOptional, IsString, IsBoolean, IsPhoneNumber, Matches } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProfileDto {
  @ApiProperty({ description: 'Type of the profile, either Individual or Legal Entity' })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({ description: 'Document number, either CPF or CNPJ' })
  @IsNotEmpty()
  @Matches(/^\d{11}$|^\d{14}$/, {
    message: 'Document must be a valid CPF (11 digits) or CNPJ (14 digits)',
  })
  document: string;

  @ApiProperty({ description: 'Responsible person CPF, required for Legal Entity', required: false })
  @IsOptional()
  @Matches(/^\d{11}$/, {
    message: 'Document Responsible must be a valid CPF (11 digits)',
  })
  documentResponsible: string;

  @ApiProperty({ description: 'Full name of the profile' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Mobile phone number in Brazilian format' })
  @IsNotEmpty()
  @IsPhoneNumber('BR', { message: 'Mobile must be a valid phone number in Brazil' })
  mobile: string;

  @ApiProperty({ description: 'Phone number in Brazilian format' })
  @IsNotEmpty()
  @IsPhoneNumber('BR', { message: 'Phone must be a valid phone number in Brazil' })
  phone: string;

  @ApiProperty({ description: 'Email address' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Email confirmation address' })
  @IsNotEmpty()
  @IsEmail()
  emailConfirm: string;

  @ApiProperty({ description: 'ZIP code in Brazilian format' })
  @IsNotEmpty()
  @Matches(/^\d{5}-?\d{3}$/, { message: 'ZipCode must be a valid format' })
  zipCode: string;

  @ApiProperty({ description: 'Street name' })
  @IsNotEmpty()
  @IsString()
  street: string;

  @ApiProperty({ description: 'House or building number' })
  @IsNotEmpty()
  @IsString()
  number: string;

  @ApiProperty({ description: 'Additional address information', required: false })
  @IsOptional()
  @IsString()
  complement: string;

  @ApiProperty({ description: 'City name' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ description: 'Neighborhood name' })
  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @ApiProperty({ description: 'State abbreviation' })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({ description: 'Indicates if terms are accepted' })
  @IsNotEmpty()
  @IsBoolean()
  termsAccepted: boolean;
}