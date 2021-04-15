import React, {Component} from 'react';

export default class item extends Component {
    constructor(props) {
        super(props);
    }
    onClick() {
        window.open('https://calil.jp/book/' + this.props.item.isbn, '_parent');
    }
    render() {
        const item = this.props.item
        const fontSize = (this.props.item.width - this.props.margin) / 14
        return (
            <div className={'book ' + (!this.props.item.cover ? 'nocover' : '')} ref="item" id={item.id} style={{
                width: item.width - this.props.margin + 'px',
                height: item.height - this.props.margin + 'px',
                margin: this.props.margin / 2 + 'px',
                cursor: 'pointer',
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
            }} onClick={this.onClick.bind(this)}>
                {this.props.item.cover ? (
                    <img src={item.cover}
                         alt={item.title}
                         data-aspect={item.properties.aspect}
                         ref="cover"
                         style={{
                            height: item.height - this.props.margin + 'px',
                            width: item.width - this.props.margin + 'px',
                            margin: this.props.margin / 2 + 'px'
                        }}
                    />
                ) : (
                    <React.Fragment>
                        <div className="bg"></div>
                        <div className="textCover">
                            <div className="title" style={{fontSize: fontSize+'px'}}>{item.title}</div>
                            <div className="author" style={{fontSize: fontSize*0.7+'px'}}>{item.author}</div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
}
