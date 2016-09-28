const React = require('react');

class GreenFlag extends React.Component {
    constructor (props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick (e) {
        e.preventDefault();
        this.props.vm.greenFlag();
    }
    render () {
        return (
            <div className="scratch-green-flag">
                <button onClick={this.onClick}>{this.props.title}</button>
            </div>
        );
    }
}

GreenFlag.propTypes = {
    title: React.PropTypes.string,
    vm: React.PropTypes.object
};

GreenFlag.defaultProps = {
    title: 'Go'
};

module.exports = GreenFlag;