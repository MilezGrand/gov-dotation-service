import React, { Component } from 'react';
import { ListGroup, Button, Form  } from 'react-bootstrap';
import { getall, getBlock, createBlock } from '../state';

let name;

const getSelected = (e)=>{
   
    name = e.target.value.split(' ').join('-')
    
    console.log(name)
}

const timeConverter =(t)=> {
    var unixetime = Math.floor(t / 1000000)
    let d = new Date(unixetime)
    return d.toUTCString()

}

class List extends Component {
    state = {addresses: [], data: {Timestamp: "",FinanceName: "Название"}}

    async componentDidMount() {
        const addresses = await getall();
        this.setState({ addresses });
    }

    async handleClick (p)  {
        const data = await getBlock(p.address);
        document.getElementById("hash").textContent=p.address;
        this.setState({ data });
        this.componentDidMount()
    }

    async handleCreateClick () {
        if (name == undefined || name == "Выберите субсидию") return
        createBlock(name)
    }

    render() {
    return(
        <div>
            <handleOnClick/>
            <div className="wrapper">
                <div className="leftContainer" id="ctr">
                <ListGroup className="vertical-menu" variant="flush" >
                    {this.state.addresses.reverse().map(p => <ListGroup.Item action onClick={() => this.handleClick(p)}>{p.address}</ListGroup.Item>)}
                </ListGroup>
                </div>
                <div className="rightContainer">

                    <div className="title">Субсидия</div>
                    <div id="name" className="infoBlock">{this.state.data.FinanceName.split('-').join(' ')}</div>
                    <div className="title">Статус</div>
                    <div id="status" className="infoBlock">
                        {this.state.data.Status==0 ? ("Создана"): ("Рассматривается")}
                        </div>
                    <div className="title">Ардес</div>
                    <div id="hash" className="infoBlock">{this.state.addresses.Address}</div>
                    <div className="title">Автор (ИНН)</div>
                    <div id="author" className="infoBlock">{this.state.data.Author}</div>
                    <div className="title">Комментарий</div>
                    <div id="comment" className="infoBlock">Комментарий о состоянии проверки</div>
                    <div className="title">Время</div>
                    <div id="timestamp" className="infoBlock">{timeConverter(this.state.data.Timestamp)}</div>

                    <div className="selectList">
                    <Form.Control as="select" onChange={e => {getSelected(e)}}>
                        <option>Выберите субсидию</option>
                        <option>покупка оборудования за свой счет (без учета НДС)</option>
                        <option>покупка оборудования в лизинг (без учета НДС)</option>
                        <option>уплата процентов по кредитам на приобретение оборудования и развитие хозяйственной деятельности</option>
                    </Form.Control>
                    </div>
                    <div className="sendBtn">
                        <Button variant="primary" size="sm" onClick={() => this.handleCreateClick()}>Отправить</Button>
                        <Button variant="primary" size="sm" onClick={() => this.componentDidMount()}>Обновить</Button>
                    </div>
                </div>
                
                    
            </div>
                
        </div>)
    }
}

export default List;