import { Vinho } from './vinho';

export class Pedido {
    id: number;
    quantidade: number;
    distancia: number;
    frete: number;
    vinhos: Vinho[] = [];
}
