import { PedidoVinho } from './pedidovinho';

export class Pedido {
    id: number;
    distancia: number;
    frete: number;
    pedidovinhos: PedidoVinho[] = [];
}
