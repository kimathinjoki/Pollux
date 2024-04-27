

function Groups() {

    const numRows = 3;
    const groupNames = ['Vacation', 'Flight', 'Roadtrip'];
    const rows = [];
    for (var i = 0; i < numRows; i++) {
        rows.push(<tr>
            <td>
                <h1>
                    {groupNames[i]}
                </h1>
            </td>
            <td>
                <p>Description P1</p>
                <p>Description P2</p>
            </td>
        </tr>);
    }

    return (
        <table class="pollux-table">
            {rows}
        </table>
    );
}

export default Groups;