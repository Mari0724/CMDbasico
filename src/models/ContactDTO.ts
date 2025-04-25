export interface ContactDTO {
    companyId: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    position: string;
    status: "active" | "inactive";
}