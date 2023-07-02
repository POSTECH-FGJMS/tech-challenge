export const ALL_STATUS = ['Recebido', 'Em preparação', 'Pronto', 'Finalizado']

export type Status = 'Recebido' | 'Em preparação' | 'Pronto' | 'Finalizado'

export function isStatus(value: string) {
    return ALL_STATUS.includes(value)
}
