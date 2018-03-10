import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchScreen from './presenter';
import SearchBar from '../../components/SearchBar';

class Container extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            headerTitle: (
                <SearchBar submit={text => params.submitSearch(text)} />
            )
        };
    };

    static propTypes = {
        getEmptySearch: PropTypes.func.isRequired,
        searchByHashtag: PropTypes.func.isRequired,
        search: PropTypes.array
    };

    static defaultProps = {
        search: []
    };

    state = {
        searchingBy: '',
        isFetching: false
    };

    componentDidMount() {
        const { navigation } = this.props;
        navigation.setParams({
            submitSearch: this._submitSearch
        });
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.search) {
            this.setState({
                isFetching: false
            });
        }
    };

    render() {
        return (
            <SearchScreen
                {...this.state}
                {...this.props}
                refresh={this._refresh}
            />
        );
    }

    _submitSearch = text => {
        const { searchingBy } = this.state;
        const { searchByHashtag, getEmptySearch } = this.props;
        if (text === '') {
            getEmptySearch();
        } else {
            searchByHashtag(text.toLowerCase());
        }
        this.setState({
            searchingBy: text,
            isFetching: true
        });
    };

    _refresh = () => {
        const { searchingBy } = this.state;
        const { getEmptySearch, searchByHashtag } = this.props;
        if (searchingBy === '') {
            getEmptySearch();
        } else {
            searchByHashtag(searchingBy);
        }
    };
}

export default Container;
