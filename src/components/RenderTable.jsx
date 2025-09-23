export default function RenderTable({ data,setEditValue,excludeItem }) {
  return (
    <tbody>
      {data.map((value, index) => (
        <tr key={value.id}>
          <td>{value.date}</td>
          <td>{value.type}</td>
          <td>{value.category}</td>
          <td>{value.value}</td>
          <td className="text-end">
            <button type="button" className="btn btn-warning" title="Editar" onClick={(e)=>setEditValue(value)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                id="update-alt"
                data-name="Flat Line"
                className="icon flat-line"
              >
                <path
                  id="primary"
                  d="M5.07,8A8,8,0,0,1,20,12"
                  style={{fill: 'none',stroke: '#FFF',strokeLinecap: 'round',strokeLinejoin: 'round',strokeWidth: '2'}}
                />
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M18.93,16A8,8,0,0,1,4,12"
                  style={{fill: 'none',stroke: '#FFF',strokeLinecap: 'round',strokeLinejoin: 'round',strokeWidth: '2'}}
                />
                <polyline
                  id="primary-3"
                  data-name="primary"
                  points="5 3 5 8 10 8"
                  style={{fill: 'none',stroke: '#FFF',strokeLinecap: 'round',strokeLinejoin: 'round',strokeWidth: '2'}}
                />
                <polyline
                  id="primary-4"
                  data-name="primary"
                  points="19 21 19 16 14 16"
                  style={{fill: 'none',stroke: '#FFF',strokeLinecap: 'round',strokeLinejoin: 'round',strokeWidth: '2'}}
                />
              </svg>
            </button>
            <button type="button" className="btn btn-danger ms-1" title="Excluir" onClick={(e)=>excludeItem(value.key)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
