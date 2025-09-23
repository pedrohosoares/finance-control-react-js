export default function maskMoney(value){
    const fmt = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    return fmt.format(value);;
}