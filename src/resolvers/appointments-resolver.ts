import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { createAppointmentInput } from "../dtos/inputs/create-appointments";
import { Appointment } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/customer-model";

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      }
    ]
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: createAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    }
    
    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointments: Appointment) {
    return {
      name: 'Dênner Rondinely'
    }
  }
}