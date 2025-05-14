import { useMutation } from "@tanstack/react-query"
import { createAccount as createAccountApi } from "../services/apiForm"

export function useCreateAccount() {
    const {mutate: createAccount, isPending, isError} = useMutation({
        mutationFn: createAccountApi
    })

    return {createAccount, isPending, isError}
}