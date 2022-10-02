export type ChildrenType = {
    children: React.ReactNode;
};

export type ItemsType = {
    name: string;
    img: string;
}

export type ProductsType = {
    name: string;
    items: ItemsType[];
}

export type GetProductsResponseType = {
    data: ProductsType[];
};

export interface NavigationControlsProps {
    handleClick: (e: React.MouseEvent<HTMLElement>) => void
}

export interface ButtonProps {
    label: string;
    handleClick: (e: React.MouseEvent<HTMLElement>) => void
}

export interface DropdownOptionProps {
    label: string;
    labelValue: string | number;
}

export interface DropdownProps {
    options: DropdownOptionProps[];
    defaultOption?: DropdownOptionProps;
}