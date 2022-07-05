type Componente = {
    new(...args: any[]): {
        render(): any;
    }
}

export default function logRender<T extends Componente>(componente: T) {
    return class extends componente {
        render() {
            console.log('Rendering component...');
            const r: any = super.render();
            console.log('Component rendered.');
            return r;
        }
    }
}