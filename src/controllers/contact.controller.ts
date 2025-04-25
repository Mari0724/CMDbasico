import { Body, Controller, Get, Post, Route, Tags } from "tsoa";
import prisma from '../prismaClient'; // cliente separado
import { ContactDTO } from "../models/ContactDTO";
import { contactSchema } from "../models/ContactModel";


@Route("contacts")
@Tags("Contacts")
export class ContactController extends Controller {
    @Get("/")
    public async getContacts() {
        return prisma.contact.findMany();
    }

    @Post("/")
    public async createContact(@Body() contact: ContactDTO) {
        const validated = contactSchema.parse(contact); // Aquí validamos con Zod
        return prisma.contact.create({ data: validated });
    }
}
