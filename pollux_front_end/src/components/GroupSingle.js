

function GroupSingle() {

    const numRows = 5;
    const expenseNames = ['Food', 'Bread', 'Gas', 'Apples', 'More Bread'];
    const rows = [];
    for (var i = 0; i < numRows; i++) {
        rows.push(<tr>
            <td>
                {expenseNames[i]}
            </td>
            <td>
                <p>Description P1</p>
                <p>Description P2</p>
            </td>
        </tr>);
    }

    return (
        <table>
            {rows}
        </table>
    );
}

export default GroupSingle;