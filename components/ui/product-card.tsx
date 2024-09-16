"use client"

import { Product } from "@/types";

interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            Product Card
        </div>
    );
}

export default ProductCard;