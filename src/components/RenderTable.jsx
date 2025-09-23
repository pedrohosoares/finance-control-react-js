export default function RenderTable({data})
{
    return (
        <tbody>
            {data.map((value, index) => (
                <tr key={index}>
                    <td>{value.date}</td>
                    <td>{value.type}</td>
                    <td>{value.category}</td>
                    <td>{value.value}</td>
                </tr>
            ))}
        </tbody>
    );
}