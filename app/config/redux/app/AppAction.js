import AppConfig from "./AppConfig"

export const setLoading = v => ({type: AppConfig.SET_LOADING, send: v})
export const setSnackBar = v => ({type: AppConfig.SET_SNACK_BAR, send: v})