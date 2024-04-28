

function Groups() {

    const numRows = 3;

    const groupList=[{name:'Activity1',participants:[
        'p1','p2','p3'
    ]},{name:'Activity2',participants:[
        'p1','p2','p3'
    ]},
    {name:'Activity3',participants:[
        'p1','p2','p3'
    ]},]
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
            {groupList.map(group=>
                <div class="card">
                    <section width="50%" float="left">
                    <h2>
                        {group.name}
                    </h2>
                    </section>
                    <section width="50%" float="right">
                        <ul>
                            {group.participants.map(p=>{
                                <li>{p}</li>
                            })}
                        </ul>
                    </section>
                    
                </div>)}
        </table>
    );
}

export default Groups;