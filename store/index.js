/**
 * State
 *
 * - similar to data
 */
export const state = () => ({})

/**
 * Getters
 *
 * - similar to computed properties
 * - track their dependencies and automatically update when they change
 * - vuex will automatically pass state as the first parameter
 * - vuex will automatically pass all existing getters as the second parameter
 */
export const getters = {}

/**
 * Actions
 *
 * - similar to methods
 * - can be complex, but never update the state
 * - responsible for the logic of when a mutation should be fired
 * - vuex will automatically pass the context object as the first parameter
 * - context exposes the same methods and properties as the store object
 */
export const actions = {}

/**
 * Mutations
 *
 * - set and update state
 * - should be as simple as possible
 * - only responsible for updating a piece of state
 * - vuex will automatically pass state as the first parameter
 */
export const mutations = {}
