export class CreateCompanyDTO{
    Email:string;
    Name:string;
    TypeCompanyId:number;
    Longtude:string;
    Latetud:string;
    AddressId:number;
    CityName:string;
    Note:string;
    Rustorant:boolean;
    Swimmingbool:boolean;
    Cooffee:boolean;

}
export class fordel{
    Email:string;
}
export class UpdateCompanyDTO{
    Email:string;
    Name:string;
    TypeCompanyId:number;
    Longtude:string;
    Latetud:string;
    AddressId:number;
    CityName:string;
    Note:string;
    Rustorant:boolean;
    Swimmingbool:boolean;
    Cooffee:boolean;

}

export class CreateServiceDTO{
    Email:string;
    Name:string;
    Number:number;
    NumberPeople:number;
    Price:number;
    Description:string;
}
export class UpdateServiceDTO{
    Email:string;
    Name:string;
    Number:number;
    NumberPeople:number;
    Price:number;
    Description:string;
}
export class CreateReportDTO{
    Reporttext:string;
}