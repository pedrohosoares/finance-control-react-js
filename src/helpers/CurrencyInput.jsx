export default function CurrencyInput({ value, onChange }) {
  const fmt = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handle = (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    const cents = digits.length ? parseInt(digits, 10) : 0;
    const masked = fmt.format(cents / 100);

    onChange({
      target: {
        name: e.target.name,
        value: masked,
      },
    });
  };

  return (
    <input
      value={value}
      className="form-control"
      name="value"
      placeholder="12.000,00"
      onChange={handle}
      inputMode="numeric"
      autoComplete="off"
    />
  );
}