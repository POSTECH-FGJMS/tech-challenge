export const ALL_CATEGORIES = [
    'Lanche',
    'Acompanhamento',
    'Bebida',
    'Sobremesa',
]

export type Category = 'Lanche' | 'Acompanhamento' | 'Bebida' | 'Sobremesa'

export function isCategory(value: string) {
    return ALL_CATEGORIES.includes(value)
}
