import {Table, Model, Column, AllowNull, ForeignKey } from 'sequelize-typescript'
import Event from "./Event"

@Table
class UserEvent extends Model {
    @AllowNull(false)
    @Column
    userId: number

    @ForeignKey(() => Event)
    @AllowNull(false)
    @Column
    eventId: number
}

export default UserEvent