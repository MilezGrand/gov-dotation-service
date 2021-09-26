import React, {Component} from 'react';
import s from './Profile.module.css';
import { ListGroup, Button, Form  } from 'react-bootstrap';

export default class Profile extends Component{

    
    render(){
        return (
            <div className={s.wrapper}>
                <div className={s.horizontalContainer}>
                    <div className={s.issuesList}>
                        <ListGroup className={s.verticalMenu}  >
                            <ListGroup.Item action active>покупка оборудования за свой счет (без учета НДС)</ListGroup.Item>
                            <ListGroup.Item action >покупка оборудования в лизинг (без учета НДС)</ListGroup.Item>
                            <ListGroup.Item action >уплата процентов по кредитам на приобретение оборудования и развитие хозяйственной деятельности</ListGroup.Item>
                            <ListGroup.Item action >покупка оборудования за свой счет (без учета НДС)</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className={s.statusHistory}>
                        <ListGroup   >
                            <ListGroup.Item variant="secondary">26.09.2021 5:20 <b>Создано</b></ListGroup.Item>
                            <ListGroup.Item variant="secondary">26.09.2021 5:37 <b>Принято в обработку</b></ListGroup.Item>
                            <ListGroup.Item variant="secondary">26.09.2021 5:42 <b>Проверка документов</b></ListGroup.Item>
                            <ListGroup.Item variant="secondary">26.09.2021 5:58 <b>Проверка задолжностей</b></ListGroup.Item>
                            <ListGroup.Item variant="secondary">26.09.2021 6:00 <b>Отклонено</b></ListGroup.Item>
                        </ListGroup>
                        <div className={s.commentBlock}>
                            <div className={s.label}>
                                <b>Комментарий:</b>
                            </div>
                            <div>
                                Комментарий о том, почему заявка отклонена
                            </div>
                        </div>
                        
                    </div>
                    <div class={s.sendIssue}>
                        <Form.Control as="select" >
                            <option>Выбирите субсидию</option>
                            <option>покупка оборудования за свой счет (без учета НДС)</option>
                            <option>покупка оборудования в лизинг (без учета НДС)</option>
                            <option>уплата процентов по кредитам на приобретение оборудования и развитие хозяйственной деятельности</option>
                        </Form.Control>

                        <div className={s.btn}>
                            <Button variant="primary" size="sm" >Отправить заявку</Button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}