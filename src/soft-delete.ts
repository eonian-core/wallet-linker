
/** 
 * All models have deltedAt and deletedBy fields, which allow to soft delete data 
 * This is a helper to check if the data is not soft deleted
 * */
export const isNotSoftDeleted = {
    deletedAt: {
        isSet: false,
    },
}